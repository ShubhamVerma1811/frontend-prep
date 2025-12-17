/*
# useIdle — Problem Description

Build a custom React hook named `useIdle` that detects when a user has been **inactive (idle)** for a specified amount of time.

This is useful for improving UX and security in web apps by reacting to inactivity—for example, by logging the user out automatically, showing “Are you still there?” prompts, or pausing background work when the user isn’t interacting.

## What the hook should do

- Accept one input:
  - `ms` (number): the duration (in milliseconds) of no user activity after which the user is considered idle
- Return:
  - `idle` (boolean): whether the user is currently idle

## Expected behavior

- Start an idle timer when the hook is initialized.
- If no user activity occurs for at least `ms` milliseconds, set `idle` to `true`.
- When user activity occurs (e.g., mouse movement, mouse click, key press, scroll, touch), set `idle` back to `false` and reset the idle timer.
- Clean up all timers and event listeners on unmount to avoid memory leaks.

## Typical use cases

- Auto-logout after inactivity
- Showing inactivity warnings / session timeout modals
- Pausing polling, animations, or expensive work when the user is idle
- Dimming or changing UI state based on engagement

*/

export function useIdle() {}
// TODO::implementation
