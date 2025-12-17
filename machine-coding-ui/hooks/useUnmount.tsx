/*
# useUnmount — Problem Description

Build a custom React hook named `useUnmount` that runs a callback function **when a component unmounts**.

This is useful for cleanup logic that you want to keep reusable and declarative—like cancelling requests, removing subscriptions, clearing timers, logging analytics events, or resetting external state when a component is removed from the UI.

## What the hook should do

- Accept input(s):
  - `callback` (function): a function to run when the component unmounts.
- Return:
  - Nothing (void)

## Expected behavior

- Register an unmount handler when the component mounts.
- When the component unmounts, invoke `callback` exactly once.
- Ensure the latest callback is used (avoid stale closures if the callback changes across renders).
- The hook should not trigger re-renders by itself.
- Cleanup should be safe and idempotent (if your callback is written to be safe).

## Typical use cases

- Clearing timers/intervals created outside of React effects
- Cancelling in-flight requests (e.g., aborting fetch) or unsubscribing from streams
- Removing global event listeners registered elsewhere
- Flushing analytics logs or “page leave” events on unmount
- Resetting external stores or caches when leaving a route/view
*/

export function useUnmount() {}
// TODO::implementation
