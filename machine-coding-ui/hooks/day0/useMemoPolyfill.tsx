/*
# useMemoPolyfill — Problem Description

Build a custom React hook named `useMemoPolyfill` that mimics the behavior of React’s built-in `useMemo`.

This is useful as a learning exercise and as a fallback abstraction when you want a memoization helper with a familiar API, but you don’t want to directly depend on React’s built-in hook name (or you want to explore how memoization works conceptually).

## What the hook should do

- Accept input(s):
  - `factory` (function): a function that computes and returns a value.
  - `deps` (any[]): a dependency array that determines when the memoized value should be recomputed.
- Return:
  - `value` (any): a memoized value that is recomputed only when dependencies change.

## Expected behavior

- On the first render, call `factory()` and store the returned value.
- On subsequent renders:
  - Compare the current `deps` array with the previous `deps` array.
  - If dependencies are the same (shallow comparison using `Object.is` per position), return the previously stored value without recomputing.
  - If dependencies have changed, call `factory()` again, store the new value, and return it.
- The hook should treat the dependency list length or order changes as a change (i.e., recompute).
- The hook should not cause extra re-renders by itself.
- For correctness, the memoization should be scoped to the component instance (not shared across components).

## Typical use cases

- Avoiding expensive recalculations during re-renders when inputs didn’t change
- Memoizing derived data (e.g., filtered/sorted lists) based on dependencies
- Stabilizing computed objects/arrays to avoid unnecessary downstream effects
- Learning how React-style dependency memoization works
*/

export function useMemoPolyfill() {}
// TODO::implementation
