/*
# useObjectState — Problem Description

Build a custom React hook named `useObjectState` that makes it easy to manage a state object and **merge partial updates** into it.

This is useful when your component state is naturally modeled as an object (e.g., form state, UI flags, filters) and you want a convenient update function that can accept either an object of partial updates or a callback that returns partial updates, merging them into the existing state.

## What the hook should do

- Accept one input:
  - `initialValue` (object): the initial state object
- Return:
  - `[state, handleUpdate]` (tuple):
    - `state` (object): the current state object
    - `handleUpdate` (function): updates the state by merging changes into the existing object. It should accept:
      - an `object` of partial updates to merge into `state`, or
      - a `function` that receives the current `state` and returns an object of partial updates to merge

## Expected behavior

- Initialize `state` with `initialValue`.
- When `handleUpdate` is called with an object, shallow-merge it into the current state (i.e., `{...state, ...updates}`).
- When `handleUpdate` is called with a function, call it with the current state and shallow-merge the returned object into the current state.
- The hook should preserve existing keys not mentioned in the update and only overwrite keys provided by the update.
- Updates should trigger a re-render with the new merged state.

## Typical use cases

- Managing form state (e.g., `{ name, email, errors }`) with partial updates
- Storing UI flags in an object (e.g., `{ isOpen, isLoading, hasError }`)
- Managing filter/sort state for lists (e.g., `{ query, sortBy, page }`)
- Updating nested-ish state in a controlled way without rewriting lots of spread logic

*/

export function useObjectState() {}
// TODO::implementation
