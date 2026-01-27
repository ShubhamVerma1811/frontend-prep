import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { usePrevious } from "../current/usePrevious";

describe("usePrevious", () => {
	describe("basic functionality", () => {
		it("returns undefined on first render", () => {
			const { result } = renderHook(() => usePrevious(0));
			expect(result.current).toBeUndefined();
		});

		it("returns previous value after first rerender", () => {
			const { result, rerender } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: 0 } }
			);

			expect(result.current).toBeUndefined();

			act(() => {
				rerender({ value: 1 });
			});

			expect(result.current).toBe(0);
		});

		it("continuously tracks previous values across multiple renders", () => {
			const { result, rerender } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: 0 } }
			);

			expect(result.current).toBeUndefined();

			act(() => {
				rerender({ value: 1 });
			});
			expect(result.current).toBe(0);

			act(() => {
				rerender({ value: 2 });
			});
			expect(result.current).toBe(1);

			act(() => {
				rerender({ value: 3 });
			});
			expect(result.current).toBe(2);
		});
	});

	describe("primitive types", () => {
		it.each([
			{ type: "string", initial: "a", next: "b" },
			{ type: "number", initial: 42, next: 99 },
			{ type: "boolean", initial: false, next: true },
			{ type: "null", initial: null, next: null },
		])("handles $type correctly", ({ initial, next }) => {
			const { result, rerender } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: initial } }
			);

			expect(result.current).toBeUndefined();

			act(() => {
				rerender({ value: next });
			});

			expect(result.current).toBe(initial);
		});
	});

	describe("complex types", () => {
		it("handles objects correctly (shallow reference tracking)", () => {
			const obj1 = { foo: "bar" };
			const obj2 = { foo: "baz" };

			const { result, rerender } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: obj1 } }
			);

			expect(result.current).toBeUndefined();

			act(() => {
				rerender({ value: obj2 });
			});

			expect(result.current).toBe(obj1);
			expect(result.current).not.toBe(obj2);
		});

		it("handles arrays correctly", () => {
			const arr1 = [1, 2, 3];
			const arr2 = [4, 5, 6];

			const { result, rerender } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: arr1 } }
			);

			expect(result.current).toBeUndefined();

			act(() => {
				rerender({ value: arr2 });
			});

			expect(result.current).toBe(arr1);
			expect(result.current).not.toBe(arr2);
		});

		it("handles functions correctly", () => {
			const fn1 = () => 1;
			const fn2 = () => 2;

			const { result, rerender } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: fn1 } }
			);

			expect(result.current).toBeUndefined();

			act(() => {
				rerender({ value: fn2 });
			});

			expect(result.current).toBe(fn1);
			expect(result.current).not.toBe(fn2);
		});
	});

	describe("edge cases", () => {
		it("handles undefined initial value", () => {
			const { result, rerender } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: undefined } }
			);

			expect(result.current).toBeUndefined();

			act(() => {
				// @ts-expect-error
				rerender({ value: "hello" });
			});

			expect(result.current).toBeUndefined();
		});

		it("unmounting doesn't affect ref", () => {
			const { result, rerender, unmount } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: 1 } }
			);

			act(() => {
				rerender({ value: 2 });
			});
			expect(result.current).toBe(1);

			unmount();

			const { result: newResult } = renderHook(
				({ value }) => usePrevious(value),
				{ initialProps: { value: 3 } }
			);

			expect(newResult.current).toBeUndefined();
		});
	});

	describe("performance", () => {
		it("doesn't cause infinite re-renders", () => {
			const values = [1, 2, 3, 4, 5];
			let renderCount = 0;

			const { result, rerender } = renderHook(
				({ value }) => {
					renderCount++;
					return usePrevious(value);
				},
				{ initialProps: { value: values[0] } }
			);

			expect(renderCount).toBe(1);

			values.slice(1).forEach((value) => {
				act(() => {
					rerender({ value });
				});
			});

			expect(renderCount).toBe(values.length);
			expect(result.current).toBe(values[values.length - 2]);
		});
	});
});
