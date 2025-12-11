type InputArray<T> = Array<T | InputArray<T>>;

export function flat<T extends Array<T>>(arr: InputArray<T>, depth = 1) {
	const res: Array<T> = [];

	function helper(arr: InputArray<T>, depth: number) {
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i]) && depth > 0) {
				helper(arr[i], depth - 1);
			} else {
				res.push(arr[i] as T);
			}
		}
	}

	helper(arr, depth);

	return res;
}
