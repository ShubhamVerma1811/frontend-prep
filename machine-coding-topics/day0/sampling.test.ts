import { describe, expect, it } from "vitest";

import { sampler } from "./sampling";

function message(i: number) {
	return `Hello ${i}`;
}

describe("sampling test suites", () => {
	it("return every 3rd time", () => {
		const sample = sampler(message, 3);

		for (const i of Array.from({ length: 10 }, (_, idx) => idx)) {
			const x = sample(i + 1);

			if ((i + 1) % 3 === 0) {
				expect(x).toBe(`Hello ${i + 1}`);
			} else expect(x).toBe(undefined);
		}
	});
});
