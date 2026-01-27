/*
# useAsync — Problem Description

Build a custom React hook named `useAsync` that helps you run an async function and track its lifecycle state in a consistent way.

This is useful when you want a reusable pattern for async work (fetching data, submitting forms, loading resources) while exposing common states like “idle”, “pending”, “success”, and “error”, plus a way to re-run the async operation on demand.

## What the hook should do

- Accept input(s):
  - `asyncFn` (() => Promise<any>): the async function to execute.
  - `immediate` (boolean, optional): whether to run the async function immediately on mount (commonly defaults to `false`).
- Return:
  - `state` (string): one of `"idle" | "pending" | "success" | "error"`.
  - `value` (any): the resolved value from `asyncFn` on success.
  - `error` (any): the error value if `asyncFn` rejects.
  - `refetch` (function): a function that triggers running `asyncFn` again.

## Expected behavior

- Initialize with:
  - `state: "idle"`
  - `value: null` (or `undefined` depending on your design)
  - `error: null`
- When `refetch` is called:
  - set `state` to `"pending"`
  - call `asyncFn`
  - if it resolves, set `state` to `"success"` and store the resolved value in `value`
  - if it rejects, set `state` to `"error"` and store the rejection in `error`
  - ensure state updates follow the latest invocation (avoid stale updates if you choose to support cancellation)
- If `immediate` is `true`, automatically call `refetch` on mount (and/or when dependencies change depending on your design).
- The hook should not crash if the component unmounts mid-request; cleanup/cancellation is recommended if you implement it.

## Typical use cases

- Fetching data on mount and showing loading/success/error UI states
- Handling async form submissions with clear request lifecycle state
- Re-trying failed requests from a “Try again” button via `refetch`
- Coordinating async side effects from UI interactions
*/

import { useCallback, useEffect, useState } from "react";

type State<T> = {
	status: "idle" | "pending" | "success" | "error";
	error: null | Error;
	value: null | T;
};

type useAsyncOptions = {
	immediate?: boolean;
};

export function useAsync<T>(fn: () => Promise<T>, options: useAsyncOptions) {
	const { immediate } = options;
	const [state, setState] = useState<State<T>>({
		status: "idle",
		error: null,
		value: null,
	});

	const refetch = useCallback(
		function refetch() {
			setState({
				status: "pending",
				error: null,
				value: null,
			});

			return fn()
				.then((r) => {
					setState({
						status: "success",
						error: null,
						value: r,
					});
				})
				.catch((e) => {
					setState({
						status: "error",
						error: new Error(e),
						value: null,
					});
				});
		},
		[fn]
	);

	useEffect(() => {
		if (immediate) refetch();
	}, [immediate, refetch]);

	return {
		...state,
		refetch,
	};
}
