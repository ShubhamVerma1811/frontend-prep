/*
# useRenderCount — Problem Description

Build a custom React hook named `useRenderCount` that helps you **track how many times a component has rendered**.

This is useful for debugging and performance analysis—especially when you want to verify whether a component is re-rendering more often than expected.

## What the hook should do

- Accept no inputs.
- Return:
  - `count` (number): the number of renders that have occurred for the component using the hook.

## Expected behavior

- On the first render, return the initial render count (commonly `1`).
- On every subsequent render, increment the count by 1 and return the updated value.
- The count should persist across renders for as long as the component remains mounted.
- The count should reset if the component unmounts and mounts again.

## Typical use cases

- Debugging unexpected re-renders in development
- Verifying memoization effectiveness (`React.memo`, `useMemo`, `useCallback`)
- Measuring render frequency while tuning performance
- Displaying render counts in demo/sandbox components

*/

export function useRenderCount() {}
// TODO::implementation
