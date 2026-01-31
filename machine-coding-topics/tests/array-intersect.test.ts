import { describe, expect, test } from "vitest";
import { arrayIntersect } from "../current/array-intersect";

describe("arrayIntersect", () => {
	test("returns intersection without duplicates", () => {
		const result = arrayIntersect([1, 2, 2, 3], [2, 2, 4]);
		expect(result).toContain(2);
		expect(result).toHaveLength(1);
	});

	test("returns empty array when no overlap", () => {
		const result = arrayIntersect([1, 2, 3], [4, 5, 6]);
		expect(result).toEqual([]);
	});

	test("handles multiple common elements", () => {
		const result = arrayIntersect([1, 2, 3, 4], [3, 4, 5, 6]);
		expect(result).toEqual(expect.arrayContaining([3, 4]));
		expect(result).toHaveLength(2);
	});

	test("handles empty arrays", () => {
		expect(arrayIntersect([], [1, 2, 3])).toEqual([]);
		expect(arrayIntersect([1, 2, 3], [])).toEqual([]);
		expect(arrayIntersect([], [])).toEqual([]);
	});

	test("handles arrays with all duplicates", () => {
		const result = arrayIntersect([1, 1, 1], [1, 1, 1]);
		expect(result).toEqual([1]);
	});

	test("handles non-numeric primitives", () => {
		const result = arrayIntersect(["a", "b", "c"], ["b", "d"]);
		expect(result).toEqual(["b"]);
	});

	test("handles mixed primitives including null and undefined", () => {
		const result = arrayIntersect([null, undefined, 0, false], [null, 1, true]);
		expect(result).toEqual([null]);
	});

	test("does not modify input arrays when using a Set-based approach", () => {
		const a = [1, 2, 3];
		const b = [2, 4];
		const aCopy = [...a];
		const bCopy = [...b];
		arrayIntersect(a, b);
		expect(a).toEqual(aCopy);
		expect(b).toEqual(bCopy);
	});

	test("order of result does not matter", () => {
		const result1 = arrayIntersect([1, 2, 3], [2, 3, 4]);
		const result2 = arrayIntersect([1, 2, 3], [3, 2, 4]);
		expect(result1).toEqual(expect.arrayContaining([2, 3]));
		expect(result2).toEqual(expect.arrayContaining([2, 3]));
	});

	test("large arrays performance hint", () => {
		const large = Array.from({ length: 10000 }, (_, i) => i + 1);
		const small = [5000, 10000, 15000];
		const result = arrayIntersect(large, small);
		expect(result).toEqual([5000, 10000]);
	});
});
