/*
# useHasFocus — Problem Description

Build a custom React hook named `useHasFocus` that lets you track whether the current browser window/tab (or optionally a specific element) is focused.

This is useful when you want to pause/resume work based on focus, show focus-aware UI states, or avoid running expensive logic while the user isn’t actively engaged with the page.

## What the hook should do

- Accept input(s):
  - `options` (object, optional): configuration for how focus is tracked, such as:
    - `initialValue` (boolean, optional): initial focus state before any events fire (commonly `true` in the browser).
    - `trackElement` (boolean, optional): if `true`, track focus within a provided element ref instead of the window.
- Return:
  - `hasFocus` (boolean): whether focus is currently present (window/tab focused, or element focused if tracking an element).
  - `ref` (React ref, optional): when `trackElement` is enabled, a ref to attach to the element whose focus you want to track.

## Expected behavior

- Initialize the focus state to a reasonable default (or `initialValue` if provided).
- For window/tab focus tracking:
  - Set `hasFocus` to `true` on `focus` events.
  - Set `hasFocus` to `false` on `blur` events.
- For element focus tracking (if supported by your design):
  - Set `hasFocus` to `true` when the element (or its descendants) receives focus.
  - Set `hasFocus` to `false` when focus leaves the element.
- Clean up any event listeners on unmount to avoid memory leaks.
- Ensure the hook does not cause re-renders except when the focus state actually changes.

## Typical use cases

- Pausing polling, timers, or animations when the tab is not focused
- Showing “Active/Inactive” presence indicators
- Deferring refreshes until the user returns to the page
- Focus-aware UI for inputs, editors, and dashboards
*/

export function useHasFocus() {}
// TODO::implementation
