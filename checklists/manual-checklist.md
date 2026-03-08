# Manual Accessibility QA Checklist

## Page structure
- Verify one clear H1
- Check heading order (H1 > H2 > H3)
- Confirm landmarks: header, nav, main, footer
- Check image alt text quality

## Forms
- Every input has a visible label
- Required fields are announced clearly
- Error messages are specific and linked to fields
- Placeholder text is not the only label

## Keyboard behavior
- Tab order is logical
- Visible focus indicator exists
- Menus, dialogs, dropdowns work with keyboard
- No keyboard trap
- Escape closes modals where expected

## DevTools checks
- Review Accessibility tree
- Check color contrast
- Run Lighthouse accessibility audit
- Run axe DevTools browser scan