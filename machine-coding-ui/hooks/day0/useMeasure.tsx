/*
# useMeasure — Problem Description

Build a custom React hook named `useMeasure` that lets you **measure and track an element’s size** (typically width and height) inside a React component.

This is useful for responsive layouts and dynamic UI where rendering depends on an element’s dimensions. The hook should expose a ref to attach to the target element, and it should keep the latest measurements available as React state.

## What the hook should do

- Accept no inputs.
- Return:
  - `ref` (function ref or React ref): attach this to the element you want to measure
  - `dimensions` (object): the current size of the element, typically:
    - `width` (number | null)
    - `height` (number | null)

## Expected behavior

- Before the element is measured (or before the ref is attached), `width` and `height` may be `null`.
- Once the ref is attached to a DOM element, start observing its size changes (commonly via `ResizeObserver`).
- When the element’s size changes, update `dimensions` so the component re-renders with the latest `width` and `height`.
- If the ref is moved to a different element, stop observing the previous element and start observing the new one.
- Clean up the observer on unmount to avoid memory leaks.

## Typical use cases

- Building responsive components (charts, canvases) that need container dimensions
- Measuring elements to position overlays/tooltips accurately
- Implementing layouts that depend on available space (grids, truncation/ellipsis decisions)
- Reacting to size changes caused by window resize or content changes

*/

export function useMeasure() {}
// TODO::implementation
