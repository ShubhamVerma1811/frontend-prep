import { describe, expect, test } from "vitest";
import { myPromiseAll } from "../current/promise-all";

describe("myPromiseAll", () => {
	test("resolves with all values when all promises resolve", async () => {
		const p1 = Promise.resolve(1);
		const p2 = Promise.resolve(2);
		const p3 = Promise.resolve(3);

		const result = await myPromiseAll([p1, p2, p3]);
		expect(result).toEqual([1, 2, 3]);
	});

	test("rejects when any promise rejects", async () => {
		const p1 = Promise.resolve(1);
		const p2 = Promise.reject("error");
		const p3 = Promise.resolve(3);

		await expect(myPromiseAll([p1, p2, p3])).rejects.toBe("error");
	});

	test("handles mixed promises and values", async () => {
		const p1 = Promise.resolve(1);
		const p2 = 2;
		const p3 = Promise.resolve(3);

		const result = await myPromiseAll([p1, p2, p3]);
		expect(result).toEqual([1, 2, 3]);
	});

	test("resolves with empty array for empty input", async () => {
		const result = await myPromiseAll([]);
		expect(result).toEqual([]);
	});

	test("maintains order regardless of resolution timing", async () => {
		const p1 = new Promise<number>((resolve) =>
			setTimeout(() => resolve(1), 100)
		);
		const p2 = Promise.resolve(2);
		const p3 = new Promise<number>((resolve) =>
			setTimeout(() => resolve(3), 50)
		);

		const result = await myPromiseAll([p1, p2, p3]);
		expect(result).toEqual([1, 2, 3]);
	});

	test("rejects with first rejection when multiple reject", async () => {
		const p1 = new Promise<string>((_resolve, reject) =>
			setTimeout(() => reject("first"), 100)
		);
		const p2 = new Promise<string>((_resolve, reject) =>
			setTimeout(() => reject("second"), 50)
		);
		const p3 = Promise.resolve(3);

		await expect(myPromiseAll([p1, p2, p3])).rejects.toBe("second");
	});

	test("mixed promises and values", async () => {
		const result = await myPromiseAll([1, Promise.resolve(2), 3]);
		expect(result).toEqual([1, 2, 3]);
	});

	test("non-promise values only", async () => {
		const result = await myPromiseAll([1, 2, 3]);
		expect(result).toEqual([1, 2, 3]);
	});

	test("all promises resolve", async () => {
		const result = await myPromiseAll([
			Promise.resolve(1),
			Promise.resolve(2),
			Promise.resolve(3),
		]);
		expect(result).toEqual([1, 2, 3]);
	});

	test("empty array", async () => {
		const result = await myPromiseAll([]);
		expect(result).toEqual([]);
	});

	test("single promise", async () => {
		const result = await myPromiseAll([Promise.resolve(42)]);
		expect(result).toEqual([42]);
	});

	test("single value", async () => {
		const result = await myPromiseAll([42]);
		expect(result).toEqual([42]);
	});

	test("first rejection aborts everything", async () => {
		const promises = [
			Promise.reject(new Error("boom")),
			new Promise((r) => setTimeout(r, 1000, "should not run")),
		];

		await expect(myPromiseAll(promises)).rejects.toThrow("boom");
	});

	test("later rejection still aborts", async () => {
		const promises = [
			new Promise((r) => setTimeout(r, 10, 1)),
			Promise.reject(new Error("boom")),
		];

		await expect(myPromiseAll(promises)).rejects.toThrow("boom");
	});

	test("results in original order regardless of completion", async () => {
		const slow = new Promise((r) => setTimeout(() => r("slow"), 100));
		const fast = new Promise((r) => setTimeout(() => r("fast"), 10));

		const result = await myPromiseAll([slow, fast]);
		expect(result).toEqual(["slow", "fast"]);
	});

	test("handles thenables", async () => {
		const thenable = {
			// biome-ignore lint/suspicious/noThenProperty: For test case
			then: (
				resolve: (value: number) => void,
				_reject: (error?: string) => void
			) => {
				resolve(42);
			},
		};
		const result = await myPromiseAll([thenable]);
		expect(result).toEqual([42]);
	});

	test("preserves undefined/null", async () => {
		const result = await myPromiseAll([undefined, null, ""]);
		expect(result).toEqual([undefined, null, ""]);
	});

	test("reject before resolve", async () => {
		const called = false;
		const p1 = new Promise((_, reject) => setTimeout(() => reject("fail"), 10));
		const p2 = new Promise((r) => setTimeout(r, 20, 2));

		await expect(myPromiseAll([p1, p2])).rejects.toThrow("fail");
		expect(called).toBe(false);
	});
});
