/*
# useMap — Problem Description

Build a custom React hook named `useMap` that provides a convenient, reactive wrapper around JavaScript’s built-in `Map`, so that updates to the map automatically trigger React re-renders.

This is useful when you want a `Map` for key-based storage (often better than plain objects for non-string keys or preserving insertion order), but you still want your component to re-render when entries are added, removed, or cleared.

## What the hook should do

- Accept one input:
  - `initialState` (iterable | array of entries, optional): initial entries used to create the underlying `Map`
- Return:
  - `map` (`Map`): a `Map` instance that can be used like a normal `Map`, but with update methods that cause a re-render:
    - `set(key, value)`: sets an entry and triggers a re-render
    - `delete(key)`: deletes an entry and triggers a re-render
    - `clear()`: clears all entries and triggers a re-render

## Expected behavior

- Initialize a `Map` using `initialState` (if provided).
- Mutations via `set`, `delete`, and `clear` should trigger a React re-render so UI stays in sync.
- The returned value should behave like a `Map` (e.g., support `get`, `has`, `keys`, `values`, `entries`, iteration).
- Avoid recreating the entire `Map` unnecessarily; updates should modify the same underlying map while still causing re-renders.

## Typical use cases

- Managing selection state keyed by IDs (or even objects) without converting to plain objects
- Caching computed values by key while keeping UI reactive
- Tracking per-item UI state (expanded/collapsed, loading flags) using stable keys
- Building lookup tables that need fast `get/has` semantics with reactive updates

*/

export function useMap() {}
// TODO::implementation
