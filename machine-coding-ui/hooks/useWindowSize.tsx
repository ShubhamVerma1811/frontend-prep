/*
# useWindowSize — Problem Description

Build a custom React hook named `useWindowSize` that lets you **track the current browser window dimensions** in a React component.

This is useful for responsive UIs where rendering or behavior depends on viewport size. The hook should listen for window resize events and keep the latest width/height available as state.

## What the hook should do

- Accept no inputs.
- Return:
  - `size` (object): the current window dimensions:
    - `width` (number | null): the window’s inner width
    - `height` (number | null): the window’s inner height

## Expected behavior

- On mount, initialize the size using the current `window.innerWidth` and `window.innerHeight`.
- Subscribe to the window `resize` event and update the returned size whenever the window is resized.
- Ensure the component re-renders with the latest dimensions after each resize.
- Clean up the `resize` event listener when the component unmounts to avoid memory leaks.

## Typical use cases

- Responsive layout changes (mobile vs desktop rendering)
- Conditionally rendering components based on breakpoint widths
- Recomputing layouts (grids, charts, canvases) when the viewport changes
- Adapting UI density/spacing based on available screen real estate

*/

export function useWindowSize() {}
// TODO::implementation
