// import { act, renderHook } from "@testing-library/react";
// import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// import { useIdle } from "./useIdle";

// // Mock window and timers globally
// const originalWindow = { ...window };
// const mockAddEventListener = vi.fn();
// const mockRemoveEventListener = vi.fn();
// const mockClearTimeout = vi.fn();
// const mockSetTimeout = vi.fn(() => 123 as any);

// beforeEach(() => {
// 	// Reset mocks
// 	vi.clearAllMocks();

// 	// Mock window object
// 	(window as any).addEventListener = mockAddEventListener;
// 	(window as any).removeEventListener = mockRemoveEventListener;
// 	(window as any).clearTimeout = mockClearTimeout;
// 	(window as any).setTimeout = mockSetTimeout;
// });

// afterEach(() => {
// 	// Restore original window
// 	Object.assign(window, originalWindow);
// });

// describe("useIdle", () => {
// 	describe("initial state", () => {
// 		it("starts as idle (true)", () => {
// 			const { result } = renderHook(() => useIdle(1000));
// 			expect(result.current).toBe(true);
// 		});

// 		it("works with different timeout values", () => {
// 			[100, 500, 1000, 5000].forEach((ms) => {
// 				const { result } = renderHook(() => useIdle(ms));
// 				expect(result.current).toBe(true);
// 			});
// 		});
// 	});

// 	describe("user activity", () => {
// 		it("becomes non-idle on first user activity", async () => {
// 			const { result } = renderHook(() => useIdle(1000));

// 			// Simulate user activity (mousemove)
// 			act(() => {
// 				(window as any).dispatchEvent(new MouseEvent("mousemove"));
// 			});

// 			expect(result.current).toBe(false);
// 			expect(mockSetTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
// 		});

// 		it.each([
// 			"mousemove",
// 			"mouseover",
// 			"click",
// 			"keydown",
// 		])("resets timer on $event", () => {
// 			const { result } = renderHook(() => useIdle(1000));

// 			act(() => {
// 				(window as any).dispatchEvent(new MouseEvent(event as any));
// 			});

// 			expect(result.current).toBe(false);
// 			expect(mockClearTimeout).toHaveBeenNthCalledWith(1, null);
// 			expect(mockSetTimeout).toHaveBeenCalledTimes(1);
// 		});
// 	});

// 	describe("idle timeout", () => {
// 		it("becomes idle after timeout period", async () => {
// 			vi.useFakeTimers();

// 			const { result } = renderHook(() => useIdle(1000));

// 			// Trigger activity to start timer
// 			act(() => {
// 				(window as any).dispatchEvent(new MouseEvent("mousemove"));
// 			});

// 			expect(result.current).toBe(false);

// 			// Fast forward time
// 			act(() => {
// 				vi.advanceTimersByTime(1000);
// 			});

// 			expect(result.current).toBe(true);
// 		});

// 		it("resets timer on subsequent activity before timeout", async () => {
// 			vi.useFakeTimers();

// 			const { result } = renderHook(() => useIdle(1000));

// 			// First activity
// 			act(() => {
// 				(window as any).dispatchEvent(new MouseEvent("mousemove"));
// 			});

// 			// Advance halfway - still not idle
// 			act(() => {
// 				vi.advanceTimersByTime(500);
// 			});
// 			expect(result.current).toBe(false);

// 			// New activity resets timer
// 			act(() => {
// 				(window as any).dispatchEvent(new KeyboardEvent("keydown"));
// 			});

// 			// Advance full time - still not idle (timer was reset)
// 			act(() => {
// 				vi.advanceTimersByTime(1000);
// 			});
// 			expect(result.current).toBe(false);
// 		});
// 	});

// 	describe("multiple rapid activities", () => {
// 		it("handles burst of activity events correctly", async () => {
// 			vi.useFakeTimers();

// 			const { result } = renderHook(() => useIdle(2000));

// 			// Burst of activities
// 			["mousemove", "click", "keydown"].forEach((event) => {
// 				act(() => {
// 					(window as any).dispatchEvent(new MouseEvent(event as any));
// 				});
// 			});

// 			expect(mockClearTimeout).toHaveBeenCalledTimes(2); // Cleared twice
// 			expect(mockSetTimeout).toHaveBeenCalledTimes(3); // Set 3 times

// 			act(() => {
// 				vi.advanceTimersByTime(2000);
// 			});

// 			expect(result.current).toBe(true);
// 		});
// 	});

// 	describe("cleanup and unmounting", () => {
// 		it("cleans up event listeners and timer on unmount", () => {
// 			const { unmount } = renderHook(() => useIdle(1000));

// 			expect(mockAddEventListener).toHaveBeenCalledTimes(4);

// 			unmount();

// 			expect(mockRemoveEventListener).toHaveBeenCalledTimes(4);
// 			expect(mockClearTimeout).toHaveBeenCalledTimes(1);
// 		});

// 		it("prevents memory leaks with AbortController", () => {
// 			const { rerender, unmount } = renderHook(
// 				({ timeout }) => useIdle(timeout),
// 				{ initialProps: { timeout: 1000 } }
// 			);

// 			rerender({ timeout: 2000 });
// 			unmount();

// 			// Should clean up properly without duplicate listeners
// 			expect(mockRemoveEventListener).toHaveBeenCalledTimes(4);
// 		});

// 		it("cleanup prevents timer callback after unmount", async () => {
// 			vi.useFakeTimers();

// 			const { unmount } = renderHook(() => useIdle(1000));

// 			// Trigger timer
// 			act(() => {
// 				(window as any).dispatchEvent(new MouseEvent("mousemove"));
// 			});

// 			unmount();

// 			// Timer should be cleared and won't fire
// 			act(() => {
// 				vi.advanceTimersByTime(1000);
// 			});

// 			expect(mockClearTimeout).toHaveBeenCalledTimes(2);
// 		});
// 	});

// 	describe("re-rendering with new timeout", () => {
// 		it("updates timeout duration correctly", async () => {
// 			vi.useFakeTimers();

// 			const { result, rerender } = renderHook(({ ms }) => useIdle(ms), {
// 				initialProps: { ms: 1000 },
// 			});

// 			// Initial activity
// 			act(() => {
// 				(window as any).dispatchEvent(new MouseEvent("mousemove"));
// 			});

// 			rerender({ ms: 2000 });

// 			// New timer should be set with 2000ms
// 			expect(mockSetTimeout).toHaveBeenNthCalledWith(
// 				2,
// 				expect.any(Function),
// 				2000
// 			);

// 			act(() => {
// 				vi.advanceTimersByTime(1500);
// 			});

// 			expect(result.current).toBe(false); // Not yet idle
// 		});
// 	});

// 	describe("edge cases", () => {
// 		it("handles zero timeout", () => {
// 			vi.useFakeTimers();

// 			const { result } = renderHook(() => useIdle(0));

// 			act(() => {
// 				vi.advanceTimersByTime(0);
// 			});

// 			expect(result.current).toBe(true);
// 		});

// 		it("handles negative timeout", () => {
// 			const { result } = renderHook(() => useIdle(-1000));
// 			expect(result.current).toBe(true);
// 		});
// 	});

// 	describe("event listener options", () => {
// 		it("uses passive: true and AbortController signal", () => {
// 			renderHook(() => useIdle(1000));

// 			const calls = mockAddEventListener.mock.calls;
// 			expect(calls.length).toBe(4);

// 			calls.forEach(([event, handler, options]) => {
// 				expect(options).toEqual({
// 					signal: expect.any(AbortSignal),
// 					passive: true,
// 				});
// 			});
// 		});
// 	});
// });
