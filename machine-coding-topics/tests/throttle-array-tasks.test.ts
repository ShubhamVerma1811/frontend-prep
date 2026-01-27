import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { throttleArray } from "../current/throttle-array-tasks";

describe("throttleArray", () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => vi.useRealTimers());

	test("executes first chunk immediately on each invocation", () => {
		const tasks = [1, 2, 3, 4, 5];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 2, cb, 1000);
		throttled();

		expect(seen).toEqual([[1, 2]]);
	});

	test("ignores duplicate calls during active throttle period", () => {
		const tasks = [1, 2, 3, 4];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 2, cb, 1000);
		throttled(); // immediate chunk
		throttled(); // ignored
		throttled(); // ignored

		expect(seen).toEqual([[1, 2]]);
		vi.advanceTimersByTime(1000);
		expect(seen).toEqual([
			[1, 2],
			[3, 4],
		]);
	});

	test("processes deferred chunks after delay", () => {
		const tasks = [1, 2, 3, 4, 5, 6];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 2, cb, 500);
		throttled(); // [1,2]

		vi.advanceTimersByTime(500);
		expect(seen).toEqual([
			[1, 2],
			[3, 4],
		]); // deferred chunk

		vi.advanceTimersByTime(500);
		expect(seen).toEqual([
			[1, 2],
			[3, 4],
			[5, 6],
		]); // final chunk
	});

	test("accumulates original array across multiple invocations", () => {
		const tasks = [1, 2];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 1, cb, 1000);
		throttled(); // queue=[1,2] → exec [1], queue=[2]
		throttled(); // queue=[2,1,2] → IGNORED

		expect(seen).toEqual([[1]]);

		vi.advanceTimersByTime(1000); // exec [2]
		expect(seen).toEqual([[1], [2]]);
	});

	test("continues processing accumulated queue after multiple calls", () => {
		const tasks = [1, 2, 3];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 2, cb, 500);

		throttled(); // queue=[1,2,3] → exec[1,2], queue=[3]
		throttled(); // queue=[3,1,2,3] → IGNORED
		throttled(); // queue=[3,1,2,3] → IGNORED

		expect(seen).toEqual([[1, 2]]);

		vi.advanceTimersByTime(500); // exec[3,1]
		expect(seen).toEqual([
			[1, 2],
			[3, 1],
		]);

		vi.advanceTimersByTime(500); // exec[2,3]
		expect(seen).toEqual([
			[1, 2],
			[3, 1],
			[2, 3],
		]);
	});

	test("stops auto-processing when queue empties", () => {
		const tasks = [1, 2];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 1, cb, 500);
		throttled(); // [1], queue=[2]

		vi.advanceTimersByTime(500);
		expect(seen).toEqual([[1], [2]]); // [2], queue empty

		vi.advanceTimersByTime(500); // NO execution (queue empty)
		expect(seen).toEqual([[1], [2]]);
	});

	test("handles partial chunks correctly", () => {
		const tasks = [1, 2, 3];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 3, cb, 1000);
		throttled();

		expect(seen).toEqual([[1, 2, 3]]); // partial chunk
	});

	test("count larger than array processes everything immediately", () => {
		const tasks = [1, 2, 3, 4];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 10, cb, 1000);
		throttled();

		expect(seen).toEqual([[1, 2, 3, 4]]);
	});

	test("empty array does nothing", () => {
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray([], 2, cb, 1000);
		throttled();
		throttled();

		expect(seen).toEqual([]);
	});

	test("multiple throttled instances are independent", () => {
		const seen1: number[][] = [];
		const seen2: string[][] = [];

		const throttled1 = throttleArray([1, 2], 1, (c) => seen1.push(c), 500);
		const throttled2 = throttleArray(["a", "b"], 1, (c) => seen2.push(c), 500);

		throttled1();
		throttled2();

		expect(seen1).toEqual([[1]]);
		expect(seen2).toEqual([["a"]]);
	});

	test("new invocation after queue drains starts fresh cycle", () => {
		const tasks = [1, 2, 3, 4];
		const seen: number[][] = [];
		const cb = (chunk: number[]) => seen.push(chunk);

		const throttled = throttleArray(tasks, 2, cb, 500);
		throttled(); // [1,2]

		vi.advanceTimersByTime(500); // [3,4], queue empty
		expect(seen).toEqual([
			[1, 2],
			[3, 4],
		]);

		throttled(); // NEW cycle: [1,2]
		expect(seen).toEqual([
			[1, 2],
			[3, 4],
			[1, 2],
		]);
	});
});
