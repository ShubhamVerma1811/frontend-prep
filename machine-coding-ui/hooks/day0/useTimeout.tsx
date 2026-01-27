/*
# useTimeout — Problem Description

Build a custom React hook named `useTimeout` that lets you schedule a callback to run after a specified delay, with a clean React-friendly API and proper cleanup.

This is useful for delayed actions in UI—like hiding a notification after a few seconds, delaying a transition, debouncing a one-off side effect, or scheduling a future state change.

## What the hook should do

- Accept input(s):
  - `callback` (function): the function to run once the timeout completes
  - `delay` (number): the timeout delay in milliseconds
- Return:
  - `clear` (function): a function to cancel/clear the pending timeout

## Expected behavior

- When the hook is initialized, schedule `callback` to run after `delay` milliseconds.
- If `callback` changes, the hook should ensure the latest `callback` is the one that runs (avoid stale closures).
- If `delay` changes, clear the existing timeout and schedule a new one using the updated delay.
- When `clear` is called, cancel the pending timeout so the callback will not run.
- On component unmount, automatically clear any pending timeout to prevent memory leaks or setting state on an unmounted component.

## Typical use cases

- Auto-dismissing alerts/toasts after N seconds
- Delaying UI transitions or animations
- Scheduling a “retry” or follow-up action after a short pause
- Running one-off delayed side effects (e.g., showing a tooltip after hovering for a bit)

*/

export function useTimeout() {}
// TODO::implementation
