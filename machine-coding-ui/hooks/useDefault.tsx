/*
# useDefault — Problem Description

Build a custom React hook named `useDefault` that behaves like `useState`, but **falls back to a default value** whenever the current state is `undefined` or `null`.

This is useful when you want state to be “settable” like normal React state, but you also want a reliable fallback value so consumers don’t have to constantly handle `null`/`undefined` cases.

## What the hook should do

- Accept two inputs:
  - `initialValue` (any): the initial state value
  - `defaultValue` (any): the fallback value to use whenever the current state becomes `undefined` or `null`
- Return:
  - `[value, setValue]` (tuple):
    - `value` (any): the current state value, but if it is `undefined` or `null`, return `defaultValue` instead
    - `setValue` (function): a setter function to update the internal state (same role as `setState` from `useState`)

## Expected behavior

- Initialize internal state using `initialValue`.
- If the internal state is `undefined` or `null`, the hook should return `defaultValue` (while still keeping the internal state as-is).
- Otherwise, the hook should return the actual internal state value.
- The setter should update the internal state to whatever you pass, including `undefined` or `null` (which would cause the returned value to fall back to `defaultValue`).

## Typical use cases

- Providing a fallback value for optional inputs without extra null checks in components
- Treating `null`/`undefined` as “reset to default” behavior
- Simplifying UI logic when a “missing value” should display a default (e.g., default text, default selection)

*/

import { useState } from "react";

export function useDefault<T>(initialValue: T, defaultValue: T) {
	const [internalState, setInternalState] = useState<T | null | undefined>(
		initialValue
	);

	const value = internalState ?? defaultValue;

	const setValue = (newValue: T | null | undefined) => {
		setInternalState(newValue);
	};

	return [value, setValue] as const;
}
