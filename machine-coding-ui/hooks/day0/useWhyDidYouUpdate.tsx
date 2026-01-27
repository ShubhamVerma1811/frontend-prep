/*
# useWhyDidYouUpdate — Problem Description

Build a custom React hook named `useWhyDidYouUpdate` that helps you debug unnecessary re-renders by reporting *what changed* between renders.

This is useful during development when a component re-renders unexpectedly and you want to identify which tracked values (commonly props) triggered the render.

## What the hook should do

- Accept input(s):
  - `name` (string): a label to identify the component/hook instance in logs.
  - `values` (Record<string, any>): an object containing the values you want to track between renders (commonly the component’s props).
  - `options` (object, optional):
    - `enabled` (boolean, optional): enable/disable logging.
    - `logOnlyChanges` (boolean, optional): if `true`, only log keys whose values changed.
- Return:
  - Nothing (void)

## Expected behavior

- On the first render, store the provided `values` but do not log changes (there is no “previous” yet).
- On subsequent renders:
  - Compare each key in `values` against the previous render’s value.
  - If a value changed, log a message showing:
    - the key name
    - the previous value
    - the next value
- Update the stored previous values after each render.
- The hook should not cause re-renders itself and should avoid stale references.
- Logging is typically intended for development only.

## Typical use cases

- Debugging components that re-render too often
- Validating memoization (`React.memo`, `useMemo`, `useCallback`)
- Finding props that change identity unnecessarily (inline objects/functions)
*/

export function useWhyDidYouUpdate() {}
// TODO::implementation
