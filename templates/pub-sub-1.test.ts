import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Move } from "./pub-sub-1";

describe("Pub Sub 1 test suite", () => {
	let consoleSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		consoleSpy = vi.spyOn(console, "log");
	});

	afterEach(() => {
		consoleSpy.mockReset();
	});

	it("should subscribe the handler once and fire once", () => {
		const move = new Move();

		const handler = (data: string) => {
			console.log(`FIRED ${data}`);
		};
		move.subscribe(handler);
		move.fire("once");

		expect(consoleSpy).toHaveBeenNthCalledWith(1, "FIRED once");
	});

	it("should not fire if unsubscribed before firing", () => {
		const move = new Move();

		const handler = (data: string) => {
			console.log(`FIRED ${data}`);
		};

		move.subscribe(handler);
		move.unsubscribe(handler);

		move.fire("once");

		expect(consoleSpy).toHaveBeenCalledTimes(0);
	});

	it("should fire all the events", () => {
		const move = new Move();

		// 1st observer
		const firedHandler = (item: string) => {
			console.log(`fired: ${item}`);
		};

		// 2nd observer
		const movedHandler = (item: string) => {
			console.log(`Moved: ${item}`);
		};

		// subscribe 1st observer
		move.subscribe(firedHandler);
		move.fire("event #1");

		// subscribe 1st & 2nd observer
		move.subscribe(firedHandler);
		move.subscribe(movedHandler);
		move.fire("event #3");

		// Assertions
		expect(consoleSpy).toHaveBeenCalledTimes(3);
		expect(consoleSpy).toHaveBeenNthCalledWith(1, "fired: event #1");
		expect(consoleSpy).toHaveBeenNthCalledWith(2, "fired: event #3");
		expect(consoleSpy).toHaveBeenNthCalledWith(3, "Moved: event #3");
	});

	it("should not fire unsubscribe events when called with handler that was never subscribed", () => {
		const move = new Move();

		const neverSubbedHandler = (data: string) => {
			console.log(data);
		};

		move.unsubscribe(neverSubbedHandler);

		move.fire("HEY");

		expect(consoleSpy).not.toHaveBeenCalled();
	});
});
