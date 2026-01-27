/*
# useLongPress — Problem Description

Build a custom React hook named `useLongPress` that helps you detect and handle **long-press interactions** in a React component, supporting both mouse and touch inputs.

This is useful for creating consistent “press and hold” behaviors across devices (desktop and mobile). The hook should provide event handlers you can spread onto an element so you can trigger an action only when the user presses for at least a specified duration, with optional lifecycle callbacks for start, finish, and cancel.

## What the hook should do

- Accept two inputs:
  - `callback` (function): the function to run once a long press is successfully detected
  - `options` (object, optional): configuration for the long-press behavior, including:
    - `threshold` (number, optional): the minimum press duration (in milliseconds) required to count as a long press
    - `onStart` (function, optional): called when the press starts
    - `onFinish` (function, optional): called when a long press successfully completes (after `callback` runs)
    - `onCancel` (function, optional): called when the press ends before reaching the threshold
- Return:
  - `handlers` (object): an object of event handlers to attach/spread onto the target element (mouse and touch handlers)

## Expected behavior

- When the user presses down (mouse or touch), start a timer for `threshold` milliseconds and call `onStart` (if provided).
- If the press remains active until the timer completes, call `callback` and mark the long press as successful.
- When the press ends:
  - If a long press was successful, call `onFinish` (if provided).
  - If the user released early (before the threshold), call `onCancel` (if provided).
- Support both mouse and touch interactions consistently by exposing appropriate event handlers.
- Clear any timers when the interaction ends to prevent leaks and unintended triggers.

## Typical use cases

- Showing a context menu on long press (mobile-friendly)
- Triggering “peek” / “preview” interactions on press-and-hold
- Supporting press-and-hold to record audio/video or to confirm an action
- Enabling alternate actions (e.g., long-press to select) in list/grid UIs

*/

export function useLongPress() {}
// TODO::implementation
