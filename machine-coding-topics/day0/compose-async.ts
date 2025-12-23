export function composeAsync(
	...fns: Array<(...input: Array<number>) => Promise<number>>
) {
	return async (...args: Array<number>) => {
		// 	for (let i = fns.length - 1; i > -1; i--) {
		// 		const x = await fns[i](...args);
		// 		args = [x];
		// 	}

		// 	return fns.length ? args[0] : undefined;
		// };

		const prom = fns.reduceRight((acc, curr) => {
			return acc.then(() => {
				return curr(...args).then((r) => {
					args = [r];
					return r;
				});
			});
		}, Promise.resolve());

		return new Promise((resolve) => resolve(prom));
	};
}
