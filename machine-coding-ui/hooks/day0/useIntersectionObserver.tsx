/*
# useIntersectionObserver — Problem Description

Build a custom React hook named `useIntersectionObserver` that helps you track the visibility of a DOM element relative to a viewport (or a specified root) using the **Intersection Observer API**.

This is useful for performance-friendly visibility-based features like lazy-loading images, triggering animations when elements enter the viewport, implementing infinite scroll sentinels, or tracking whether a section is currently “in view”.

## What the hook should do

- Accept one optional input:
  - `options` (object, optional): configuration for the underlying `IntersectionObserver`, such as:
    - `threshold` (number | number[], optional): the intersection ratio(s) at which the observer callback should fire
    - `root` (Element | null, optional): the element used as the viewport for checking visibility (defaults to `null`, meaning the browser viewport)
    - `rootMargin` (string, optional): margin around the root (e.g., `"0px"`, `"100px 0px"`)
- Return:
  - `ref` (function ref or React ref): attach this to the element you want to observe
  - `entry` (IntersectionObserverEntry | null): the latest observer entry for the element, or `null` before the observer fires

## Expected behavior

- When the returned `ref` is attached to a DOM element, create an `IntersectionObserver` with the provided options and start observing that element.
- Whenever intersection changes according to `threshold`/`rootMargin`, update `entry` with the latest `IntersectionObserverEntry`.
- If the observed element changes (ref points to a different node), disconnect the previous observer and start observing the new element.
- Clean up properly by disconnecting the observer when the component unmounts (or when the target changes), preventing memory leaks.

## Typical use cases

- Lazy-loading images or components only when they enter the viewport
- Infinite scrolling (observe a “sentinel” element near the bottom)
- Triggering animations when elements become visible
- Tracking which section of a page is currently in view (e.g., scrollspy behavior)

*/

export function useIntersectionObserver() {}
// TODO::implementation
