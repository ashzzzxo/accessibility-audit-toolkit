# Prioritized Accessibility Fix List

## High Priority
1. **Missing accessible link name (`link-name`)**
   - Impact: Serious
   - Problem: Screen-reader and keyboard users cannot understand the purpose of the link.
   - Fix: Add visible link text or an accessible label.

2. **Form fields without proper labels**
   - Impact: High
   - Problem: Inputs relying only on placeholder text are not clearly announced to assistive technologies.
   - Fix: Add explicit `<label>` elements and helpful descriptions.

3. **Mouse-only interactive element**
   - Impact: High
   - Problem: A clickable `div` is not keyboard accessible.
   - Fix: Replace with a semantic `<button>` or properly implemented keyboard-accessible control.
4. **Invalid ARIA role value**
   - Impact: High
   - Problem: Invalid `role` values break accessibility semantics and may be ignored by assistive technologies.
   - Fix: Replace invalid roles with valid ARIA roles and add accessible naming where needed.

5. **Insufficient color contrast**
   - Impact: High
   - Problem: Low-contrast text is harder to read for many users and can fail WCAG minimum contrast requirements.
   - Fix: Increase foreground/background contrast to meet at least 4.5:1 for normal text or 3:1 for large text.

## Medium Priority
1. **Weak or missing help text for form inputs**
   - Problem: Users may not understand expected input format.
   - Fix: Add `aria-describedby` help text where useful.

2. **Focus indicator consistency**
   - Problem: Keyboard users may not clearly see where focus is.
   - Fix: Add visible focus styles.

## Low Priority
1. **General semantic cleanup**
   - Problem: Improve maintainability and overall accessibility quality.
   - Fix: Prefer semantic HTML elements over generic containers for interactive behavior.

   