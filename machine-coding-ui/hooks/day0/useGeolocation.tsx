/*
# useGeolocation — Problem Description

Build a custom React hook named `useGeolocation` that lets you **access and monitor the user’s geolocation** (after they grant permission) from within a React component.

This is useful for location-aware features like showing the user’s position on a map, nearby search, geofencing-style UI, or attaching coordinates to user actions. The hook should expose a single state object containing both location data and status/error information.

## What the hook should do

- Accept one optional input:
  - `options` (object, optional): configuration forwarded to the Geolocation API methods (`getCurrentPosition` / `watchPosition`), commonly including `enableHighAccuracy`, `timeout`, and `maximumAge`.
- Return:
  - `geoState` (object): an object containing the latest geolocation status and values, including:
    - `loading` (boolean): whether geolocation data is still being resolved
    - `latitude` (number | null)
    - `longitude` (number | null)
    - `altitude` (number | null)
    - `accuracy` (number | null)
    - `altitudeAccuracy` (number | null)
    - `heading` (number | null)
    - `speed` (number | null)
    - `timestamp` (number | null)
    - `error` (any | null): geolocation error information if the request fails

## Expected behavior

- On mount, attempt to retrieve the user’s current position and update the returned state accordingly.
- Subscribe to ongoing position updates (via the Geolocation API’s watch mechanism) so the state stays up to date as the user moves.
- If the user denies permission or an error occurs, populate `error` and stop `loading`.
- Clean up any geolocation watchers on unmount to avoid leaks and unwanted updates.

## Typical use cases

- Showing the user’s live location on a map
- “Near me” search results (stores, restaurants, events)
- Location-based UI personalization (local weather, locale hints)
- Attaching coordinates to posts, check-ins, or incident reports

*/

export function useGeolocation() {}
// TODO::implementation
