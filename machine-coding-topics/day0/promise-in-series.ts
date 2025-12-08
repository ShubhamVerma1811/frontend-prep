function asyncTask(wait: number): () => Promise<number> {
	return function asyncTaskCallback(): Promise<number> {
		return new Promise((res) => {
			setTimeout(() => {
				console.log(`Ran the ${wait} instance.`);
				res(wait);
			}, wait * 1000);
		});
	};
}

const promises = [asyncTask(4), asyncTask(1), asyncTask(3), asyncTask(10)];

async function asyncSeriesExecuter(promises: Array<() => Promise<number>>) {
	promises.reduce((acc: Promise<unknown>, curr: () => Promise<number>) => {
		return acc.then(() => {
			return curr();
		});
	}, Promise.resolve());
}

asyncSeriesExecuter(promises);
