/*
# useContinuousRetry — Problem Description

Build a custom React hook named `useContinuousRetry` that repeatedly calls a provided callback on a fixed interval until it succeeds.

This is useful when you’re dealing with operations that may fail temporarily (like fetching data from an unstable endpoint) and you want a clean, reusable way to keep retrying until the operation resolves successfully.

## What the hook should do

- Accept input(s):
  - `callback` (function): the function to invoke on each retry attempt. Retrying should stop once this returns a truthy value.
  - `interval` (number): how often (in milliseconds) to invoke `callback` while it continues to fail.
- Return:
  - `resolved` (boolean): whether the retry loop has resolved (i.e., the callback has returned a truthy value).

## Expected behavior

- Start invoking `callback` on the provided `interval`.
- Continue retrying until `callback` returns a truthy value.
- Once a truthy value is returned, stop retrying and mark the process as resolved.
- Ensure any timers/intervals are cleaned up when the component unmounts (or when the retry loop stops).

## Typical use cases

- Retrying a network request that may fail temporarily until it succeeds
- Polling for the availability of a backend resource (e.g., job completion) until it’s ready
- Waiting for an external dependency (script/service) to become available before proceeding

*/

export function useContinuousRetry() {}
// TODO::implementation
