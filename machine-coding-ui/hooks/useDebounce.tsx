/*
# useDebounce — Problem Description

Build a custom React hook named `useDebounce` that **delays updating a value** until it has remained unchanged for a specified amount of time.

This is especially useful for user input and network-driven UIs, where you want to avoid doing expensive work (like API calls) on every keystroke, and instead only after the user pauses.

## What the hook should do

- Accept two inputs:
  - `value` (any): the value you want to debounce
  - `delay` (number): the debounce delay in milliseconds
- Return:
  - `debouncedValue` (any): the debounced version of `value`, which only updates after `delay` ms have passed with no further changes

## Expected behavior

- When `value` changes, start (or restart) a timer for `delay` milliseconds.
- If `value` changes again before the timer finishes, cancel the previous timer and start a new one.
- When the timer completes, update `debouncedValue` to the latest `value`.
- Ensure timers are cleaned up properly (e.g., on subsequent changes or unmount) to avoid leaks or stale updates.

## Typical use cases

- Debounced search input (only query after the user stops typing)
- Preventing excessive API requests while editing form fields
- Delaying expensive computations or filtering until input stabilizes
- Reducing noisy state updates from rapidly changing values

*/

import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const timer = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		timer.current = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, [value, delay]);

	return debouncedValue;
}
