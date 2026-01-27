/*
# useEventListener — Problem Description

Build a custom React hook named `useEventListener` that lets you **attach an event listener** to a target (like `window`, `document`, or a DOM element) in a safe, reusable way from within a React component.

This is useful for handling events such as mouse/keyboard interactions, resize/scroll events, or custom events, without repeatedly re-implementing add/remove listener logic and without running into stale handler references.

## What the hook should do

- Accept input(s):
  - `eventName` (string): the name of the event to listen for (e.g., `"keydown"`, `"scroll"`, `"resize"`)
  - `handler` (function): the function to run when the event fires
  - `element` (EventTarget, optional): the target to attach the listener to (commonly defaults to `window`)
  - `options` (object | boolean, optional): options passed to `addEventListener` (e.g., `{ passive: true }`)
- Return:
  - Nothing (void)

## Expected behavior

- Attach the event listener to the provided `element` (or the default target) when the hook is initialized.
- When `eventName`, `element`, or `options` change, update the listener accordingly (remove the old one and add the new one).
- Ensure the latest `handler` is invoked when the event fires (avoid stale closures).
- Clean up the event listener when the component unmounts to prevent memory leaks.

## Typical use cases

- Listening for `keydown` events (e.g., Escape to close a modal)
- Tracking window `resize` to update layout-related state
- Listening to `scroll` events for infinite scroll or “back to top” controls
- Handling clicks or pointer events at the document/window level

*/

export function useEventListener() {}
// TODO::implementation
