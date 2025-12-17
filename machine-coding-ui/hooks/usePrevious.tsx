/*
# usePrevious — Problem Description

Build a custom React hook named `usePrevious` that lets you **access the previous value** of a variable across renders in a functional React component.

This is useful when you need to compare “what it is now” vs “what it was last render” to drive UI changes or side-effects.

## What the hook should do

- Accept one input:
  - `newValue` (any type): the current value you want to track
- Return:
  - `previousValue` (any type): the value from the **previous render** (often `undefined` on the first render)

## Expected behavior

- On the **first render**, there is no previous value yet, so the hook should return `undefined` (or whatever you choose as an initial previous value, but `undefined` is typical).
- After each render, the hook should store the latest `newValue` so it becomes the `previousValue` on the next render.

## Typical use cases

- Detecting transitions (e.g., `isOpen` changed from `false` → `true`)
- Showing “previous vs current” values in UI
- Preventing certain effects from running unless a value actually changed
- Debugging renders by comparing old/new props or state

*/

import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T) {
	const ref = useRef<T | undefined>(undefined);

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}
// TODO::implementation
