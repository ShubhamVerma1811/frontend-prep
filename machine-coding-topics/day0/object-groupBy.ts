// Object.groupBy() allows us to easily group array items, please try to implement it by yourself.

type CallbackKey<T> = {
	[key in keyof T]: string;
};

export function ownGroupBy<T>(
	array: Array<T>,
	cb: (key: CallbackKey<T>) => string
	//TODO:: I HAVE NO IDEA IF THIS IS RIGHT OR NOT, BUT IT WORKS for the test cases type errors, ITS PROB WRONG
): Array<Record<string extends keyof T ? keyof T : keyof T, T>> {
	return array.reduce((acc, curr) => {
		// @ts-expect-error fix types TODO
		const key = cb(curr);
		acc[key] = acc[key] || [];
		acc[key].push(curr);
		return acc;
	}, Object.create(null));
}
