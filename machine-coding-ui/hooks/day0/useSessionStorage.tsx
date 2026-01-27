/*
# useSessionStorage — Problem Description

Build a custom React hook named `useSessionStorage` that keeps a piece of React state **synchronized with the browser’s `sessionStorage`**.

This is useful when you want state to persist across page navigations and refreshes for the **current tab/session**, without rewriting the boilerplate for reading, writing, and parsing values in `sessionStorage`. The hook should also keep the component’s state up to date when the underlying storage changes.

## What the hook should do

- Accept two inputs:
  - `key` (string): the `sessionStorage` key to read from and write to
  - `initialValue` (any): the value to use when there is nothing stored yet for `key`
- Return:
  - `[value, setValue]` (tuple):
    - `value` (any): the current value from `sessionStorage` (or `initialValue` if none exists)
    - `setValue` (function): updates both React state and the `sessionStorage` entry for `key`

## Expected behavior

- On mount, read the current value for `key` from `sessionStorage`.
- If a value exists, parse/deserialize it and return it as `value`.
- If no value exists for `key`, use `initialValue` as the returned value (and optionally initialize `sessionStorage` with it).
- When `setValue` is called:
  - update the returned `value`
  - serialize the new value and persist it to `sessionStorage` under `key`
- If the stored value changes (e.g., via a storage event), update `value` accordingly.
- Handle invalid JSON or serialization errors gracefully (don’t crash the app).

## Typical use cases

- Persisting multi-step form progress within a single browser session
- Remembering UI state (active tab, filters, open panels) across refreshes in the same tab
- Storing short-lived session preferences that shouldn’t survive a full browser restart
- Keeping session-scoped data available without introducing global state

*/

export function useSessionStorage() {}
// TODO::implementation
