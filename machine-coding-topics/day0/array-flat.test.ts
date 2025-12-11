import { describe, expect, test } from "vitest";
import { flat } from "./array-flat";

describe("Array flat test suite", () => {
	describe("Basic flattening", () => {
		test("should flatten one level by default", () => {
			const input = [1, 2, [3, 4]];
			const result = flat(input);
			expect(result).toEqual([1, 2, 3, 4]);
		});

		test("should flatten one level when depth is 1", () => {
			const input = [1, 2, [3, 4], [5, 6]];
			const result = flat(input, 1);
			expect(result).toEqual([1, 2, 3, 4, 5, 6]);
		});

		test("should not flatten when depth is 0", () => {
			const input = [1, 2, [3, 4]];
			const result = flat(input, 0);
			expect(result).toEqual([1, 2, [3, 4]]);
		});
	});

	describe("Multiple depth levels", () => {
		test("should flatten two levels when depth is 2", () => {
			const input = [1, 2, [3, 4], [[5]]];
			const result = flat(input, 2);
			expect(result).toEqual([1, 2, 3, 4, 5]);
		});

		test("should flatten three levels when depth is 3", () => {
			const input = [1, [2, [3, [4]]]];
			const result = flat(input, 3);
			expect(result).toEqual([1, 2, 3, 4]);
		});

		test("should handle complex nested structure", () => {
			const input = [
				[[1, [1.1]], 2, 3],
				[4, 5],
			];
			const result = flat(input, 3);
			expect(result).toEqual([1, 1.1, 2, 3, 4, 5]);
		});
	});

	describe("Infinite depth", () => {
		test("should flatten all levels with Infinity depth", () => {
			const input = [1, [2, [3, [4, [5]]]]];
			const result = flat(input, Infinity);
			expect(result).toEqual([1, 2, 3, 4, 5]);
		});

		test("should handle complex deeply nested arrays", () => {
			const input = [
				[[1, [1.1]], 2, 3],
				[4, 5],
			];
			const result = flat(input, Infinity);
			expect(result).toEqual([1, 1.1, 2, 3, 4, 5]);
		});
	});

	describe("Edge cases", () => {
		test("should handle empty array", () => {
			const input = [];
			const result = flat(input);
			expect(result).toEqual([]);
		});

		test("should handle array with empty nested arrays", () => {
			const input = [1, [], 2, [3, []]];
			const result = flat(input, 2);
			expect(result).toEqual([1, 2, 3]);
		});

		test("should handle single element array", () => {
			const input = [42];
			const result = flat(input);
			expect(result).toEqual([42]);
		});

		test("should handle array with only nested arrays", () => {
			const input = [[1], [2], [3]];
			const result = flat(input);
			expect(result).toEqual([1, 2, 3]);
		});
	});

	describe("Data types", () => {
		test("should handle mixed data types", () => {
			const input = [1, "hello", [true, null], [undefined, 3.14]];
			const result = flat(input);
			expect(result).toEqual([1, "hello", true, null, undefined, 3.14]);
		});

		test("should handle objects in arrays", () => {
			const obj1 = { a: 1 };
			const obj2 = { b: 2 };
			const input = [obj1, [obj2]];
			const result = flat(input);
			expect(result).toEqual([obj1, obj2]);
		});

		test("should handle arrays with functions", () => {
			const fn = () => {};
			const input = [1, [fn], 2];
			const result = flat(input);
			expect(result).toEqual([1, fn, 2]);
		});
	});

	describe("Negative and invalid depths", () => {
		test("should handle negative depth", () => {
			const input = [1, [2, [3]]];
			const result = flat(input, -1);
			expect(result).toEqual([1, [2, [3]]]);
		});

		test("should handle zero depth", () => {
			const input = [1, [2, [3]]];
			const result = flat(input, 0);
			expect(result).toEqual([1, [2, [3]]]);
		});
	});

	describe("Performance cases", () => {
		test("should handle large flat array", () => {
			const input = Array.from({ length: 1000 }, (_, i) => i);
			const result = flat(input);
			expect(result).toHaveLength(1000);
			expect(result[0]).toBe(0);
			expect(result[999]).toBe(999);
		});

		test("should handle moderately nested arrays", () => {
			const input = [1, [2, [3, [4, [5]]]]];
			const result = flat(input, 4);
			expect(result).toEqual([1, 2, 3, 4, 5]);
		});
	});

	describe("Original array preservation", () => {
		test("should not mutate original array", () => {
			const input = [1, [2, [3]]];
			const original = JSON.parse(JSON.stringify(input));
			flat(input, 2);
			expect(input).toEqual(original);
		});
	});
});
