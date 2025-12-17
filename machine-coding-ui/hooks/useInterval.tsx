/*
# useInterval — Problem Description

Build a custom React hook named `useInterval` that lets you run a callback repeatedly on a fixed time interval, while integrating cleanly with React’s lifecycle.

This is useful for periodic tasks like polling, timers, and animations—without having to manually manage `setInterval` setup/cleanup inside every component.

## What the hook should do

- Accept two inputs:
  - `callback` (function): the function to run on every tick of the interval
  - `delay` (number | null): the interval duration in milliseconds. If `null`, the interval should be paused/disabled.
- Return:
  - Nothing (void)

## Expected behavior

- When `delay` is a number, set up an interval that invokes `callback` every `delay` milliseconds.
- If `callback` changes between renders, the interval should call the latest version of `callback` (avoid stale closures).
- If `delay` changes, clear the previous interval and start a new one using the updated `delay`.
- If `delay` is `null`, do not schedule the interval (or clear any existing interval).
- Always clear the interval on unmount to prevent memory leaks.

## Typical use cases

- Polling an API every N seconds for updates
- Running a timer tick (e.g., updating elapsed time)
- Periodic UI updates/animations
- Background tasks like refreshing tokens or heartbeats

*/

export function useInterval() {}
// TODO::implementation
