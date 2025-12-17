/*
# useKeyPress — Problem Description

Build a custom React hook named `useKeyPress` that helps you **detect when a specific keyboard key is pressed** and run a callback in response.

This is useful for implementing keyboard shortcuts and accessibility-friendly interactions, like closing a modal with `Escape`, submitting on `Enter`, or triggering actions with hotkeys.

## What the hook should do

- Accept two inputs:
  - `key` (string): the key to listen for (e.g., `"Escape"`, `"Enter"`, `"k"`)
  - `callback` (function): a function to call when the specified `key` is pressed
- Return:
  - Nothing (void)

## Expected behavior

- Add a keyboard event listener (typically `keydown`) when the hook is active.
- When a keyboard event occurs and the pressed key matches `key`, invoke `callback`.
- Ensure the listener is removed when the component unmounts to avoid memory leaks.
- If `key` or `callback` change, ensure the hook continues to behave correctly and calls the latest `callback`.

## Typical use cases

- Closing dialogs/modals with `Escape`
- Submitting forms or confirming actions with `Enter`
- Implementing keyboard shortcuts (e.g., `?` for help, `/` to focus search)
- Enhancing accessibility with consistent keyboard interactions

*/

export function useKeyPress() {}
// TODO::implementation
