// Automatic quality checks for the portfolio.
// Runs in GitHub Actions on every pull request (see .github/workflows/quality.yml).
// Run locally:  cd tests && npm ci && npx playwright install chromium && npm test
//
// Blocking checks (a red X on the pull request):
//   1. Accessibility (axe, WCAG 2.2 AA) on every page: Swedish + English,
//      light + dark mode, desktop + mobile.
//   2. JavaScript errors and local files that fail to load (404).
//   3. Local files referenced in the code that do not exist.
//   4. Menu links that point to a page section that does not exist.
//   5. Swedish text left untranslated in the English version.
// Non-blocking (only a warning):
//   6. External links (LinkedIn, GitHub, app stores ...) that do not answer.

import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, appendFileSync } from "node:fs";
import { extname, join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = normalize(join(dirname(fileURLToPath(import.meta.url)), ".."));
const require = createRequire(import.meta.url);
const AXE_SOURCE = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const PAGES = ["home", "projects", "skills", "certificates", "education", "experience", "contact", "privacy"];
const VIEWPORTS = [
    { name: "desktop", width: 1280, height: 900 },
    { name: "mobile", width: 390, height: 844 }
];
const AXE_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

// Words and names that are allowed to stay as they are in the English version
const ALLOWED_IN_ENGLISH = [
    "Aygen Ömur Mehmethan", "Aygen", "Ömur", "Mehmethan", "AÖM", "Linköping", "Sverige",
    "TUC Yrkeshögskola", "Yrkeshögskola", "Café Blixten", "Prenumerationskollen", "Moverot",
    "LisTo", "Activator", "Lexicon", "Integritetsskyddsmyndigheten", "IMY", "Lovable",
    "edu.tucsweden.se", "aygen.omur.mehmethan.syne25lin@edu.tucsweden.se", "moverot.se",
    "Mobilappar", "SV", "Skärmbild",
    "Lärande i arbete" // Swedish term, explained in English right after it
];
const SWEDISH_HINT = /[åäöÅÄÖ]|\b(och|för|med|jag|är|att|som|till|på|av|inte|mina?|mitt|eller|från|hos|kurs|kurser)\b/i;

const failures = [];
const warnings = [];
const fail = (msg) => failures.push(msg);
const warn = (msg) => warnings.push(msg);

// ---------- Tiny static file server for the site ----------
const TYPES = {
    ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript",
    ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".woff2": "font/woff2",
    ".mp4": "video/mp4", ".json": "application/json", ".txt": "text/plain", ".ico": "image/x-icon"
};
const server = createServer((req, res) => {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path.endsWith("/")) path += "index.html";
    const file = normalize(join(ROOT, path));
    if (!file.startsWith(ROOT) || !existsSync(file) || !statSync(file).isFile()) {
        res.writeHead(404); res.end("Not found"); return;
    }
    res.writeHead(200, { "Content-Type": TYPES[extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const BASE = `http://127.0.0.1:${server.address().port}/`;

// ---------- 3. Local files referenced in the code ----------
function checkLocalFiles() {
    const sources = ["index.html", "script.js", "style.css", "icons.css", "i18n.js"];
    const seen = new Set();
    for (const src of sources) {
        const text = readFileSync(join(ROOT, src), "utf8");
        const refs = [
            ...text.matchAll(/["'(]((?:images|fonts|videos)\/[^"')\s?#]+)/g),
            ...text.matchAll(/(?:src|href)="(?!https?:|mailto:|tel:|#|data:|\/\/)([^"?#]+)/g)
        ].map((m) => m[1]);
        for (const ref of refs) {
            if (seen.has(ref) || ref.includes("${")) continue;
            seen.add(ref);
            if (!existsSync(join(ROOT, ref))) fail(`Missing file: ${ref} (referenced in ${src})`);
        }
    }
    return seen.size;
}

// ---------- 4. Menu links point to existing sections ----------
async function checkInternalLinks(page) {
    const broken = await page.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll("[data-page]")) {
            const id = el.getAttribute("data-page");
            if (!document.getElementById(id)) out.push(`data-page="${id}"`);
        }
        for (const a of document.querySelectorAll('a[href^="#"]')) {
            const id = a.getAttribute("href").slice(1);
            if (id && !document.getElementById(id)) out.push(`href="#${id}"`);
        }
        return [...new Set(out)];
    });
    broken.forEach((b) => fail(`Link to a section that does not exist: ${b}`));
}

// ---------- 5. Untranslated Swedish text in English ----------
async function untranslatedText(page) {
    return page.evaluate(({ allowed, hint }) => {
        const re = new RegExp(hint, "i");
        const out = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            const node = walker.currentNode;
            const parent = node.parentElement;
            if (!parent || parent.closest("script, style, noscript, [lang='sv'], .skip-translate")) continue;
            if (!parent.getClientRects().length || getComputedStyle(parent).visibility === "hidden") continue;
            let text = node.textContent.replace(/\s+/g, " ").trim();
            if (!text) continue;
            for (const a of allowed) {
                text = text.replace(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "");
            }
            if (re.test(text)) out.push(node.textContent.replace(/\s+/g, " ").trim().slice(0, 90));
        }
        return out;
    }, { allowed: ALLOWED_IN_ENGLISH, hint: SWEDISH_HINT.source });
}

// ---------- Browser checks (1, 2, 4, 5) ----------
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
let axeRuns = 0;
const untranslated = new Set();

for (const vp of VIEWPORTS) {
    for (const theme of ["light", "dark"]) {
        const context = await browser.newContext({
            viewport: { width: vp.width, height: vp.height },
            reducedMotion: "reduce"
        });
        if (theme === "dark") {
            await context.addInitScript(() => { try { localStorage.setItem("portfolio-theme", "dark"); } catch (e) {} });
        }
        const page = await context.newPage();
        // Never count test visits in Umami, and keep tests independent of outside services
        await page.route((url) => !url.href.startsWith(BASE), (route) => route.abort());
        page.on("pageerror", (err) => fail(`JavaScript error (${vp.name}, ${theme}): ${err.message}`));
        page.on("response", (res) => {
            if (res.url().startsWith(BASE) && res.status() >= 400) fail(`Local file failed to load (${res.status()}): ${res.url().slice(BASE.length)}`);
        });

        for (const lang of ["sv", "en"]) {
            for (const name of PAGES) {
                await page.goto(`${BASE}?notrack${lang === "en" ? "&lang=en" : ""}#${name}`, { waitUntil: "load" });
                await page.evaluate((id) => {
                    const link = document.querySelector(`[data-page="${id}"]`);
                    if (link) link.click();
                    window.scrollTo(0, 0);
                }, name);
                await page.mouse.move(vp.width - 2, vp.height - 2);
                await page.waitForTimeout(150);

                if (vp.name === "desktop" && theme === "light" && lang === "sv" && name === "home") {
                    await checkInternalLinks(page);
                }
                if (lang === "en" && theme === "light") {
                    (await untranslatedText(page)).forEach((t) => untranslated.add(`${name}: "${t}"`));
                }

                await page.addScriptTag({ content: AXE_SOURCE });
                const result = await page.evaluate((tags) => window.axe.run({ runOnly: tags }), AXE_TAGS);
                axeRuns++;
                for (const v of result.violations) {
                    const where = v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(", ");
                    fail(`Accessibility [${v.id}] on ${name} (${lang}, ${theme}, ${vp.name}): ${v.help} → ${where}`);
                }
            }
        }
        await context.close();
    }
}
await browser.close();
untranslated.forEach((t) => fail(`Untranslated in English → ${t}`));

// ---------- 6. External links (warning only) ----------
async function checkExternalLinks() {
    const text = readFileSync(join(ROOT, "index.html"), "utf8") + readFileSync(join(ROOT, "script.js"), "utf8");
    const urls = [...new Set([...text.matchAll(/href=["'`](https?:\/\/[^"'`\s$]+)/g)].map((m) => m[1]))];
    for (const url of urls) {
        try {
            const res = await fetch(url, {
                method: "GET", redirect: "follow", signal: AbortSignal.timeout(15000),
                headers: { "User-Agent": "Mozilla/5.0 (portfolio link check)" }
            });
            // LinkedIn and some stores refuse bots (403/429/999) – that is not a broken link
            if (res.status >= 400 && ![401, 403, 405, 429, 999].includes(res.status)) warn(`External link answered ${res.status}: ${url}`);
        } catch (e) {
            warn(`External link did not answer: ${url} (${e.name})`);
        }
    }
    return urls.length;
}

const fileCount = checkLocalFiles();
const linkCount = await checkExternalLinks();
server.close();

// ---------- Report ----------
const lines = [];
lines.push(`## Quality checks`);
lines.push(`- Accessibility runs (axe, WCAG 2.2 AA): ${axeRuns}`);
lines.push(`- Local file references checked: ${fileCount}`);
lines.push(`- External links checked: ${linkCount}`);
lines.push("");
if (failures.length) {
    lines.push(`### ❌ ${failures.length} problem(s)`);
    [...new Set(failures)].forEach((f) => lines.push(`- ${f}`));
} else {
    lines.push(`### ✅ All blocking checks passed`);
}
if (warnings.length) {
    lines.push("");
    lines.push(`### ⚠️ ${warnings.length} warning(s) (not blocking)`);
    warnings.forEach((w) => lines.push(`- ${w}`));
}
const report = lines.join("\n");
console.log(report);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + "\n");
if (process.env.GITHUB_ACTIONS) {
    [...new Set(failures)].forEach((f) => console.log(`::error::${f}`));
    warnings.forEach((w) => console.log(`::warning::${w}`));
}
process.exit(failures.length ? 1 : 0);
