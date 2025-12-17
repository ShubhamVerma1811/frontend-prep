/*
# useFetch — Problem Description

Build a custom React hook named `useFetch` that helps you **fetch data from a URL** while managing the common request lifecycle states (loading, success, error) in a consistent way.

This is useful because most apps need a standard pattern for data fetching. A good `useFetch` hook can also improve performance by caching results, and it should avoid updating state from stale or canceled requests (for example, if the component unmounts or the URL changes mid-request).

## What the hook should do

- Accept input(s):
  - `url` (string): the URL to fetch data from
  - `options` (object, optional): optional configuration for the request (passed through to `fetch`, if supported by your design)
- Return:
  - `data` (any): the fetched response data (or `null`/`undefined` before success)
  - `loading` (boolean): whether a request is currently in flight
  - `error` (Error | null): error information if the request fails, otherwise `null`

## Expected behavior

- When `url` changes, start a new fetch request and set `loading` to `true`.
- On success, store the response result in `data` and set `loading` to `false`.
- On failure, store the error in `error` and set `loading` to `false`.
- Cache previously fetched results so repeat requests to the same `url` can return cached data without re-fetching unnecessarily (depending on your caching strategy).
- Prevent stale responses from older requests from overwriting newer results (e.g., if `url` changes before a response returns).
- Avoid setting state after the component has unmounted (clean up properly).

## Typical use cases

- Fetching and rendering lists/details (users, posts, products) with consistent loading/error UI
- Reducing repeated network calls by caching results for previously visited pages
- Building reusable data-loading components without duplicating request lifecycle logic
- Handling rapid URL changes (e.g., search/filter inputs) without race-condition bugs

*/

export function useFetch() {}
// TODO::implementation
