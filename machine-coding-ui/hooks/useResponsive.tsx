/*
# useResponsive — Problem Description

Build a custom React hook named `useResponsive` that helps you determine what kind of device/layout breakpoint the user is currently on (mobile/tablet/desktop) based on the viewport width.

This is useful for responsive UI logic in JavaScript—when you want to conditionally render components, change behavior, or compute layout decisions based on the current screen size.

## What the hook should do

- Accept input(s):
  - `breakpoints` (object, optional): custom breakpoint configuration, such as:
    - `mobileMax` (number): maximum width for mobile (default `767`)
    - `tabletMin` (number): minimum width for tablet (default `768`)
    - `tabletMax` (number): maximum width for tablet (default `989`)
    - `desktopMin` (number): minimum width for desktop (default `990`)
- Return:
  - `device` (object): an object describing the current responsive state, including:
    - `isMobile` (boolean)
    - `isTablet` (boolean)
    - `isDesktop` (boolean)
    - (optional) `width` (number): the current `window.innerWidth` if you choose to expose it

## Expected behavior

- On mount, compute the current breakpoint state from the viewport width.
- Listen for `resize` events and update the returned state whenever the viewport size changes.
- Ensure the returned booleans are mutually consistent (only one should typically be true at a time).
- Clean up the `resize` event listener on unmount to avoid memory leaks.
- Avoid accessing `window` during server-side rendering; either guard for client-only usage or return a safe default until mounted.

## Typical use cases

- Switching between mobile and desktop navigation components
- Enabling/disabling UI features based on viewport size
- Adjusting layout density (columns, spacing) based on breakpoint
- Building responsive dashboards and data-heavy views
*/

export function useResponsive() {}
// TODO::implementation
