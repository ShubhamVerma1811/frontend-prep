// async iteratt(data, cb(err,data) on done)
function filter() {}

const numPromise = filter([1, 2, 3, 4, 5], (num, callback) => {
	setTimeout(() => {
		num = num * 2;
		console.log(`Processed: ${num}`);

		// throw error
		if (num === 6) {
			// Changed from 7 to 6 to actually trigger error
			console.log("Triggering error for num:", num);
			callback(true);
		} else {
			callback(null, num !== 4);
		}
	}, 2000);
});

numPromise
	.then((result) => console.log("success:" + result))
	.catch(() => console.log("no success"));

export default {};
