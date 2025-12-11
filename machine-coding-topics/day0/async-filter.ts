type Iteratee = (T: number, cb: IterateeCallback) => void;

type IterateeCallback = (err: boolean | null, done?: boolean) => void;

// async iteratt(data, cb(err,data) on done)
function filter<T extends number>(
	arr: Array<T>,
	iteratee: Iteratee
): Promise<Array<T>> {
	return new Promise((resolve) => {
		const res: Array<T> = [];
		let track = arr.length;

		for (let i = 0; i < arr.length; i++) {
			iteratee(arr[i], (err, done) => {
				track--;
				if (done && !err) {
					res.push(arr[i]);
				}

				if (track <= 0) {
					resolve(res);
				}
			});
		}
	});
}

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
