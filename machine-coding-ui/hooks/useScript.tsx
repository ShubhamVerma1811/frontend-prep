/*
# useScript — Problem Description

Build a custom React hook named `useScript` that helps you **dynamically load an external JavaScript file** into a React component and track its loading state.

This is useful when integrating third‑party scripts (analytics, payments, maps, widgets, SDKs) and you need a reliable way to know whether the script is still loading, has loaded successfully, or failed—so you can conditionally render UI or run setup code at the right time. The hook should also support optional cleanup by removing the script when the component unmounts.

## What the hook should do

- Accept input(s):
  - `src` (string): the URL of the script to load.
  - `options` (object, optional): configuration for script behavior, including:
    - `removeOnUnmount` (boolean, optional): when `true`, remove the script tag on unmount.
- Return:
  - `status` (string): the current script load status, typically one of:
    - `"loading"`: script is being loaded
    - `"ready"`: script loaded successfully
    - `"error"`: script failed to load
    - `"unknown"`: script already existed in the document but wasn’t added by this hook

## Expected behavior

- When called with a `src`, the hook should ensure a `<script src="...">` is present and begin loading it if it doesn’t already exist.
- The hook should update and return a `status` that reflects the script lifecycle: start in `"loading"`, then become `"ready"` on successful load, or `"error"` on failure.
- If a matching script tag already exists and its load status can’t be attributed to the hook, the hook should return `"unknown"`.
- The hook should avoid stale updates and clean up any event listeners it attaches to the script element.
- If `options.removeOnUnmount` is `true`, remove the script element on component unmount and perform cleanup.

## Typical use cases

- Loading Stripe/PayPal SDKs and enabling checkout only after `"ready"`
- Loading map providers (Google Maps, Mapbox) and rendering the map after the script is available
- Loading analytics or A/B testing scripts conditionally
- Loading embed/widget scripts (chat, support, scheduling) with optional removal on teardown

*/

export function useScript() {}
// TODO::implementation
