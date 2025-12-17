/*
# useCallbackPolyfill — Problem Description

Build a custom React hook named `useCallbackPolyfill` that mimics the behavior of React’s built-in `useCallback`.

This is useful as a learning exercise and as a fallback abstraction when you want a stable function reference based on dependencies, but you don’t want to use React’s built-in hook name directly (or you want to explore how callback memoization works conceptually).

## What the hook should do

- Accept input(s):
  - `callback` (function): the function you want to memoize.
  - `deps` (any[]): a dependency array that determines when the memoized function should change.
- Return:
  - `memoizedCallback` (function): a stable function reference that only changes when dependencies change.

## Expected behavior

- On the first render, return the provided `callback`.
- On subsequent renders:
  - Compare the current `deps` array with the previous `deps` array.
  - If dependencies are the same (shallow comparison using `Object.is` per position), return the previously returned function reference.
  - If dependencies have changed (including length/order changes), return the latest `callback`.
- The hook should not cause extra re-renders by itself.
- The memoization should be scoped to the component instance (not shared across components).

## Typical use cases

- Passing stable handlers to memoized child components (`React.memo`) to prevent unnecessary re-renders
- Avoiding re-subscribing effects that depend on function identity
- Stabilizing callbacks passed into event listeners, timers, or custom hooks
- Learning how dependency-based callback memoization works
*/

export function useCallbackPolyfill() {}
// TODO::implementation
