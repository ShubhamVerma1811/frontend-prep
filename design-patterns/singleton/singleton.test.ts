import { afterEach, describe, expect, it } from "vitest";
import { TestableSingleton } from "./variants";

describe("TestableSingleton", () => {
	afterEach(() => {
		TestableSingleton.resetInstance();
	});

	it("should return the same instance", () => {
		const instance1 = TestableSingleton.getInstance();
		const instance2 = TestableSingleton.getInstance();

		expect(instance1).toBe(instance2);
	});

	it("should create new instance after reset", () => {
		const instance1 = TestableSingleton.getInstance();
		TestableSingleton.resetInstance();
		const instance2 = TestableSingleton.getInstance();

		expect(instance1).not.toBe(instance2);
	});
});
