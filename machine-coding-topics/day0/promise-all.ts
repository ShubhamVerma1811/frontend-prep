/*
Polyfill for Promise.all

Implementing Promise.all is a common frontend interview question that tests understanding of asynchronous JavaScript and promise handling. This method is frequently used in real-world scenarios when you need to wait for multiple asynchronous operations to complete before proceeding, such as fetching data from multiple APIs or performing parallel computations.

Write a function that mimics the behavior of Promise.all. The function should accept an array of promises and return a new promise that resolves when all input promises have resolved, or rejects when any input promise rejects.

Behavior:
- Accept an array of promises (or values that can be converted to promises)
- Return a new promise that resolves with an array of all resolved values
- The resolved values should maintain the same order as the input promises
- If any promise rejects, the returned promise should reject immediately with that rejection reason
- If the input array is empty, the promise should resolve with an empty array

Constraints:
- All promises should execute in parallel
- The first rejection should immediately reject the returned promise
- Results must preserve input order regardless of resolution timing
- Handle non-promise values by treating them as already resolved promises

Examples:
Example 1:
- Input: [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
- Output: Promise resolving to [1, 2, 3]
- Explanation: All promises resolve, so the result is an array of all values in input order

Example 2:
- Input: [Promise.reject("error"), Promise.resolve(2), Promise.resolve(3)]
- Output: Promise rejecting with "error"
- Explanation: First promise rejects, so the entire operation rejects immediately

Edge cases to think about:
- Empty input array
- Mixed promises and regular values
- Multiple promises rejecting (which rejection should be used?)
- Promises that resolve at different times
- Very large arrays of promises
*/

export function myPromiseAll(promises: Array<Promise<unknown> | unknown>) {
	return new Promise((resolve, reject) => {
		const res: unknown[] = [];
		let rem = promises.length;

		if (rem === 0) {
			resolve(res);
			return;
		}

		promises.forEach((prom, index) => {
			Promise.resolve(prom)
				.then((r: unknown) => {
					res[index] = r;
					rem--;

					if (rem === 0) resolve(res);
				})
				.catch(reject);
		});
	});
}
