/*
# useWindowScroll — Problem Description

Build a custom React hook named `useWindowScroll` that helps you **track the current window scroll position** and provides a helper to **programmatically scroll** to a target position.

This is useful for building scroll-aware UI (like “back to top” buttons, scroll progress indicators, sticky headers) and for performing controlled scrolling (jumping to sections, restoring scroll position, smooth scrolling, etc.).

## What the hook should do

- Accept no inputs.
- Return:
  - `[state, scrollTo]` (tuple):
    - `state` (object): the current scroll coordinates:
      - `x` (number | null): the current horizontal scroll position
      - `y` (number | null): the current vertical scroll position
    - `scrollTo` (function): a helper to scroll the window. It should support:
      - `scrollTo(options)` where `options` is an object accepted by `window.scrollTo`
      - `scrollTo(x, y)` where `x` and `y` are numbers

## Expected behavior

- On mount, initialize `state` with the current `window.scrollX` and `window.scrollY` values.
- Subscribe to window scroll events and update `state` whenever the user scrolls.
- Provide a `scrollTo` function that delegates to `window.scrollTo`, supporting both object-form and numeric (x, y) arguments.
- Clean up the scroll event listener on unmount to avoid memory leaks.

## Typical use cases

- Showing/hiding a “Back to top” button based on scroll position
- Implementing scroll progress indicators
- Restoring scroll position after navigation
- Smooth scrolling to anchors/sections on the page

*/

export function useWindowScroll() {}
// TODO::implementation
