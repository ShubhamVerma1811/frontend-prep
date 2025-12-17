/*
# useIsClient — Problem Description

Build a custom React hook named `useIsClient` that tells you whether the component has mounted on the client (i.e., it’s safe to use browser-only APIs).

This is useful for avoiding SSR/SSG mismatches and for conditionally running client-only hooks or logic (like accessing `window`, `document`, `localStorage`, or running hooks that rely on them).

## What the hook should do

- Accept no inputs.
- Return:
  - `isClient` (boolean): `false` during the initial render, then `true` once the component has mounted on the client.

## Expected behavior

- On the first render, return `false`.
- After the component mounts (after the effect phase runs), update and return `true`.
- The value should remain `true` for the lifetime of the component after it has mounted.

## Typical use cases

- Guarding client-only hooks (e.g., `useMediaQuery`, `useLocalStorage`) to avoid SSR issues
- Conditionally rendering UI that depends on `window`/`document`
- Avoiding hydration warnings by delaying browser-dependent rendering until after mount

*/

export function useIsClient() {}
// TODO::implementation
