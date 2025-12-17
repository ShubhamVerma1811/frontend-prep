/*
# useTimer — Problem Description

Build a custom React hook named `useTimer` that helps you manage a countdown timer with start/stop controls and exposes the remaining time.

This is useful for UI flows that depend on time—like OTP resend timers, quiz/game timers, loading timeouts, or “auto-dismiss in N seconds” experiences—while keeping timer logic reusable and encapsulated.

## What the hook should do

- Accept input(s):
  - `totalTime` (number): the initial total time for the timer (commonly in seconds).
- Return:
  - `start` (function): starts the timer if it isn’t already running.
  - `stop` (function): stops the timer (and commonly resets it back to `totalTime`).
  - `isRunning` (boolean): whether the timer is currently running.
  - `seconds` (number): the current remaining time.

## Expected behavior

- Initialize `seconds` to `totalTime` and `isRunning` to `false`.
- When `start()` is called:
  - if already running, do nothing.
  - otherwise, begin decrementing `seconds` on a fixed interval (commonly every 1 second).
- When `stop()` is called:
  - clear any active interval/timer.
  - set `isRunning` to `false`.
  - reset `seconds` back to `totalTime` (or to a defined reset value, depending on your design).
- When `seconds` reaches `0` (or below):
  - stop the timer and clear the interval to prevent negative values or runaway timers.
- Clean up timers/intervals on unmount to avoid memory leaks.

## Typical use cases

- OTP / resend-code countdown (“Resend in 30s”)
- Quiz or game countdown timers
- Auto-dismiss toasts/alerts after a delay (countdown display)
- Time-boxed UI actions (e.g., “Offer expires in…”)
*/

export function useTimer() {}
// TODO::implementation
