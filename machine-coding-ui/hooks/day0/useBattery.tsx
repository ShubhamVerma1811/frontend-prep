/*
# useBattery — Problem Description

Build a custom React hook named `useBattery` that lets you **access and monitor the device’s battery state** from within a React component.

This is useful when you want to adapt your UI or app behavior based on battery conditions—like showing battery level, indicating charging status, or reducing background work when power is low. The hook should provide a single state object that represents battery support and the latest battery metrics.

## What the hook should do

- Accept no inputs.
- Return:
  - `batteryState` (object): an object describing battery support/loading and current metrics, including:
    - `supported` (boolean): whether the Battery Status API is available
    - `loading` (boolean): whether the battery information is still being resolved
    - `level` (number | null): battery level (typically 0–1)
    - `charging` (boolean | null): whether the device is charging
    - `chargingTime` (number | null): estimated seconds until fully charged
    - `dischargingTime` (number | null): estimated seconds until empty

## Expected behavior

- If the browser does not support the Battery Status API, the hook should indicate that battery info is not supported and stop loading.
- When supported, the hook should retrieve the current battery object and populate the returned state with the latest values.
- The hook should keep the returned state up to date by subscribing to relevant battery change events (e.g., level/charging/time changes).
- The hook should clean up any event listeners on unmount.

## Typical use cases

- Showing a battery indicator (level + charging state) in the UI
- Enabling a “low power mode” experience when battery is low
- Reducing polling/animations when on battery power or not charging
- Displaying estimated charging/discharging time to the user

*/

export function useBattery() {}
// TODO::implementation
