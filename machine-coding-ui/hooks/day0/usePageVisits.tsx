/*
# usePageVisits — Problem Description

Build a custom React hook named `usePageVisits` that tracks and returns how many times a user has visited a page (or a specific route/key), optionally persisting the count.

This is useful for analytics-lite UX and product features like “Welcome back”, onboarding progress, showing one-time prompts after N visits, or debugging navigation flows in development.

## What the hook should do

- Accept input(s):
  - `key` (string, optional): a unique identifier for what counts as a “page” (e.g., pathname, route name, or custom key). If omitted, use the current page’s pathname as the default key.
  - `options` (object, optional):
    - `storage` ("local" | "session" | "memory"): where to persist the count (default `"local"`).
    - `initialValue` (number): starting value if no stored value exists (default `0`).
    - `incrementOnMount` (boolean): whether to increment as soon as the hook runs (default `true`).
- Return:
  - `visits` (number): the current visit count for the given key.
  - `increment` (function): manually increment the counter.
  - `reset` (function): reset the counter back to `initialValue`.
  - `set` (function): set the counter to a specific number.

## Expected behavior

- Determine a stable `key` (either the provided key or a default like `window.location.pathname` in the browser).
- Read the current visit count from the configured storage location.
- If `incrementOnMount` is `true`, increment the count exactly once per mount (or per key change, depending on your design).
- Persist updates back to the chosen storage so refreshes or new sessions behave as expected:
  - `"local"` should survive tab closes (localStorage-like behavior).
  - `"session"` should reset when the tab/session ends (sessionStorage-like behavior).
  - `"memory"` should not persist across reloads.
- Avoid throwing on the server (if browser APIs are unavailable); either no-op, return `initialValue`, or delay until client.

## Typical use cases

- Showing a one-time or N-times prompt (newsletter modal after 3 visits)
- Onboarding hints that appear only for first-time visitors
- “Welcome back” messaging and gentle personalization
- Simple route-level counters for debugging navigation behavior
*/

export function usePageVisits() {}
// TODO::implementation
