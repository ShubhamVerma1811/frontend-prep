/*
# usePreferredLanguage — Problem Description

Build a custom React hook named `usePreferredLanguage` that lets you read the user’s **preferred language** from their browser settings and react to changes.

This is useful for internationalized apps that want to automatically pick a default language/locale based on the user’s browser preferences, without manually wiring up event listeners.

## What the hook should do

- Accept no inputs.
- Return:
  - `language` (string): the user’s preferred language (for example, `"en-US"`), as reported by the browser.

## Expected behavior

- On the client, return the current preferred language value from the browser (typically via `navigator.language`).
- If the user’s preferred language changes (e.g., the browser emits a language change event), update the returned value so the component re-renders with the latest language.
- Clean up any event listeners on unmount to avoid memory leaks.

## Typical use cases

- Setting an app’s initial locale based on browser preferences
- Automatically selecting language for content, formatting, or translations
- Reacting to runtime language changes for locale-aware UI
- Providing a fallback language when the app doesn’t have a stored user preference

*/

export function usePreferredLanguage() {}
// TODO::implementation
