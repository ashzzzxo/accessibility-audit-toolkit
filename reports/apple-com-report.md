# Accessibility Report

**URL:** https://www.apple.com

**Status:** Fail

**Serious/Critical Violations:** 2

## Violations

### 1. aria-required-children
- Impact: critical
- Help: Certain ARIA roles must contain particular children
- Description: Ensure elements with an ARIA role that require child roles contain them
- Help URL: https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- Affected nodes: 2
  - Node 1: `<ul class="media-gallery-item-container" role="list" style="transform: translate3d(0px, 0px, 0px);">`
  - Node 2: `<ul class="media-gallery-item-container" role="list" style="transform: translate3d(0px, 0px, 0px);">`

### 2. color-contrast
- Impact: serious
- Help: Elements must meet minimum color contrast ratio thresholds
- Description: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- Help URL: https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- Affected nodes: 2
  - Node 1: `<div class="button button-neutral media-gallery-button" aria-hidden="true">Listen now</div>`
  - Node 2: `<div class="button button-neutral media-gallery-button" aria-hidden="true">Listen now</div>`

