/*
# useQueue — Problem Description

Build a custom React hook named `useQueue` that helps you manage a **queue (FIFO)** of items inside a React component.

This is useful when you need to process items in the order they were added—like notifications, tasks, events, uploads, or any workflow where you want to enqueue items and dequeue them later.

## What the hook should do

- Accept one optional input:
  - `initialValue` (array): the initial queue contents (defaults to `[]`)
- Return:
  - `queueApi` (object): an object containing the queue state and helper methods:
    - `queue` (array): the full current queue
    - `size` (number): the number of items in the queue
    - `first` (any): the first item in the queue (the next item to be removed), if any
    - `last` (any): the last item in the queue (the most recently added item), if any
    - `add` (function): adds an item to the end of the queue
    - `remove` (function): removes and returns the first item from the queue
    - `clear` (function): clears all items from the queue

## Expected behavior

- Initialize the queue using `initialValue`.
- `add(item)` should append `item` to the end of the queue and trigger a re-render.
- `remove()` should remove the first item (FIFO order) and return it.
- `clear()` should remove all items from the queue.
- `first`, `last`, and `size` should always reflect the latest queue state.

## Typical use cases

- Managing a toast/notification queue (show next after previous dismisses)
- Task processing pipelines (enqueue jobs, process one at a time)
- Message/event buffering (store incoming events until handled)
- Upload/download queues

*/

export function useQueue() {}
// TODO::implementation
