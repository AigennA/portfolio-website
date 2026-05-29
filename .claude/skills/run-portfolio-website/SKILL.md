---
name: run-portfolio-website
description: Run, start, launch, screenshot, or verify the portfolio website. Use when asked to run the app, take a screenshot, or confirm a change works.
---

Static HTML/CSS/JS portfolio served via Python's `http.server`, driven with Puppeteer for screenshots.

All paths relative to repo root.

## Prerequisites

```bash
cd /tmp && npm install puppeteer 2>/dev/null
```

## Build

No build step. Static files served directly.

## Run (agent path) — screenshot via Puppeteer

Start the server and take screenshots:

```bash
bash .claude/skills/run-portfolio-website/screenshot.sh
```

Screenshots land at:
- `screenshot-mobile.png` (390x844 @2x)
- `screenshot-desktop.png` (1440x900)

Read these with the Read tool to visually verify changes.

## Run (human path)

```bash
python3 -m http.server 8080
# Open http://localhost:8080 in browser
```

## Gotchas

- Google Fonts load from CDN — screenshots may show fallback fonts on first load. The script waits 2s after networkidle to mitigate.
- Background image (`images/lia.jpg`) uses `background-attachment: fixed` which doesn't render identically in headless Chrome vs real mobile Safari.
- The site uses `section.active` toggling via JS — only the Home section is visible on initial load. To screenshot other sections, click the nav links first.
- Font Awesome 7.x icons require CDN load — if network is slow, icons may appear as squares.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `ERR_MODULE_NOT_FOUND: puppeteer` | `cd /tmp && npm install puppeteer` |
| `page.waitForTimeout is not a function` | Use `await new Promise(r => setTimeout(r, ms))` instead — removed in Puppeteer 23+ |
| Port 8080 already in use | `kill $(lsof -ti:8080)` then retry |
| Screenshots show blank page | Ensure `http://localhost:8080` returns 200: `curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/` |
