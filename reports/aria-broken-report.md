# Accessibility Report

**URL:** http://127.0.0.1:8080/aria/sample-aria-broken.html

**Status:** Fail

**Serious/Critical Violations:** 1

**Screenshot:** screenshots/aria-broken.png

## Violations

### 1. aria-roles
- Impact: critical
- Help: ARIA roles used must conform to valid values
- Description: Ensure all elements with a role attribute use a valid value
- Help URL: https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright
- Affected nodes: 1
  - Node 1: `<div class="box" role="invalidrole">
    Settings Panel
  </div>`

