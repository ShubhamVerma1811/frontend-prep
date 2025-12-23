import { describe, expect, it } from "vitest";
import { ownGroupBy } from "./object-groupBy";

describe("Object groupby test suite", () => {
	it("should match the output", () => {
		const items = [
			{ id: 1, kind: "a" },
			{ id: 2, kind: "b" },
			{ id: 3, kind: "a", name: "Bob" },
		];

		const output = {
			a: [
				{ id: 1, kind: "a" },
				{ id: 3, kind: "a", name: "Bob" },
			],
			b: [{ id: 2, kind: "b" }],
		};

		expect(ownGroupBy<(typeof items)[0]>(items, ({ kind }) => kind)).toEqual(
			output
		);
	});
});
