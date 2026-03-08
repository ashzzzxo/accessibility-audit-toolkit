# Accessibility Audit & Remediation Toolkit

A lightweight accessibility QA toolkit built with JavaScript, Playwright, axe-core, Lighthouse CI, and manual browser testing to detect serious accessibility issues, document findings, and verify remediations through before/after testing.

## Author
**Asmitha Ramesh**

## Overview
This project automates accessibility checks for webpages and sample UI components by:

- opening a target page in an automated browser
- scanning the page for accessibility issues using axe-core
- filtering serious and critical violations
- saving clean markdown reports in the `reports/` folder
- verifying accessibility fixes with reproducible broken and fixed test pages
- checking basic keyboard accessibility behavior
- documenting manual DevTools findings and prioritized fixes

## Features
- Automated accessibility testing with Playwright
- Accessibility rule scanning with axe-core
- Clean markdown report generation
- Reproducible broken/fixed local test cases
- Public website auditing using a dynamic target URL
- Keyboard accessibility test for focusable interactive elements
- Form accessibility examples with broken/fixed states
- Prioritized accessibility fix list
- Manual browser testing and Chrome DevTools validation
- Optional Lighthouse CI integration

## Tech Stack
- JavaScript
- Playwright
- axe-core / `@axe-core/playwright`
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
│  ├─ accessibility.spec.js
│  └─ keyboard.spec.js
├─ checklists/
│  └─ manual-checklist.md
├─ reports/
│  ├─ broken-page-report.md
│  ├─ fixed-page-report.md
│  ├─ form-broken-report.md
│  ├─ form-fixed-report.md
│  ├─ keyboard-broken-report.md
│  ├─ keyboard-fixed-report.md
│  ├─ fix-list.md
│  └─ devtools-notes.md
└─ sample-pages/
   ├─ sample-broken.html
   ├─ sample-fixed.html
   ├─ forms/
   │  ├─ sample-form-broken.html
   │  └─ sample-form-fixed.html
   └─ keyboard/
      ├─ sample-keyboard-broken.html
      └─ sample-keyboard-fixed.html