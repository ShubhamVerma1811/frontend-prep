/*
# useLogger — Problem Description

Build a custom React hook named `useLogger` that logs a component’s lifecycle events (mount, update, unmount) along with an identifying name and any additional values you want to track.

This is useful for debugging and understanding when and why a component renders, as well as for lightweight monitoring during development.

## What the hook should do

- Accept input(s):
  - `name` (string): a label used to identify the component or scope being logged
  - `...args` (any[]): additional values you want included in the logs (e.g., props, state, derived values)
- Return:
  - Nothing (void)

## Expected behavior

- On mount, log that the component has mounted, including `name` and any provided `args`.
- On update (when dependencies/inputs change), log that the component has updated, including `name` and the latest `args`.
- On unmount, log that the component has unmounted, including `name` and any relevant `args` if desired.
- Ensure logs reflect the latest values passed into the hook.

## Typical use cases

- Debugging unexpected re-renders by logging updates with relevant props/state
- Tracking mount/unmount behavior during routing/navigation changes
- Observing how often a component updates during user interaction
- Lightweight lifecycle tracing during development

*/

export function useLogger() {}
// TODO::implementation
