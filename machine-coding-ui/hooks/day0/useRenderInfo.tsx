/*
# useRenderInfo — Problem Description

Build a custom React hook named `useRenderInfo` that helps you **track and log render diagnostics** for a component.

This is useful during development to understand a component’s rendering behavior—how many times it has rendered, how long it has been since the previous render, and when the current render happened—so you can spot unnecessary re-renders and performance issues.

## What the hook should do

- Accept one optional input:
  - `name` (string): a label for the component or render scope (defaults to something like `"Unknown"`)
- Return:
  - `info` (object): an object containing render diagnostics, including:
    - `name` (string): the label passed to the hook
    - `renders` (number): how many times the component has rendered
    - `sinceLastRender` (number): milliseconds elapsed since the previous render (0 on the first render)
    - `timestamp` (number): a timestamp for the current render (e.g., `Date.now()`)

## Expected behavior

- Increment the render count on every render and expose it via `info.renders`.
- Track the time of the previous render and compute `sinceLastRender` for the current render.
- Produce a `timestamp` for the current render.
- Log the `info` object to the console during development to help debugging.
- The hook should keep its internal tracking stable across renders and reset only when the component unmounts and mounts again.

## Typical use cases

- Debugging unexpected re-renders in development
- Comparing render frequency before/after memoization changes
- Identifying components that re-render too often during user interactions
- Adding lightweight render telemetry while diagnosing performance regressions

*/

export function useRenderInfo() {}
// TODO::implementation
