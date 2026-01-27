/*
# useIntervalWhen — Problem Description

Build a custom React hook named `useIntervalWhen` that runs a callback on a fixed interval **only when a condition is true**, with an option to control whether it should start immediately.

This is useful for building timers that can be started, paused, and resumed based on application state (like whether a user is active, a modal is open, or a process is running), without manually wiring up interval setup/cleanup in each component.

## What the hook should do

- Accept input(s):
  - `callback` (function): the function to run on every interval tick
  - `ms` (number): the interval duration in milliseconds
  - `when` (boolean): controls whether the interval is active (`true`) or paused (`false`)
  - `startImmediately` (boolean, optional): whether the interval should fire immediately when it becomes active (instead of waiting `ms` milliseconds for the first tick)
- Return:
  - Nothing (void)

## Expected behavior

- When `when` is `true`, set up an interval that invokes `callback` every `ms` milliseconds.
- When `when` is `false`, ensure no interval is running (pause/stop ticking).
- If `startImmediately` is `true` and `when` becomes `true`, invoke `callback` right away once, then continue ticking on the interval.
- If `ms` changes while active, clear the previous interval and start a new one using the updated `ms`.
- Ensure the interval always calls the latest `callback` (avoid stale closures when `callback` changes).
- Always clean up the interval on unmount (and when `when` flips to `false`) to prevent memory leaks.

## Typical use cases

- Polling an API only while a panel/page is visible
- Pausing a timer while a modal is open or while the app is in the background
- Running periodic updates only while a “playing/running” flag is true
- Implementing controlled intervals for games, animations, or progress indicators

*/

export function useIntervalWhen() {}
// TODO::implementation
