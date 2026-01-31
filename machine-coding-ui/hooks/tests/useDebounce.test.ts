import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useDebounce } from "../current/useDebounce";

describe("useDebounce", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.useRealTimers();
	});

	it("returns initial value immediately on first render", () => {
		const { result } = renderHook(() => useDebounce("hello", { delay: 1000 }));
		expect(result.current).toBe("hello");
	});

	it("delays value update until delay passes", async () => {
		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 1000 }),
			{ initialProps: { value: "initial" } }
		);

		rerender({ value: "debounced" });
		expect(result.current).toBe("initial");

		await act(async () => vi.advanceTimersByTime(1000));
		expect(result.current).toBe("debounced");
	});

	it("ignores intermediate values, only uses last value after delay", async () => {
		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 500 }),
			{ initialProps: { value: "A" } }
		);

		// Rapid changes within delay period
		rerender({ value: "B" });
		vi.advanceTimersByTime(200); // Not enough time
		rerender({ value: "C" });
		vi.advanceTimersByTime(200); // Still not enough
		rerender({ value: "D" }); // Latest value

		expect(result.current).toBe("A"); // Still initial

		await act(async () => vi.advanceTimersByTime(500));
		expect(result.current).toBe("D"); // Only final value
	});

	it("cleans up timer on unmount", async () => {
		const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");
		const { unmount } = renderHook(() => useDebounce("test", { delay: 1000 }));

		unmount();
		expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
	});

	it("cancels previous timer when new value arrives", async () => {
		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 1000 }),
			{ initialProps: { value: "first" } }
		);

		rerender({ value: "second" });
		vi.advanceTimersByTime(400);

		rerender({ value: "third" }); // Cancels "second" timer
		await act(async () => vi.advanceTimersByTime(1000));

		expect(result.current).toBe("third"); // Not "second"
	});

	it("respects new delay value", async () => {
		const { result, rerender } = renderHook(
			({ value, delay }) => useDebounce(value, { delay: delay }),
			{ initialProps: { value: "test", delay: 1000 } }
		);

		rerender({ value: "new", delay: 200 });
		await act(async () => vi.advanceTimersByTime(200));
		expect(result.current).toBe("new"); // Faster delay works
	});

	it("works with zero delay (immediate update)", async () => {
		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 0 }),
			{ initialProps: { value: "old" } }
		);

		rerender({ value: "new" });
		await act(async () => vi.advanceTimersByTime(0));
		expect(result.current).toBe("new");
	});

	it("works with numbers", async () => {
		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 500 }),
			{ initialProps: { value: 42 } }
		);

		rerender({ value: 100 });
		await act(async () => vi.advanceTimersByTime(500));
		expect(result.current).toBe(100);
	});

	it("works with objects", async () => {
		const obj1 = { id: 1, name: "first" };
		const obj2 = { id: 2, name: "second" };

		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 500 }),
			{ initialProps: { value: obj1 } }
		);

		rerender({ value: obj2 });
		expect(result.current).toBe(obj1); // Reference equality

		await act(async () => vi.advanceTimersByTime(500));
		expect(result.current).toBe(obj2);
	});

	it("handles zero delay with fake timers", async () => {
		vi.useFakeTimers();
		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 0 }),
			{ initialProps: { value: "test" } }
		);

		rerender({ value: "new" });
		expect(result.current).toBe("test");

		await act(async () => vi.advanceTimersByTime(0));
		expect(result.current).toBe("new");
	});

	it("stable reference when value/delay unchanged", () => {
		const { result, rerender } = renderHook(
			({ value }) => useDebounce(value, { delay: 1000 }),
			{ initialProps: { value: "stable" } }
		);

		const firstRef = result.current;
		rerender({ value: "stable" });
		expect(result.current).toBe(firstRef); // Same reference
	});
});
