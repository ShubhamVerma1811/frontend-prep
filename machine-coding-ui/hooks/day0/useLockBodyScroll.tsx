/*
# useLockBodyScroll — Problem Description

Build a custom React hook named `useLockBodyScroll` that temporarily **disables scrolling on the document body** while a component is mounted.

This is useful when you want to prevent the background page from scrolling while showing an overlay UI (like a modal, drawer, or dropdown) and then restore the original scroll behavior once the overlay is dismissed.

## What the hook should do

- Accept no inputs.
- Return:
  - Nothing (void)

## Expected behavior

- When the hook is active, it should set the document body’s overflow style to prevent scrolling (commonly `overflow: hidden`).
- It should remember the body’s original overflow style value before changing it.
- When the component using the hook unmounts, the hook should restore the original overflow style so scrolling returns to the previous behavior.
- The hook should avoid leaving the body in a “locked” state if the component unmounts unexpectedly.

## Typical use cases

- Locking background scroll when a modal is open
- Preventing scroll bleed when a side drawer or bottom sheet is visible
- Keeping the page fixed while a full-screen overlay is active
- Disabling background scroll during focused user flows (e.g., confirmation dialogs)

*/

export function useLockBodyScroll() {}
// TODO::implementation
