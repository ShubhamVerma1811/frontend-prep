// async iteratt(data, cb(err,data) on done)
function filter() {}

const numPromise = filter(
	Array.from({ length: 20 }, (_, i) => i + 1),
	(num, callback) => {
		setTimeout(() => {
			console.log(`Processed: ${num}`);

			if (num % 2 !== 0) {
				console.log("Triggering error for num:", num);
				callback(true, false);
			} else {
				callback(null, true);
			}
		}, 0);
	}
);

numPromise
	.then((result) => console.log("success:", result))
	.catch(() => console.log("no success"));
