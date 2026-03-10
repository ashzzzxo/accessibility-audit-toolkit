# Accessibility Audit and Remediation Toolkit

A lightweight accessibility QA toolkit built with JavaScript, Playwright, axe-core, Lighthouse CI, and manual browser testing to detect serious accessibility issues, document findings, save screenshots, and verify remediations through before-and-after testing.

## Author

Asmitha Ramesh

## Overview

This project automates accessibility checks for webpages and sample UI components by:

- opening a target page in an automated browser
- scanning the page for accessibility issues using axe-core
- filtering serious and critical violations
- saving clean markdown reports in the `reports/` folder
- saving screenshots for each audit run
- verifying accessibility fixes with reproducible broken and fixed test pages
- checking basic keyboard accessibility behavior
- documenting manual DevTools findings and prioritized fixes

## Features

- Automated accessibility testing with Playwright
- Accessibility rule scanning with axe-core
- Clean markdown report generation
- Automatic screenshot capture for each audit run
- Reproducible broken and fixed local test cases
- Public website auditing using a dynamic target URL
- Keyboard accessibility test for focusable interactive elements
- Form accessibility examples with broken and fixed states
- Aria role validation examples with broken and fixed states
- Color contrast validation examples with broken and fixed states
- Prioritized accessibility fix list
- Manual browser testing and Chrome DevTools validation
- Optional Lighthouse CI integration

## Tech stack

- JavaScript
- Playwright
- axe-core / `@axe-core/playwright`
- Lighthouse CI
- Chrome DevTools
- VS Code

## Project structure

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
│  ├─ aria-broken-report.md
│  ├─ aria-fixed-report.md
│  ├─ contrast-broken-report.md
│  ├─ contrast-fixed-report.md
│  ├─ fix-list.md
│  ├─ devtools-notes.md
│  └─ screenshots/
│     ├─ broken-page.png
│     ├─ fixed-page.png
│     ├─ form-broken.png
│     ├─ form-fixed.png
│     ├─ aria-broken.png
│     ├─ aria-fixed.png
│     ├─ contrast-broken.png
│     └─ contrast-fixed.png
└─ sample-pages/
   ├─ sample-broken.html
   ├─ sample-fixed.html
   ├─ forms/
   │  ├─ sample-form-broken.html
   │  └─ sample-form-fixed.html
   ├─ keyboard/
   │  ├─ sample-keyboard-broken.html
   │  └─ sample-keyboard-fixed.html
   ├─ aria/
   │  ├─ sample-aria-broken.html
   │  └─ sample-aria-fixed.html
   └─ contrast/
      ├─ sample-contrast-broken.html
      └─ sample-contrast-fixed.html