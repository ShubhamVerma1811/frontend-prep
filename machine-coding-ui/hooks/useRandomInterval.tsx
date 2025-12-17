/*
# useRandomInterval — Problem Description

Build a custom React hook named `useRandomInterval` that executes a callback function at **random time intervals** within a specified range.

This is useful when you want behavior that happens “every so often” but not on a perfectly predictable schedule—like playful UI animations, randomized polling/backoff patterns, or simulating irregular events.

## What the hook should do

- Accept input(s):
  - `callback` (function): the function to execute on each tick
  - `minDelay` (number | null): the minimum delay (in milliseconds) between executions. If `null`, the interval should be disabled.
  - `maxDelay` (number | null): the maximum delay (in milliseconds) between executions. If `null`, the interval should be disabled.
- Return:
  - Nothing (void)

## Expected behavior

- When enabled, schedule `callback` to run after a randomly chosen delay between `minDelay` and `maxDelay`.
- After `callback` runs, schedule the next execution again using a new random delay in the same range (i.e., not a fixed interval).
- If `minDelay`/`maxDelay` change, future scheduling should respect the updated range.
- If either delay is `null` (or the range is otherwise invalid), the hook should not schedule executions (and should clear any pending timer).
- Ensure the most recent `callback` is invoked (avoid stale closures).
- Clean up any pending timers when the component unmounts to prevent memory leaks.

## Typical use cases

- Triggering randomized UI effects (e.g., occasional sparkle/tooltip nudges)
- Implementing jittered polling or retry behavior to avoid thundering-herd effects
- Simulating irregular incoming events in demos/sandboxes
- Randomized animations or background tasks that should not feel robotic

*/

export function useRandomInterval() {}
// TODO::implementation
