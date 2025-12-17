/*
# useSet — Problem Description

Build a custom React hook named `useSet` that provides a reactive wrapper around JavaScript’s built-in `Set`, so that mutations trigger React re-renders.

This is useful when you want `Set` semantics (uniqueness, fast membership checks) but also want your UI to update automatically when values are added or removed.

## What the hook should do

- Accept one input:
  - `values` (iterable, optional): initial values to seed the set (e.g., an array of values).
- Return:
  - `set` (`Set`): a `Set` instance you can use like a normal `Set`, but with mutation methods that cause a re-render:
    - `add(value)`: adds a value to the set and triggers a re-render
    - `delete(value)`: removes a value from the set and triggers a re-render
    - `clear()`: removes all values and triggers a re-render

## Expected behavior

- Initialize a `Set` using the provided `values` (if any).
- Mutations through `add`, `delete`, and `clear` should trigger React re-renders so the UI stays in sync.
- The returned object should behave like a standard `Set` (support `has`, `size`, iteration, etc.).
- Avoid recreating the entire `Set` unnecessarily; keep a stable instance and trigger re-renders when it mutates.
- Ensure the component doesn’t leak resources and behaves consistently across re-renders.

## Typical use cases

- Managing selected IDs in a multi-select UI (add/remove selections)
- Tracking expanded/collapsed items in an accordion or tree view
- Maintaining a set of active filters/tags with fast membership checks
- Deduplicating items while keeping UI reactive

*/

export function useSet() {}
// TODO::implementation
