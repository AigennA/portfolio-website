// =====================================================
// Language switch (Swedish <-> English)
// The page is written in Swedish. English is applied by translating
// text nodes and a few attributes with the dictionary below, so the
// Swedish HTML stays the single source of content. A MutationObserver
// also translates content that script.js renders later (project cards,
// galleries, course tables, form messages).
// Add new texts here as "Swedish": "English" (whitespace is ignored).
// =====================================================
(function () {
    "use strict";

    const EN = {
        "Portfolio – Aygen": "Portfolio – Aygen",
        "Hoppa till innehållet": "Skip to content",
        "Hem": "Home",
        "Projekt": "Projects",
        "Kompetenser": "Skills",
        "Utbildning": "Education",
        "Erfarenhet": "Experience",
        "Kontakt": "Contact",
        "LIA 2 från 14 dec 2026 eller 10 jan 2027": "Internship (LIA 2) from 14 Dec 2026 or 10 Jan 2027",
        "Hej,": "Hi,",
        "Välkommen till min": "Welcome to my",
        "Systemutvecklare .NET med fokus på fullstack och AI": ".NET developer focused on full\u2060-\u2060stack and AI",
        "Jag studerar till systemutvecklare med inriktning .NET på TUC Yrkeshögskola i Linköping. Jag har genomfört min LIA hos Activator som fullstack-utvecklare med projektet Moverot. Jag har 14 certifikat från Anthropic Academy, bland annat Claude Code in Action och Model Context Protocol, och arbetar aktivt med AI-assisterad utveckling.": "I am studying to become a .NET software developer at TUC Yrkeshögskola in Linköping, Sweden. I completed my internship (LIA) at Activator as a full-stack developer on the Moverot project. I hold 14 certificates from Anthropic Academy, including Claude Code in Action and Model Context Protocol, and I work actively with AI-assisted development.",
        "Läs om min LIA": "Read about my internship",
        "Se mina Claude-certifikat": "See my Claude certificates",
        "Studerande systemutvecklare · TUC Yrkeshögskola": "Software development student · TUC Yrkeshögskola",
        "Linköping, Sverige": "Linköping, Sweden",
        "LIA-perioder:": "Internship periods (LIA):",
        "30 mars – 5 juni 2026": "30 March – 5 June 2026",
        "14 dec 2026 – 28 maj 2027": "14 Dec 2026 – 28 May 2027",
        "LIA 2 kan även börja 10 jan 2027 (efter jullovet)": "LIA 2 can also start on 10 Jan 2027 (after the Christmas break)",
        "LIA = Lärande i arbete: praktik (internship) på en arbetsplats som ingår i en eftergymnasial yrkeshögskoleutbildning.": "LIA = Lärande i arbete (learning at work): an internship at a workplace that is part of a Swedish post-secondary vocational programme (yrkeshögskola).",
        "Examensarbete:": "Degree project:",
        "14 dec 2026 – 30 apr 2027": "14 Dec 2026 – 30 Apr 2027",
        "Exjobb: ett självständigt slutprojekt i utbildningen.": "Exjobb: an independent final project in the programme.",
        "Kontakta mig": "Contact me",
        "Utvalda arbeten": "Selected work",
        "Egenarbete · Mobilapp": "Personal project · Mobile app",
        "Håll koll på dina prenumerationer: status, månadskostnad, betyg och totalt betalt. Kopplad till ett eget REST-API.": "Keep track of your subscriptions: status, monthly cost, rating and total paid. Connected to my own REST API.",
        "LIA – Activator": "Internship – Activator",
        "Hälso- och aktivitetsapp för iOS, Android och webb. Fullstack-utveckling och testning i ett agilt team.": "Health and activity app for iOS, Android and web. Full-stack development and testing in an agile team.",
        "AI-projekt": "AI projects",
        "Plattform för en bilhandlare med eget API. Senast: bokning av verkstad och besiktning, provkörning med QR-kod, Min bokning och status Såld/Reserverad. WCAG 2.2 AA och 300+ tester.": "Platform for a car dealer with its own API. Latest: workshop and inspection booking, test-drive booking with QR code, \"My booking\" and Sold/Reserved status. WCAG 2.2 AA and 300+ tests.",
        "AI-projekt · E-handel": "AI project · E-commerce",
        "E-handelsprojekt byggt med AI-verktyget Lovable.": "E-commerce project built with the AI tool Lovable.",
        "Skolarbete · Webbplats": "School project · Website",
        "Webbplats för ett kafé i Linköping byggd i Umbraco CMS och SCSS: aktuellt, galleri, karta, sökfunktion och öppettider.": "Website for a café in Linköping built with Umbraco CMS and SCSS: news, gallery, map, search and opening hours.",
        "Umbraco CMS · SCSS · .NET · Skolprojekt": "Umbraco CMS · SCSS · .NET · School project",
        "Skolarbete · Grupp": "School project · Group",
        "Skolprojekt byggt i grupp – en SPA-sajt för evenemang och klubbar.": "School project built in a group – an SPA site for events and clubs.",
        "Klicka för att se alla projekt": "See all projects",
        "LIA 1 · 30 mars – 5 juni 2026": "Internship 1 · 30 March – 5 June 2026",
        "LIA – Activator, Linköping": "Internship – Activator, Linköping",
        "Under min första LIA-period arbetar jag som fullstack-utvecklare och testare hos Activator. Jag jobbar med projektet Moverot – en hälso- och aktivitetsapp tillgänglig på iOS, Android och webb. Jag arbetar med både frontend och backend med tekniker som MongoDB och ABP Framework i riktiga applikationer med riktig data.": "During my first internship period I work as a full-stack developer and tester at Activator. I work on Moverot – a health and activity app available on iOS, Android and web. I work on both frontend and backend with technologies such as MongoDB and ABP Framework, in real applications with real data.",
        "Jag testar applikationer i staging, produktion och lokala miljöer – både som användare och kodbaserat. Vi arbetar agilt med daglig Scrum och DevOps. Jag har även deltagit i kundmöten och varit med och firat releaser tillsammans med teamet.": "I test applications in staging, production and local environments – both as a user and with code. We work agile with daily Scrum and DevOps. I have also taken part in customer meetings and celebrated releases together with the team.",
        "<!-- Om min portfolio -->": "<!-- About my portfolio -->",
        "Här kan du se ett urval av mina projekt, erfarenheter och kompetenser som systemutvecklare. Portfolion är byggd för att ge en tydlig och enkel överblick över vad jag kan och vad jag har arbetat med.": "Here you can see a selection of my projects, experience and skills as a software developer.\nThe portfolio is built to give a clear and simple overview of what I can do and what I have worked on.",
        "Välkommen att utforska!": "Welcome to explore!",
        "Vad jag kan": "What I can do",
        "Tekniska kompetenser": "Technical skills",
        "Kommunikation och yrkesintroduktion": "Communication and professional introduction",
        "Git och versionshantering": "Git and version control",
        "Agilt arbetssätt – Azure DevOps, GitHub, Trello": "Agile ways of working – Azure DevOps, GitHub, Trello",
        "Informationsarkitektur och databasutveckling": "Information architecture and database development",
        "Grundläggande frontend- och backendutveckling": "Fundamental frontend and backend development",
        "Programmering – fördjupning": "Programming – advanced",
        "LIA 1 – Activator AB": "Internship 1 – Activator AB",
        "Claude Code / AI-assisterad utveckling": "Claude Code / AI-assisted development",
        "Claude-certifikat från Anthropic": "Claude certificates from Anthropic",
        "Jag har 14 certifikat från Anthropic Academy (2026) inom Claude, Claude Code, Model Context Protocol och AI Fluency.": "I hold 14 certificates from Anthropic Academy (2026) in Claude, Claude Code, Model Context Protocol and AI Fluency.",
        "Färdiga kurser": "Completed courses",
        "Pågående kurser": "Ongoing courses",
        "Kommande kurser": "Upcoming courses",
        "Kurs": "Course",
        "Löptid": "Period",
        "Poäng": "Credits",
        "Programmering, grund": "Programming, fundamentals",
        "JavaScript, HTML och CSS": "JavaScript, HTML and CSS",
        "Utvecklingsmetoder": "Development methods",
        "Programmering fördjupning": "Programming, advanced",
        "LIA 1": "Internship 1 (LIA)",
        "IT-säkerhet för utvecklare": "IT security for developers",
        "Webbapplikationer och mobil utveckling": "Web applications and mobile development",
        "Publiceringsverktyg och UX": "Publishing tools and UX",
        "Test, verifiering och certifiering": "Testing, verification and certification",
        "Examensarbete": "Degree project",
        "LIA 2": "Internship 2 (LIA)",
        "Språk": "Languages",
        "Svenska": "Swedish",
        "Engelska": "English",
        "Turkiska": "Turkish",
        "På fritiden": "In my free time",
        "Bygger egna projekt och testar nya idéer": "Building my own projects and trying out new ideas",
        "Intresserad av UI/UX och användarflöden": "Interested in UI/UX and user flows",
        "Följer tekniskt innehåll och dokumentation": "Following technical content and documentation",
        "Testar appar och webbplatser ur användarperspektiv": "Testing apps and websites from a user's perspective",
        "Arbetar kreativt med AI-verktyg och lär mig promptteknik": "Working creatively with AI tools and learning prompt engineering",
        "Skapar musik och låtar med hjälp av AI som ett kreativt verktyg": "Creating music and songs with AI as a creative tool",
        "Kurser jag har genomfört hos Anthropic Academy under 2026.": "Courses I completed at Anthropic Academy in 2026.",
        "Claude och Claude Code": "Claude and Claude Code",
        "– grunderna i att arbeta med Claude i studier och vardag": "– the basics of working with Claude in studies and everyday life",
        "– Claude Code i ett riktigt utvecklingsflöde, från kontext till planering och granskning av ändringar": "– Claude Code in a real development workflow, from context to planning and reviewing changes",
        "– dela upp större uppgifter på subagenter i Claude Code": "– splitting larger tasks across subagents in Claude Code",
        "– låta Claude utföra uppgifter i flera steg med filer och verktyg": "– letting Claude carry out multi-step tasks with files and tools",
        "Bygga med Claude": "Building with Claude",
        "– anropa Claude från kod, skriva promptar och använda tool use": "– calling Claude from code, writing prompts and using tool use",
        "– köra Claude via AWS": "– running Claude via AWS",
        "– bygga MCP-servrar som ger Claude tillgång till verktyg och data": "– building MCP servers that give Claude access to tools and data",
        "– fördjupning i hur MCP-servrar och klienter kommunicerar": "– in depth on how MCP servers and clients communicate",
        "– 4D-ramverket för att arbeta med AI": "– the 4D framework for working with AI",
        "– vad AI är bra på, var den gör fel och hur man granskar resultatet": "– what AI is good at, where it goes wrong and how to review the output",
        "– hur man lär ut ramverket till andra": "– how to teach the framework to others",
        "– AI i undervisning och lärande": "– AI in teaching and learning",
        "– praktisk AI-användning i små företag (med PayPal)": "– practical use of AI in small businesses (with PayPal)",
        "– AI i ideella organisationer (med GivingTuesday)": "– AI in non-profit organisations (with GivingTuesday)",
        "← Tillbaka till Kompetenser": "← Back to Skills",
        "Min väg hit": "How I got here",
        "Pågående · aug 2025 – maj 2027": "Ongoing · Aug 2025 – May 2027",
        "Systemutvecklare .NET – TUC Yrkeshögskola": ".NET Software Developer – TUC Yrkeshögskola",
        "Pågående utbildning inom system- och webbutveckling.": "Ongoing programme in software and web development.",
        "LIA 1 hos Activator – fullstack-utveckling med projektet Moverot.": "Internship 1 at Activator – full-stack development on the Moverot project.",
        "Examensarbete: 14 dec 2026 – 30 apr 2027": "Degree project: 14 Dec 2026 – 30 Apr 2027",
        "LIA 2: 14 dec 2026 – 28 maj 2027": "Internship 2: 14 Dec 2026 – 28 May 2027",
        "10 månader": "10 months",
        "Systemutveckling – Lexicon (10 månader)": "Software development – Lexicon (10 months)",
        "Utbildning med praktik inom frontend och backend.": "Programme with practical training in frontend and backend.",
        "Barn och fritidsprogrammet – Hermods": "Child and Leisure programme – Hermods",
        "Utbildning inom barn och fritid på Hermods.": "Studies in childcare and leisure at Hermods.",
        "Gymnasiet": "Upper secondary",
        "Gymnasieutbildning": "Upper secondary education",
        "Där jag har arbetat": "Where I have worked",
        "Erfarenhet från utbildningsprojekt och praktik med fokus på kodkvalitet, struktur och samarbete.": "Experience from study projects and internships with a focus on code quality, structure and collaboration.",
        "Fullstack-utvecklare & testare · 30 mars – 5 juni 2026": "Full-stack developer & tester · 30 March – 5 June 2026",
        "Jag testar applikationer i staging, produktion och lokala miljöer – både som användare och kodbaserat. Jag har även testat den färdiga appen Golf4u (webb). Vi arbetar agilt med daglig Scrum och DevOps, och har påbörjat spec-driven utveckling. Claude Code är en central del av arbetsprocessen och testprocessen i teamet. Jag har även deltagit i kundmöten och varit med och firat releaser tillsammans med teamet.": "I test applications in staging, production and local environments – both as a user and with code. I have also tested the finished web app Golf4u. We work agile with daily Scrum and DevOps, and have started spec-driven development. Claude Code is a central part of the team's development and testing process. I have also taken part in customer meetings and celebrated releases together with the team.",
        "Praktik · 2 månader": "Internship · 2 months",
        "Praktik – Lexicon, Linköping": "Internship – Lexicon, Linköping",
        "Jag gjorde 2 månaders praktik på Lexicon i Linköping, där jag fick arbeta praktiskt med frontend och backend-utveckling.": "I did a 2-month internship at Lexicon in Linköping, where I worked hands-on with frontend and backend development.",
        "Dekoratör / Butikskommunikatör": "Visual merchandiser / Retail designer",
        "Jag har tidigare arbetat som Visual Merchandiser. Denna erfarenhet har hjälpt mig mycket inom UI/UX, färgkoordination och visuell design. Kreativ presentation och användarcentrerat tänkande har utvecklat mina färdigheter och bidragit till mitt arbete med gränssnitt.": "I have previously worked as a Visual Merchandiser. This experience has helped me a lot with UI/UX, colour coordination and visual design. Creative presentation and user-centred thinking have developed my skills and contributed to my work with interfaces.",
        "Mobil & webb": "Mobile & web",
        "Kvalificerad användare": "Experienced user and tester",
        "Jag är en mycket erfaren och noggrann användare, särskilt på mobila enheter. Jag kan snabbt identifiera brister och förbättringsområden i appar och webbsidor, och bedömer alltid produktens flyt, användarvänlighet och helhetsupplevelse – inte bara genom att scrolla, utan genom att testa alla funktioner och detaljer.": "I am a very experienced and thorough user, especially on mobile devices. I can quickly spot flaws and areas for improvement in apps and websites, and I always assess the product's flow, usability and overall experience – not just by scrolling, but by testing every feature and detail.",
        "Utbildning & deltid": "Training & part-time",
        "Barnskötare – utbildning & deltidsarbete": "Childcare assistant – training & part-time work",
        "Jag har studerat till barnskötare i Sverige och arbetat deltid under en kort period.": "I trained as a childcare assistant in Sweden and worked part-time for a short period.",
        "14 december 2026 – 28 maj 2027": "14 December 2026 – 28 May 2027",
        "14 december 2026 – 30 april 2027": "14 December 2026 – 30 April 2027",
        "Kontakta mig gärna för LIA, praktik eller framtida möjligheter.": "Feel free to contact me about internships or future opportunities.",
        "Skicka e-post": "Send email",
        "Skicka meddelande": "Send message",
        "Namn": "Name",
        "E-post": "Email",
        "Ämne": "Subject",
        "Ditt meddelande": "Your message",
        "Skickar...": "Sending...",
        "✨ Ditt meddelande har skickats! Jag återkommer så snart som möjligt.": "✨ Your message has been sent! I will get back to you as soon as possible.",
        "⚠️ Ett fel uppstod. Försök igen eller skicka e-post direkt.": "⚠️ Something went wrong. Please try again or send an email directly.",
        "⚠️ Anslutningsfel. Kontrollera din internetanslutning.": "⚠️ Connection error. Please check your internet connection.",
        "⚠️ Ange ett giltigt namn.": "⚠️ Please enter a valid name.",
        "⚠️ Ange en giltig e-postadress.": "⚠️ Please enter a valid email address.",
        "⚠️ Ditt meddelande måste vara minst 10 tecken.": "⚠️ Your message must be at least 10 characters long.",
        "© 2026 · Allt innehåll är skyddat och får inte användas utan tillstånd.": "© 2026 · All content is protected and may not be used without permission.",
        "← Tillbaka": "← Back",
        "Alla (9)": "All (9)",
        "Mobilappar (3)": "Mobile apps (3)",
        "AI-projekt (2)": "AI projects (2)",
        "Skolarbete (3)": "School projects (3)",
        "LIA (1)": "Internship (1)",
        "Mobilapp · Snart på Google Play": "Mobile app · Coming soon to Google Play",
        "Offline inköpslista med kategorier, budget, kalender med påminnelser, historik, delning och tre språk. Kommer snart till Google Play, därefter iOS.": "Offline shopping list with categories, budget, calendar with reminders, history, sharing and three languages. Coming soon to Google Play, then iOS.",
        "Mobilapp": "Mobile app",
        "Dagliga positiva affirmationer med animationer. Under testning inför publicering på Google Play.": "Daily positive affirmations with animations. In testing before release on Google Play.",
        "Videodemo": "Video demo",
        "Skolarbete · AI-chatbot": "School project · AI chatbot",
        "Skolarbete: AI-chatbot, visas som videodemo.": "School project: AI chatbot, shown as a video demo.",
        "Mobilappar": "Mobile apps",
        "Moverot (LIA Projekt)": "Moverot (internship project)",
        "Översikt": "Overview",
        "Mobilapp byggd med React Native och Expo i kursen React och mobilappar, kopplad till ett eget REST-API. Håll koll på dina prenumerationer: lägg till tjänster, se status (aktiv, kommande, avslutad), månadskostnad och hur mycket du har betalat totalt.": "Mobile app built with React Native and Expo in the course React and mobile apps, connected to my own REST API. Keep track of your subscriptions: add services, see status (active, upcoming, ended), monthly cost and how much you have paid in total.",
        "Startskärm": "Start screen",
        "Egen appikon och startskärm.": "Custom app icon and start screen.",
        "Sök": "Search",
        "Sök och filtrera bland dina prenumerationer direkt i listan.": "Search and filter your subscriptions directly in the list.",
        "Detaljvy": "Detail view",
        "Redigera namn, anteckning och pris, aktivera eller avsluta prenumerationen och sätt betyg med stjärnor.": "Edit name, note and price, activate or end the subscription and rate it with stars.",
        "Datum & dokument": "Dates & documents",
        "Välj start- och slutdatum och ladda upp dokument, till exempel kvitton eller avtal.": "Choose start and end dates and upload documents, such as receipts or contracts.",
        "Offline inköpslista för Android byggd med Kotlin och Jetpack Compose. Ingen backend – all data sparas lokalt med Room. Funktioner: listor med kategorier, budget, kalender med påminnelser, historik, delning och stöd för tre språk. Kommer snart till Google Play, därefter även till iOS.": "Offline shopping list for Android built with Kotlin and Jetpack Compose. No backend – all data is stored locally with Room. Features: lists with categories, budget, calendar with reminders, history, sharing and support for three languages. Coming soon to Google Play, then also to iOS.",
        "Mobil app byggd med Expo och React Native som visar dagliga positiva affirmationer med animationer. Appen är under testning och planeras för publicering på Google Play. TypeScript-baserad med fokus på användarvänlighet och välmående.": "Mobile app built with Expo and React Native that shows daily positive affirmations with animations. The app is in testing and planned for release on Google Play. Built with TypeScript, with a focus on usability and well-being.",
        "LIA Fullstack": "Full-stack internship",
        "Under min LIA hos Activator arbetar jag som fullstack-utvecklare med projektet Moverot – en hälso- och aktivitetsapp för iOS, Android och webb. Jag jobbar med MongoDB, ABP Framework, frontend och backend i en agil miljö med Scrum och DevOps.": "During my internship at Activator I work as a full-stack developer on Moverot – a health and activity app for iOS, Android and web. I work with MongoDB, ABP Framework, frontend and backend in an agile environment with Scrum and DevOps.",
        "AI-Projekt": "AI projects",
        "Car Dealer – Hemsida": "Car Dealer – Website",
        "Plattform för en bilhandlare byggd med Next.js 16, React 19, TypeScript och Tailwind CSS 4, med ett eget backend-API i ASP.NET Core (.NET 10) och SQL Server. Senast tillagt: onlinebokning för verkstad och besiktning, boka provkörning med QR-kod, \"Min bokning\" där kunden kan se, flytta och avboka utan konto, samt statusen Såld och Reserverad på bilarna. Sidan har sökning och filter, billånekalkylator, inbyte, admin-panel och personal-inloggning med JWT. Uppfyller WCAG 2.2 AA (0 axe-fel), får 91–100 i Lighthouse och har över 300 automatiska tester.": "Platform for a car dealer built with Next.js 16, React 19, TypeScript and Tailwind CSS 4, with its own backend API in ASP.NET Core (.NET 10) and SQL Server. Latest additions: online booking for workshop and inspection, test-drive booking with QR code, \"My booking\" where customers can view, move and cancel without an account, and Sold/Reserved status on the cars. The site has search and filters, a car loan calculator, trade-in, an admin panel and staff login with JWT. Meets WCAG 2.2 AA (0 axe errors), scores 91–100 in Lighthouse and has over 300 automated tests.",
        "Våra Bilar – Galleri": "Our Cars – Gallery",
        "Bilgalleri med filtrering och sökfunktion. Användaren kan bläddra bland premium-fordon och se detaljer.": "Car gallery with filtering and search. Users can browse premium vehicles and see details.",
        "Skolarbete": "School projects",
        "Aktuellt": "News",
        "Webbplats för Café Blixten i Linköping, byggd i Umbraco CMS och SCSS som skolprojekt. Sidan Aktuellt visar nyheter, kommande evenemang och veckans fika som kort med bild, etikett och datum.": "Website for Café Blixten in Linköping, built with Umbraco CMS and SCSS as a school project. The News page shows news, upcoming events and the week's fika as cards with image, label and date.",
        "Hitta oss": "Find us",
        "Adress, inbäddad karta, knapp för vägbeskrivning och tips om buss, parkering och ingång.": "Address, embedded map, a directions button and tips about buses, parking and the entrance.",
        "Galleri": "Gallery",
        "Bildgalleri med en stor bild och mindre bilder bredvid.": "Image gallery with one large image and smaller images beside it.",
        "Sökfunktion": "Search",
        "Sökfält som visar träffar direkt medan man skriver.": "Search field that shows results instantly as you type.",
        "Sidfot": "Footer",
        "Sidfot med öppettider, en indikator som visar om kaféet är öppet just nu, kontaktuppgifter, länkar och sociala medier.": "Footer with opening hours, an indicator showing whether the café is open right now, contact details, links and social media.",
        "Ett Skolprojekt som byggdes med gruppen. Html,Css,Js och en SPA site.": "A school project built in a group. HTML, CSS, JS and an SPA site.",
        "Skolarbete AI-Chatbot.": "School project: AI chatbot.",
        "AÖM – Aygen Ömur Mehmethan, till startsidan": "AÖM – Aygen Ömur Mehmethan, to the home page",
        "Huvudmeny": "Main menu",
        "Öppna meny": "Open menu",
        "Profil": "Profile",
        "Profilbild på Aygen": "Profile photo of Aygen",
        "Min LinkedIn-profil": "My LinkedIn profile",
        "Min GitHub-profil": "My GitHub profile",
        "LIA hos Activator – Moverot": "Internship at Activator – Moverot",
        "Skicka e-post till Aygen": "Send an email to Aygen",
        "Besök min LinkedIn-profil": "Visit my LinkedIn profile",
        "Besök min GitHub-profil": "Visit my GitHub profile",
        "Ditt namn": "Your name",
        "din@email.se": "you@email.com",
        "LIA, Jobbförslag, Fråga etc.": "Internship, job offer, question etc.",
        "Skriv ditt meddelande här...": "Write your message here...",
        "Filtrera projekt": "Filter projects",
        "Skärmbild av": "Screenshot of"
    };

    // Texts that follow a pattern
    const PATTERNS = [
        [/^Skärmbild av (.+)$/, "Screenshot of $1"],
        [/^(\d+) p$/, "$1 credits"]
    ];

    const ATTRS = ["placeholder", "aria-label", "title", "alt"];
    const SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
    const STORAGE_KEY = "portfolio-lang";
    const TITLES = {
        sv: document.title,
        en: "Aygen Ömur Mehmethan – .NET Developer Portfolio"
    };

    const originalText = new WeakMap();   // text node -> Swedish text
    const originalAttr = new WeakMap();   // element -> { attr: Swedish value }
    let lang = "sv";
    let observer = null;

    function normalize(s) {
        return s.replace(/\s+/g, " ").trim();
    }

    function translate(text) {
        const key = normalize(text);
        if (!key) return null;
        if (Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
        for (const [re, out] of PATTERNS) {
            if (re.test(key)) return key.replace(re, out);
        }
        return null;
    }

    // Keep the spacing around the text so inline layout does not change
    function withSpacing(original, translated) {
        const lead = original.match(/^\s*/)[0];
        const trail = original.match(/\s*$/)[0];
        return lead + translated + trail;
    }

    function translateTextNode(node) {
        if (!node.parentNode || SKIP[node.parentNode.nodeName]) return;
        const source = originalText.has(node) ? originalText.get(node) : node.nodeValue;
        const en = translate(source);
        if (en === null) return;
        if (!originalText.has(node)) originalText.set(node, source);
        const next = withSpacing(source, en);
        if (node.nodeValue !== next) node.nodeValue = next;
    }

    function translateAttributes(el) {
        for (const attr of ATTRS) {
            if (!el.hasAttribute(attr)) continue;
            const saved = originalAttr.get(el) || {};
            const source = attr in saved ? saved[attr] : el.getAttribute(attr);
            const en = translate(source);
            if (en === null) continue;
            saved[attr] = source;
            originalAttr.set(el, saved);
            if (el.getAttribute(attr) !== en) el.setAttribute(attr, en);
        }
    }

    function translateTree(root) {
        if (root.nodeType === Node.TEXT_NODE) { translateTextNode(root); return; }
        if (root.nodeType !== Node.ELEMENT_NODE || SKIP[root.nodeName]) return;
        translateAttributes(root);
        root.querySelectorAll("*").forEach(translateAttributes);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) translateTextNode(n);
    }

    function restoreTree(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) {
            if (originalText.has(n)) n.nodeValue = originalText.get(n);
        }
        root.querySelectorAll("*").forEach(el => {
            const saved = originalAttr.get(el);
            if (saved) for (const attr in saved) el.setAttribute(attr, saved[attr]);
        });
    }

    function updateToggle() {
        const btn = document.getElementById("lang-toggle");
        if (!btn) return;
        const toEnglish = lang === "sv";
        btn.setAttribute("aria-label", toEnglish ? "Switch to English" : "Byt till svenska");
        btn.setAttribute("title", toEnglish ? "English" : "Svenska");
        btn.setAttribute("lang", toEnglish ? "en" : "sv");
        // SVG elements have no .hidden property – toggle the attribute instead
        btn.querySelector(".flag-en").toggleAttribute("hidden", !toEnglish);
        btn.querySelector(".flag-sv").toggleAttribute("hidden", toEnglish);
        btn.querySelector(".lang-code").textContent = toEnglish ? "EN" : "SV";
    }

    function setLanguage(next, remember) {
        lang = next === "en" ? "en" : "sv";
        document.documentElement.lang = lang;
        document.title = TITLES[lang];
        if (lang === "en") {
            translateTree(document.body);
            if (!observer) {
                observer = new MutationObserver(records => {
                    for (const r of records) r.addedNodes.forEach(translateTree);
                });
            }
            observer.observe(document.body, { childList: true, subtree: true });
        } else {
            if (observer) observer.disconnect();
            restoreTree(document.body);
        }
        updateToggle();
        if (remember) {
            try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
        }
    }

    function initialLanguage() {
        try {
            const param = new URLSearchParams(location.search).get("lang");
            if (param === "en" || param === "sv") return param;
        } catch (e) {}
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "en" || saved === "sv") return saved;
        } catch (e) {}
        return "sv";
    }

    function init() {
        const btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.addEventListener("click", () => setLanguage(lang === "sv" ? "en" : "sv", true));
        }
        setLanguage(initialLanguage(), false);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
