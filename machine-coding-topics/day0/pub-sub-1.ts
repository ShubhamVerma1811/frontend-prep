/**
 * Problem: Pub-Sub 1 - Basic Observable
 *
 * Implement a simple `Move` class that follows the Observer / Pub-Sub pattern.
 * The goal is to understand the fundamentals of subscribing, unsubscribing, and
 * notifying listeners, while keeping the API small and predictable.
 *
 * Core Requirements:
 * 1. The `Move` class should allow registering listeners via a `subscribe(handler)` method.
 *    - `handler` is a function that receives a single `event` argument.
 * 2. It should support removing previously added listeners via `unsubscribe(handler)`.
 * 3. It should expose a `fire(event: string)` (or similar) method that notifies all
 *    currently subscribed listeners with the provided event payload.
 * 4. Multiple listeners can be subscribed at the same time.
 * 5. Unsubscribed listeners must no longer receive events.
 *
 * Edge Cases & Behaviour:
 * 1. Calling `unsubscribe` with a handler that was never subscribed should be a no-op
 *    (i.e. should not throw).
 * 2. Subscribing the same handler multiple times:
 *    - Decide whether you want to treat duplicate subscriptions as:
 *      a) allowed (handler called multiple times per `fire`), or
 *      b) ignored (handler stored only once).
 *    - Document your choice in code comments.
 * 3. Order of notifications:
 *    - Handlers should be invoked in the order they were subscribed.
 * 4. Re-entrancy:
 *    - A handler may call `subscribe`, `unsubscribe`, or `fire` again.
 *    - Make sure iterating over listeners is safe if the list is mutated during `fire`.
 *      (e.g. iterate over a shallow copy).
 * 5. Error isolation:
 *    - If one handler throws, you may choose to:
 *      a) stop and re-throw, or
 *      b) catch and continue notifying remaining handlers.
 *    - Pick one behaviour and keep it consistent.
 */

type Callback = (data: string) => void;

export class Move {
	private listeners: Array<Callback>;

	constructor() {
		this.listeners = [];
	}

	subscribe(cb: Callback) {
		if (this.listeners.includes(cb)) return;
		this.listeners.push(cb);
	}

	unsubscribe(cb: Callback) {
		this.listeners = this.listeners.filter((_cb) => cb !== _cb);
	}

	fire(data: string) {
		this.listeners.forEach((cb) => {
			cb(data);
		});
	}
}
