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