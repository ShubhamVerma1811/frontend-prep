/*
# useMediaQuery — Problem Description

Build a custom React hook named `useMediaQuery` that lets you subscribe to a CSS media query and get a boolean result that updates in real time.

This is useful for making components responsive in JavaScript—so you can conditionally render or change behavior based on viewport size, orientation, color scheme preferences, etc. The hook should rely on the browser’s `window.matchMedia` API and update whenever the media query match result changes.

## What the hook should do

- Accept one input:
  - `query` (string): a valid CSS media query string (e.g., `"(min-width: 768px)"`)
- Return:
  - `matches` (boolean): `true` if the media query currently matches, otherwise `false`

## Expected behavior

- On the client, evaluate the query using `window.matchMedia(query)` and return its current `matches` value.
- Subscribe to media query changes so that when the match result changes, the hook triggers a re-render and returns the updated boolean.
- If `query` changes, unsubscribe from the old `MediaQueryList` and subscribe to the new one.
- If used in a server environment (where `window`/`matchMedia` is unavailable), the hook should throw an error (since media queries only work in the browser).

## Typical use cases

- Rendering mobile vs desktop layouts (e.g., switching navigation patterns)
- Reacting to orientation changes (portrait vs landscape)
- Supporting user preferences like `prefers-reduced-motion` or `prefers-color-scheme`
- Enabling/disabling UI features based on responsive breakpoints

*/

export function useMediaQuery() {}
// TODO::implementation
