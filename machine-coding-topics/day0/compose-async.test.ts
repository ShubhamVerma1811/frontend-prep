import { beforeEach, describe, expect, it, vi } from "vitest";
import { composeAsync } from "./compose-async";

const a = vi.fn((x: number, y: number): Promise<number> => {
	return Promise.resolve(x * y);
});

const b = vi.fn((z: number): Promise<number> => {
	return Promise.resolve(z + 5);
});

const c = vi.fn((r: number): Promise<number> => {
	return Promise.resolve(r / 10);
});

describe("composeAsync", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should compose functions correctly: c(b(a(5, 3))) = 2", async () => {
		const composed = composeAsync(c, b, a);
		const result = await composed(5, 3);

		expect(result).toBe(2);
		expect(a).toHaveBeenCalledWith(5, 3);
		expect(b).toHaveBeenCalledWith(15);
		expect(c).toHaveBeenCalledWith(20);
	});

	it("should handle single function composition", async () => {
		const composed = composeAsync(a);
		const result = await composed(4, 2);

		expect(result).toBe(8);
		expect(a).toHaveBeenCalledWith(4, 2);
	});

	it("should handle empty function array", async () => {
		const composed = composeAsync();
		const result = await composed(1, 2);

		expect(result).toBeUndefined();
	});

	it("should execute functions in correct order (right to left)", async () => {
		const composed = composeAsync(c, b, a);
		await composed(5, 3);

		expect(a).toHaveBeenCalledTimes(1);
		expect(b).toHaveBeenCalledTimes(1);
		expect(c).toHaveBeenCalledTimes(1);

		// Verify call order: a first, then b, then c
		expect(a).toHaveBeenNthCalledWith(1, 5, 3);
		expect(b).toHaveBeenNthCalledWith(1, 15);
		expect(c).toHaveBeenNthCalledWith(1, 20);
	});

	it("should handle different input lengths correctly", async () => {
		const double = vi.fn(
			(x: number): Promise<number> => Promise.resolve(x * 2)
		);
		const addTen = vi.fn(
			(x: number): Promise<number> => Promise.resolve(x + 10)
		);

		const composed = composeAsync(addTen, double);
		const result = await composed(5);

		expect(result).toBe(20);
		expect(double).toHaveBeenCalledWith(5);
		expect(addTen).toHaveBeenCalledWith(10);
	});

	it("should propagate errors from any function", async () => {
		const failingFn = vi.fn(
			(): Promise<number> => Promise.reject(new Error("Failed"))
		);

		const composed = composeAsync(failingFn);

		await expect(composed(1)).rejects.toThrow("Failed");
		expect(failingFn).toHaveBeenCalledWith(1);
	});

	it("should chain multiple compositions correctly", async () => {
		const composed = composeAsync(c, c, b, a);
		const result = await composed(5, 3);

		// a(5,3)=15 → b(15)=20 → c(20)=2 → c(2)=0.2
		expect(result).toBe(0.2);
		expect(a).toHaveBeenCalledWith(5, 3);
		expect(c).toHaveBeenNthCalledWith(1, 20);
		expect(c).toHaveBeenNthCalledWith(2, 2);
	});
});
