/*
# usePageLeave — Problem Description

Build a custom React hook named `usePageLeave` that lets you detect when a user’s cursor **leaves the page viewport** (for example, moving toward the browser UI like the address bar or tabs).

This is useful for triggering actions when a user appears to be leaving your site, such as saving progress, showing an exit-intent prompt, or logging analytics events.

## What the hook should do

- Accept one input:
  - `callback` (function): a function to invoke when the user leaves the page with their cursor
- Return:
  - Nothing (void)

## Expected behavior

- Attach a `mouseout` listener at the document level.
- When a `mouseout` event fires, only invoke `callback` if the cursor is leaving the page (i.e., the related target is missing or indicates the pointer moved outside the document/window).
- Do not invoke `callback` for mouse movements between elements inside the page.
- Clean up the event listener when the component unmounts to prevent memory leaks.
- Ensure the latest `callback` is used if it changes over time (avoid stale closures).

## Typical use cases

- Exit-intent prompts (newsletter signup, discount offer, feedback request)
- Auto-saving drafts or progress when the user leaves the page area
- Tracking “page leave” intent events for analytics
- Triggering session timeout warnings or confirmation flows

*/

export function usePageLeave() {}
// TODO::implementation
