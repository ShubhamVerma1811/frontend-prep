/*
# useDocumentTitle — Problem Description

Build a custom React hook named `useDocumentTitle` that lets you **dynamically set the browser tab’s title** from within a React component.

This is useful when the page title should reflect application state—like the currently selected item, the active route/view, unread message counts, or any other context you want visible in the tab.

## What the hook should do

- Accept one input:
  - `title` (string): the value that should become `document.title`
- Return:
  - Nothing (void)

## Expected behavior

- Whenever `title` changes, update `document.title` to the latest value.
- Ensure the title is set consistently when the component mounts and whenever the dependency changes.
- The hook should not introduce unnecessary re-renders; it should only perform the side-effect of setting the document title.

## Typical use cases

- Setting the title based on the current route (e.g., “Settings”, “Profile”, “Dashboard”)
- Reflecting selected content (e.g., “Invoice #1234”)
- Showing counts or status (e.g., “(3) Inbox”, “Uploading…”, “Connected/Disconnected”)
- Improving accessibility and UX by keeping the tab title meaningful

*/

export function useDocumentTitle() {}
// TODO::implementation
