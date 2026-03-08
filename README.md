# Accessibility Audit & Remediation Toolkit

A lightweight accessibility QA toolkit built with JavaScript, Playwright, axe-core, and Lighthouse CI to detect serious accessibility issues, document findings, and verify remediations through before/after testing.

## Author
**Asmitha Ramesh**

## Overview
This project automates accessibility checks for webpages by:
- opening a target page in an automated browser
- scanning the page for accessibility issues using axe-core
- filtering serious and critical violations
- saving clean markdown reports in the `reports/` folder
- verifying accessibility fixes with reproducible broken and fixed test pages

## Features
- Automated accessibility testing with Playwright
- Accessibility rule scanning with axe-core
- Clean markdown report generation
- Reproducible local broken/fixed test cases
- Support for auditing public websites using a dynamic target URL
- Optional Lighthouse CI integration

## Tech Stack
- JavaScript
- Playwright
- axe-core / @axe-core/playwright
- Lighthouse CI
- Chrome DevTools
- VS Code

## Project Structure
```text
accessibility-audit-toolkit/
├─ package.json
├─ lighthouserc.js
├─ playwright.config.js
├─ README.md
├─ .gitignore
├─ tests/
│  └─ accessibility.spec.js
├─ checklists/
│  └─ manual-checklist.md
├─ reports/
│  ├─ broken-page-report.md
│  ├─ fixed-page-report.md
│  └─ food-com-audit-report.md
└─ sample-pages/
   ├─ sample-broken.html
   └─ sample-fixed.html