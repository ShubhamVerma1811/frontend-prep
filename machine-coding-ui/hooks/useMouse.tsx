/*
# useMouse — Problem Description

Build a custom React hook named `useMouse` that helps you **track the mouse position** in the document and (optionally) relative to a specific element.

This is useful when you want to build cursor-following UI, interactive visualizations, or tooltips/overlays that react to mouse movement. The hook should expose both page-level coordinates and element-relative coordinates for a target element.

## What the hook should do

- Accept no inputs.
- Return:
  - `[state, ref]` (tuple):
    - `state` (object): the latest mouse position data, including:
      - `x` (number): the mouse cursor’s page X coordinate
      - `y` (number): the mouse cursor’s page Y coordinate
      - `elementX` (number): the mouse cursor’s X position relative to the referenced element
      - `elementY` (number): the mouse cursor’s Y position relative to the referenced element
      - `elementPositionX` (number): the referenced element’s X position on the page
      - `elementPositionY` (number): the referenced element’s Y position on the page
    - `ref` (React ref): attach this to the element you want element-relative coordinates for

## Expected behavior

- Track mouse movement globally and update `x` and `y` whenever the cursor moves.
- If `ref` is attached to an element, also compute:
  - the element’s position on the page, and
  - the mouse position relative to that element.
- If no element is attached yet, still provide `x` and `y` updates, and keep element-relative fields in a safe default state.
- Remove any event listeners on unmount to avoid memory leaks.

## Typical use cases

- Cursor-follow effects (e.g., parallax or spotlight UI)
- Tooltips or context UI positioned near the cursor
- Interactive charts/canvases that respond to mouse position
- Tracking hover position within a specific card/section for custom UI reactions

*/

export function useMouse() {}
// TODO::implementation
