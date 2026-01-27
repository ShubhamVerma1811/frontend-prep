/*
# useOrientation — Problem Description

Build a custom React hook named `useOrientation` that helps you **track a device’s orientation** inside a React application.

This is useful when your UI should respond to orientation changes (portrait vs landscape) or when you need access to the current orientation metadata. The hook should abstract the differences between browser APIs by supporting both the modern Screen Orientation API and the older/deprecated `window.orientation` approach.

## What the hook should do

- Accept no inputs.
- Return:
  - `orientation` (object): an object describing the current orientation, including:
    - `angle` (number): the current orientation angle (when available)
    - `type` (string): the current orientation type (e.g., `"portrait-primary"`, `"landscape-primary"`), or a fallback like `"UNKNOWN"` when not available

## Expected behavior

- Initialize the orientation state with a reasonable default.
- If the Screen Orientation API is available, read `window.screen.orientation.type` and `window.screen.orientation.angle`, and update the returned state whenever the orientation changes.
- If the Screen Orientation API is not available, fall back to listening for orientation changes using the legacy `orientationchange` event and `window.orientation`, and update the returned state accordingly.
- Clean up any event listeners when the component unmounts to avoid memory leaks.

## Typical use cases

- Switching layouts or UI density based on portrait vs landscape
- Optimizing media/video experiences when the device rotates
- Adapting camera/scanner overlays to orientation changes
- Providing orientation-aware UX for mobile/tablet applications

*/

export function useOrientation() {}
// TODO::implementation
