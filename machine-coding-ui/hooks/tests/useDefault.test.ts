import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useDefault } from "../current/useDefault";

describe("useDefault", () => {
	it("should return initialValue when it's not null/undefined", () => {
		const { result } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: 42, defaultValue: 0 } }
		);
		expect(result.current[0]).toBe(42);
	});

	it("should return defaultValue when initialValue is undefined", () => {
		const { result } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: undefined, defaultValue: "fallback" } }
		);
		expect(result.current[0]).toBe("fallback");
	});

	it("should return defaultValue when initialValue is null", () => {
		const { result } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: null, defaultValue: true } }
		);
		expect(result.current[0]).toBe(true);
	});

	it("should update state with setValue and return new value", () => {
		const { result } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: 1, defaultValue: 0 } }
		);

		act(() => {
			result.current[1](99);
		});
		expect(result.current[0]).toBe(99);
	});

	it("should fallback to defaultValue after setting null", () => {
		const { result } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: 5, defaultValue: -1 } }
		);

		act(() => {
			result.current[1](null);
		});
		expect(result.current[0]).toBe(-1);
	});

	it("should fallback to defaultValue after setting undefined", () => {
		const { result } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: 5, defaultValue: -1 } }
		);

		act(() => {
			result.current[1](undefined);
		});
		expect(result.current[0]).toBe(-1);
	});

	it("should work with strings", () => {
		const { result } = renderHook(() => useDefault("hello", "world"));
		expect(result.current[0]).toBe("hello");

		act(() => {
			result.current[1]("");
		});
		expect(result.current[0]).toBe("");
	});

	it("should work with booleans", () => {
		const { result } = renderHook(() => useDefault(true, false));
		expect(result.current[0]).toBe(true);

		act(() => {
			result.current[1](null);
		});
		expect(result.current[0]).toBe(false);
	});

	it("should work with objects", () => {
		const initialObj = { name: "test" };
		const defaultObj = { name: "default" };

		const { result } = renderHook(() => useDefault(initialObj, defaultObj));
		expect(result.current[0]).toBe(initialObj);

		act(() => {
			result.current[1](undefined);
		});
		expect(result.current[0]).toBe(defaultObj);
	});

	it("should work with arrays", () => {
		const initialArr = [1, 2, 3];
		const defaultArr = [0];

		const { result } = renderHook(() => useDefault(initialArr, defaultArr));
		expect(result.current[0]).toBe(initialArr);

		act(() => {
			result.current[1](null);
		});
		expect(result.current[0]).toBe(defaultArr);
	});

	it("should maintain internal state across re-renders", () => {
		const { result, rerender } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: 100, defaultValue: 0 } }
		);

		// Update state
		act(() => {
			result.current[1](200);
		});
		expect(result.current[0]).toBe(200);

		// Re-render with different props - state should persist
		rerender({ initialValue: 300, defaultValue: 0 });
		expect(result.current[0]).toBe(200);
	});

	it("should respect new defaultValue on re-render when state is nullish", () => {
		const { result, rerender } = renderHook(
			({ initialValue, defaultValue }) =>
				useDefault(initialValue, defaultValue),
			{ initialProps: { initialValue: null, defaultValue: "first" } }
		);

		act(() => {
			result.current[1](null);
		});

		// Re-render with new defaultValue
		rerender({ initialValue: null, defaultValue: "second" });
		expect(result.current[0]).toBe("second");
	});

	it("should handle defaultValue being null", () => {
		const { result } = renderHook(() => useDefault("value", null));

		act(() => {
			result.current[1](null);
		});
		expect(result.current[0]).toBe(null);
	});

	it("should handle defaultValue being undefined", () => {
		const { result } = renderHook(() => useDefault("value", undefined));

		act(() => {
			result.current[1](undefined);
		});
		expect(result.current[0]).toBe(undefined);
	});

	it("should distinguish between null and undefined properly", () => {
		const { result: nullResult } = renderHook(() =>
			useDefault(null, "default")
		);
		const { result: undefResult } = renderHook(() =>
			useDefault(undefined, "default")
		);

		expect(nullResult.current[0]).toBe("default");
		expect(undefResult.current[0]).toBe("default");
	});

	it("should maintain reference stability for value when state doesn't change", () => {
		const { result, rerender } = renderHook(() => useDefault(42, 0));

		const firstValue = result.current[0];
		rerender();
		const secondValue = result.current[0];

		expect(firstValue).toBe(secondValue);
	});
});
