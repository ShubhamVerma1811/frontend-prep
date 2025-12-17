/*
# useList — Problem Description

Build a custom React hook named `useList` that helps you **manage and manipulate a list (array)** in a React component with a small set of convenience methods.

This is useful when you frequently need to add, remove, insert, update, or clear items in an array state, and you want a consistent API instead of re-writing array update logic in every component.

## What the hook should do

- Accept one input:
  - `defaultList` (array, optional): the initial list value (defaults to `[]`)
- Return:
  - `list` (array): the current list state
  - `actions` (object): helper methods to mutate the list, including:
    - `set` (function): replace the entire list with a new list
    - `push` (function): append an element to the end of the list
    - `removeAt` (function): remove the element at a given index
    - `insertAt` (function): insert an element at a given index
    - `updateAt` (function): replace the element at a given index with a new value
    - `clear` (function): reset the list to an empty array

## Expected behavior

- Initialize `list` with `defaultList`.
- `set(nextList)` should replace the current list with `nextList`.
- `push(element)` should append `element` while keeping existing elements intact.
- `removeAt(index)` should remove the element at `index` while preserving order of the remaining items.
- `insertAt(index, element)` should insert `element` at `index` and shift subsequent items to the right.
- `updateAt(index, element)` should update only the element at `index` and keep all other items unchanged.
- `clear()` should set the list to `[]`.

## Typical use cases

- Managing a todo list (add items, remove items, clear all)
- Building multi-select UIs (add/remove selections)
- Managing dynamic form fields (insert/remove/update field rows)
- Implementing list editing features in dashboards (update row data by index)

*/

export function useList() {}
// TODO::implementation
