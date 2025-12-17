/*
# useLocalStorage — Problem Description

Build a custom React hook named `useLocalStorage` that keeps a piece of React state **synchronized with the browser’s `localStorage`**.

This is useful when you want state to persist across page reloads (and optionally stay in sync across multiple tabs/windows), without rewriting the boilerplate for reading, writing, and parsing values in `localStorage`.

## What the hook should do

- Accept two inputs:
  - `key` (string): the `localStorage` key to read from and write to
  - `initialValue` (any): the value to use when there is nothing stored yet for `key`
- Return:
  - `[value, setValue]` (tuple):
    - `value` (any): the current value from `localStorage` (or `initialValue` if none exists)
    - `setValue` (function): updates both React state and the `localStorage` entry for `key`

## Expected behavior

- On mount, read the current value for `key` from `localStorage`.
- If a value exists, parse/deserialize it and return it as `value`.
- If no value exists for `key`, use `initialValue` as the returned value (and optionally initialize `localStorage` with it).
- When `setValue` is called:
  - update the returned `value`
  - serialize the new value and persist it to `localStorage` under `key`
- If the `localStorage` value changes in another tab/window, update `value` accordingly (via the `storage` event).
- Handle invalid JSON or serialization errors gracefully (don’t crash the app).

## Typical use cases

- Persisting theme preference (light/dark)
- Remembering auth/session-like UI state (sidebar open/closed)
- Saving draft form inputs across refreshes
- Syncing preferences across multiple tabs/windows

*/

export function useLocalStorage() {}
// TODO::implementation
