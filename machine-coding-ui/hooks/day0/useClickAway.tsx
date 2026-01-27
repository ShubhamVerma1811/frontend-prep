/*
# useClickAway — Problem Description

Build a custom React hook named `useClickAway` that helps you **detect clicks (and touches) outside of a specific element** and run a callback when that happens.

This is useful for UI patterns where an element should close or dismiss when the user interacts anywhere else on the page—like dropdown menus, popovers, modals, tooltips, or context menus.

## What the hook should do

- Accept one input:
  - `callback` (function): a function to call when a click/touch occurs outside the target element
- Return:
  - `ref` (React ref): a ref you attach to the element you want to treat as the “inside” area

## Expected behavior

- When the user clicks or touches **outside** the element attached to `ref`, the hook should call `callback`.
- When the user clicks or touches **inside** the element, the hook should do nothing.
- The hook should listen to common outside-interaction events (typically `mousedown` and `touchstart`) at the document level.
- The hook should clean up event listeners when the component unmounts.
- The hook should always call the **latest** version of `callback` (avoid stale closures).

## Typical use cases

- Closing a dropdown when clicking outside
- Dismissing a popover or tooltip on outside interaction
- Closing a modal when clicking outside its content
- Hiding an autocomplete panel when focus/click moves elsewhere

*/

export function useClickAway() {}
// TODO::implementation
