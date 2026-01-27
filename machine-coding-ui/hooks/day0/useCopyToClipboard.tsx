/*
# useCopyToClipboard — Problem Description

Build a custom React hook named `useCopyToClipboard` that provides a simple, reusable way to **copy text to the user’s clipboard** from a React component.

This is useful because copying can vary by browser support: modern browsers may support `navigator.clipboard.writeText`, while older or restricted environments may require a fallback approach (like `document.execCommand("copy")`). The hook should abstract those details behind a clean API.

## What the hook should do

- Accept one input:
  - `value` (string): the text you want to copy to the clipboard
- Return:
  - `copiedText` (string | null): the last successfully copied text (or `null` if nothing has been copied yet)
  - `copy` (function): a function that triggers copying the provided `value` to the clipboard

## Expected behavior

- When `copy` is called, attempt to copy `value` to the clipboard.
- Prefer using the modern Clipboard API (`navigator.clipboard.writeText`) when available.
- If the modern API isn’t available or fails, fall back to a legacy approach (e.g., using a temporary textarea and `document.execCommand("copy")`).
- On success, update `copiedText` to the copied value so the UI can reflect the copy action.

## Typical use cases

- “Copy to clipboard” buttons for referral codes, tokens, or URLs
- Copying command-line snippets in documentation UIs
- Copying form values (emails, IDs) with one click
- Showing “Copied!” feedback after a successful copy

*/

export function useCopyToClipboard() {}
// TODO::implementation
