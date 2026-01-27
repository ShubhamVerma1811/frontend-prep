/*
# useCounter — Problem Description

Build a custom React hook named `useCounter` that helps you manage a numeric counter value along with a small set of common counter operations (increment, decrement, set, reset), optionally enforcing minimum and/or maximum bounds.

This is useful when building UI that revolves around a number that changes over time (like quantity pickers, pagination, stepper controls), and you want a reusable, consistent API for updating it safely.

## What the hook should do

- Accept input(s):
  - `startingValue` (number, optional): the initial counter value (commonly defaults to `0`)
  - `options` (object, optional): configuration options, such as:
    - `min` (number, optional): lower bound for the counter
    - `max` (number, optional): upper bound for the counter
- Return:
  - `count` (number): the current counter value
  - `actions` (object): functions to update the counter, including:
    - `increment` (function): increases the counter by 1 (respecting `max` if provided)
    - `decrement` (function): decreases the counter by 1 (respecting `min` if provided)
    - `set` (function): sets the counter to a specific value (respecting `min`/`max` if provided)
    - `reset` (function): resets the counter back to `startingValue`

## Expected behavior

- Initialize the counter to `startingValue`.
- If `min`/`max` are provided, ensure the counter never goes below `min` or above `max` when calling any action.
- `increment`/`decrement` should be no-ops if applying the change would violate the bounds.
- `set(nextCount)` should set the value only if `nextCount` is within bounds (otherwise it should keep the current value).
- `reset` should restore the counter to the original `startingValue`.
- If a `startingValue` is provided that violates `min` or `max`, the hook should surface an error rather than starting in an invalid state.

## Typical use cases

- Quantity selector in a shopping cart (with `min: 1`)
- Pagination controls (with `min: 1` and `max: totalPages`)
- Stepper-based workflows / form wizards
- Any UI where you want standardized counter operations and optional bounds

*/

export function useCounter() {}
// TODO::implementation
