/*
Find the intersection of two arrays without duplicates.

Context & motivation
- Finding common elements between two collections is a classic interview
  problem that tests your understanding of sets, hashing, and algorithmic
  trade-offs.
- Real-world use cases include finding shared users between two groups,
  matching tags, or filtering overlapping data.
- The problem explicitly allows modifying the input arrays, which opens up
  multiple implementation strategies with different time/space profiles.

Behaviour / contract
- Write a function `arrayIntersect(arr1, arr2)` that returns an array
  containing the elements that appear in both `arr1` and `arr2`.
- The returned array must contain **no duplicates**.
- Order of the returned elements does not matter.
- You are allowed to modify the input arrays if it helps your algorithm.
- Input arrays may contain duplicates themselves.
- Elements can be assumed to be primitive values comparable with `===`.

Constraints and assumptions
- Arrays are not sorted.
- Arrays may contain duplicate elements.
- You may modify either or both input arrays.
- The result should not contain duplicate values.
- You may return the result in any order.
- Consider both time and space complexity in your solution.

Examples (informal)

Example 1: basic overlap
```ts
arrayIntersect([1, 2, 2, 3], [2, 2, 4]);
// Possible result: [2]
```
- `2` appears in both arrays; duplicates in the result are removed.

Example 2: no overlap
```ts
arrayIntersect([1, 2, 3], [4, 5, 6]);
// Result: []
```
- No common elements.

Example 3: multiple common elements
```ts
arrayIntersect([1, 2, 3, 4], [3, 4, 5, 6]);
// Possible result: [3, 4] (order does not matter)
```

Edge cases to think about
- One or both arrays are empty.
- Arrays with all elements identical.
- Arrays with all duplicates.
- Large arrays where performance matters.
- Non-numeric primitive values (e.g., strings).
- Negative numbers or zero.
- Arrays containing `null` or `undefined`.
*/

export function arrayIntersect<T>(arr1: T[], arr2: T[]): T[] {
	if (!arr1?.length || !arr2?.length) return [];

	const [smallArr, largeArr] =
		arr1.length > arr2.length ? [arr2, arr1] : [arr1, arr2];

	const set = new Set(largeArr);
	const seen = new Set();
	const res = [];

	for (const i of smallArr) {
		if (set.has(i) && !seen.has(i)) {
			seen.add(i);
			res.push(i);
		}
	}

	return res;
}
