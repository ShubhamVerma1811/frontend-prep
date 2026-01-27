import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useToggle } from "./useToggle";

describe("useToggle test suite", () => {
	it("should toggle the value from false to true", () => {
		const { result } = renderHook(() => useToggle(false));

		expect(result.current.on).toBe(false);
		act(() => {
			result.current.toggle(true);
		});
		expect(result.current.on).toBe(true);
	});

	it("should toggle the value when called with no arguments", () => {
		const { result } = renderHook(() => useToggle(false));

		expect(result.current.on).toBe(false);
		act(() => {
			result.current.toggle();
		});
		expect(result.current.on).toBe(true);
		act(() => {
			result.current.toggle();
		});
		expect(result.current.on).toBe(false);
	});
});
