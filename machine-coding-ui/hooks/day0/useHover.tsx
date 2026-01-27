/*
# useHover — Problem Description

Build a custom React hook named `useHover` that lets you **track whether a specific element is currently being hovered** by the user.

This is useful for UI interactions where you want to change styles, reveal controls, or trigger logic when the user hovers over an element. The hook should return a ref you attach to the target element, along with a boolean indicating hover state.

## What the hook should do

- Accept no inputs.
- Return:
  - `ref` (function ref or React ref): attach this to the element you want to track hover state for
  - `hovering` (boolean): `true` while the element is hovered, otherwise `false`

## Expected behavior

- When the pointer enters the target element, set `hovering` to `true`.
- When the pointer leaves the target element, set `hovering` to `false`.
- If the target element changes over time, the hook should remove listeners from the old element and attach them to the new one.
- Clean up event listeners on unmount to avoid memory leaks.

## Typical use cases

- Showing action buttons on hover (e.g., “Edit”, “Delete” controls)
- Hover tooltips / hint UI
- Highlighting list rows, cards, or table items on hover
- Triggering hover-based previews or animations

*/

export function useHover() {}
// TODO::implementation
