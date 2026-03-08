# DevTools and Manual Browser Testing Notes

## Form Pages
### Broken Form
- Inspected text and email inputs in Chrome DevTools.
- Confirmed the fields relied on placeholder text instead of explicit labels.
- Accessibility inspection showed weak naming context for assistive technologies.

### Fixed Form
- Re-inspected inputs after remediation.
- Confirmed explicit `<label>` elements were present.
- Verified descriptive help text was associated using `aria-describedby`.

## Keyboard Pages
### Broken Keyboard Page
- Tested Tab navigation manually.
- The clickable `div` was not a proper semantic button and did not provide expected keyboard accessibility behavior.

### Fixed Keyboard Page
- Tested Tab navigation manually.
- Focus moved to the semantic `<button>`.
- Verified visible focus outline appeared.
- Verified keyboard activation worked through standard button behavior.

## Summary
Manual browser testing and DevTools inspection supported the automated findings and helped verify the remediation changes.