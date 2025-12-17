/*
# useToggle — Problem Description

Build a custom React hook named `useToggle` that helps you toggle a boolean value between `true` and `false`.

This is useful when you want to flip UI state between two modes—like show/hide a modal, expand/collapse content, enable/disable a setting, or open/close a side menu.

## What the hook should do

- Accept one optional input:
  - `initialValue` (boolean, optional): the initial value of the toggle state
- Return:
  - `[on, toggle]` (tuple):
    - `on` (boolean): the current toggle state
    - `toggle` (function): a function to update the toggle state

## Expected behavior

- If `initialValue` is provided, initialize `on` using that value.
- Calling `toggle()` with **no arguments** should flip the current value (`true` → `false`, `false` → `true`).
- Calling `toggle(true)` should explicitly set `on` to `true`.
- Calling `toggle(false)` should explicitly set `on` to `false`.
- The hook should be stable and safe to use across re-renders.

## Typical use cases

- Show/hide a modal or dropdown
- Expand/collapse “Read more” content
- Open/close a sidebar or drawer
- Toggle feature flags or UI preferences (e.g., dark mode)

*/

import { useCallback, useState } from "react";

export function useToggle(initialValue = false) {
	const [on, setOn] = useState(initialValue);

	const toggle = useCallback(function toggle(value: boolean) {
		if (typeof value === "boolean") {
			setOn(value);
			return;
		}
		setOn((p) => !p);
	}, []);

	return { on, toggle };
}
