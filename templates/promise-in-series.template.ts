function asyncTask(wait) {
	return () => {
		return new Promise((res) => {
			setTimeout(() => {
				res(wait);
			}, wait * 1000);
		});
	};
}

const promises = [asyncTask(4), asyncTask(1), asyncTask(3), asyncTask(10)];

async function asyncSeriesExecuter(promises) {}

asyncSeriesExecuter(promises);

export default {};
