# Portfolio Website

[![Quality checks](https://github.com/AigennA/portfolio-website/actions/workflows/quality.yml/badge.svg)](https://github.com/AigennA/portfolio-website/actions/workflows/quality.yml)

This is my personal portfolio website where I present my background, skills, and selected projects.

The purpose of this portfolio is to give a clear and honest overview of how I work with software development, with a focus on structure, usability, and modern UI.

---

## ✨ Features

- Single Page Application (SPA) navigation
- Responsive layout (desktop & mobile)
- Project system with overview and detailed views
- Embedded demo videos for selected projects
- Clean, modern UI with subtle animations
- Swedish and English version (flag button)
- Light and dark mode

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- Font Awesome icons (self-hosted, only the icons in use)
- Self-hosted fonts: Inter and Space Grotesk (no Google Fonts)
- Playwright + axe-core for automated quality checks

---

## ✅ Quality checks

Every pull request is tested automatically with GitHub Actions ([`tests/quality.mjs`](tests/quality.mjs)):

- Accessibility (axe, WCAG 2.2 AA) on every page: Swedish and English, light and dark mode, desktop and mobile
- JavaScript errors and local files that fail to load
- Menu links that point to a page that does not exist
- Swedish text left untranslated in the English version
- External links (warning only)

---

## 📂 Projects

The portfolio includes several projects such as:

- **E-commerce projects** (with video demos)
- **Frontend UI concepts**
- **Mobile apps** (React Native, Kotlin)
- **Backend API practice projects**

Each project contains a short description and, where relevant, links to live demos or external repositories.

---

## 📌 Purpose

This portfolio is created mainly for:

- Internship applications (LIA)
- Junior developer positions
- Presenting practical development skills

---

## 👤 Author

**Aygen**  
 System Developer Student (.NET)  
📍 Sweden

---

## ⚠️ Usage Notice

This repository is shared **for viewing and evaluation purposes only**.

Please do not clone, reuse, copy, or redistribute any part of this project without explicit permission.
