/*
# useIsFirstRender — Problem Description

Build a custom React hook named `useIsFirstRender` that tells you whether the current render is the **first render** of a component.

This is useful when you want to conditionally run logic only on initial mount (or avoid running logic on initial mount), and treat subsequent renders differently.

## What the hook should do

- Accept no inputs.
- Return:
  - `isFirstRender` (boolean): `true` on the first render, and `false` on every render after that.

## Expected behavior

- On the very first render of a component, the hook should return `true`.
- After the first render, the hook should consistently return `false`.
- The result should be stable across subsequent re-renders and not reset unless the component unmounts and mounts again.

## Typical use cases

- Skipping an effect on initial mount (run only on updates)
- Preventing animations or toasts from firing on first load
- Running “initialization-only” logic once per mount
- Avoiding expensive work on first render while allowing it on subsequent renders

*/

export function useIsFirstRender() {}
// TODO::implementation
