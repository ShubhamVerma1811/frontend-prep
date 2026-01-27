/*
# useNetworkState — Problem Description

Build a custom React hook named `useNetworkState` that gives you a **live snapshot of the user’s network connectivity state**.

This is useful for adapting UI and behavior based on connectivity conditions—like showing offline banners, disabling actions when offline, or tailoring experiences for slow/limited connections. The hook should expose the current online/offline status and (when available) additional connection details like speed and effective connection type.

## What the hook should do

- Accept no inputs.
- Return:
  - `networkState` (object): a snapshot of the current network status, including:
    - `online` (boolean): whether the browser is currently online
    - `downlink` (number | undefined): estimated download speed in Mbps (if available)
    - `downlinkMax` (number | undefined): maximum downlink in Mbps (if available)
    - `effectiveType` (string | undefined): effective connection type (e.g., `"4g"`, `"3g"`) (if available)
    - `rtt` (number | undefined): estimated round-trip time in ms (if available)
    - `saveData` (boolean | undefined): whether the user has enabled reduced data usage (if available)
    - `type` (string | undefined): connection type (if available)

## Expected behavior

- Return an up-to-date snapshot of network state.
- Update the snapshot when the browser goes online/offline.
- If the Network Information API is available, update the snapshot when connection details change.
- This hook is intended for client-side use only (network APIs require a browser environment).

## Typical use cases

- Showing an “Offline” banner and disabling actions when `online` is `false`
- Adapting media quality or polling frequency based on connection speed/type
- Warning users before starting large downloads on slow connections
- Respecting data-saver preferences (`saveData`) by reducing network usage

*/

export function useNetworkState() {}
// TODO::implementation
