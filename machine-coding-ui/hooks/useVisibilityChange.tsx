/*
# useVisibilityChange — Problem Description

Build a custom React hook named `useVisibilityChange` that lets you track whether the current document/page is **visible** or **hidden**.

This is useful for pausing or resuming work based on tab visibility—for example, stopping polling or animations when the tab is hidden, and resuming when the user returns.

## What the hook should do

- Accept no inputs.
- Return:
  - `isVisible` (boolean): `true` when the document is visible, and `false` when it is hidden.

## Expected behavior

- Read the current `document.visibilityState` to determine visibility.
- Subscribe to the `visibilitychange` event so the returned value updates whenever the tab visibility changes.
- When the document becomes hidden, return `false`.
- When the document becomes visible again, return `true`.
- Clean up the event listener when the component unmounts to avoid memory leaks.

## Typical use cases

- Pausing polling/background refresh when the tab is hidden
- Stopping animations or timers to save CPU/battery
- Deferring expensive work until the user returns to the tab
- Updating “active/inactive” presence logic based on tab visibility

*/

export function useVisibilityChange() {}
// TODO::implementation
