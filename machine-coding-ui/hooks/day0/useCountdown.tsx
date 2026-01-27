/*
# useCountdown — Problem Description

Build a custom React hook named `useCountdown` that helps you create and manage a **countdown timer** toward a specific end time.

This is useful when you need to display time remaining and update it at a steady interval—while also supporting common lifecycle callbacks like “on tick” and “on complete”.

## What the hook should do

- Accept input(s):
  - `endTime` (number | Date): the target time the countdown should run down to
  - `options` (object, optional): configuration for the countdown behavior, such as:
    - `interval` (number): the tick interval in milliseconds (how often the countdown updates)
    - `onTick` (function): callback invoked on each tick with the latest countdown value
    - `onComplete` (function): callback invoked once when the countdown reaches zero
- Return:
  - `count` (number): the current countdown value (time remaining), updated on each tick until it reaches `0`

## Expected behavior

- Initialize the countdown based on `endTime` and compute the remaining time.
- Set up a timer/interval that updates the remaining time every `interval` milliseconds.
- On each update:
  - update the returned countdown value
  - invoke `onTick` (if provided)
- When the countdown reaches `0`:
  - stop the timer/interval
  - invoke `onComplete` (if provided)
- Clean up any timers/intervals when the component unmounts (and when inputs change), to prevent leaks or duplicate timers.

## Typical use cases

- Showing “time remaining” for OTPs, deals, auctions, or limited-time banners
- Resend-code timers (e.g., “Resend in 20s”)
- Game timers / quiz timers
- Scheduling UI transitions (e.g., redirect after a countdown)

*/

export function useCountdown() {}
// TODO::implementation
