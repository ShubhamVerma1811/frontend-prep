/*
# useThrottle — Problem Description

Build a custom React hook named `useThrottle` that helps you **throttle a changing value**, ensuring it only updates at most once per specified time interval.

This is useful when a value changes rapidly (for example, due to scroll, resize, mousemove, or fast user input), but you want to reduce how often expensive work happens by limiting update frequency.

## What the hook should do

- Accept input(s):
  - `value` (any): the value you want to throttle
  - `interval` (number, optional): the minimum time (in milliseconds) between updates to the throttled value
- Return:
  - `throttledValue` (any): a version of `value` that only updates at most once every `interval` milliseconds

## Expected behavior

- Initialize `throttledValue` to the initial `value`.
- When `value` changes:
  - If at least `interval` milliseconds have passed since the last update, update `throttledValue` immediately.
  - Otherwise, schedule an update so that `throttledValue` updates to the latest `value` once the interval window elapses.
- If `value` changes multiple times during the throttle window, only the latest value should be applied when the scheduled update runs.
- Ensure any timers are cleaned up appropriately to avoid memory leaks or stale updates.

## Typical use cases

- Throttling scroll position updates to reduce re-renders
- Throttling resize-driven layout recalculations
- Limiting how often analytics/events fire during rapid interactions
- Reducing expensive computations while still updating UI periodically

*/

export function useThrottle() {}
// TODO::implementation
