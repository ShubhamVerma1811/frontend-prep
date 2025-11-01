function sampler<T extends Array<unknown>>(
	cb: (...args: T) => void,
	count: number
) {
	let _count = count;
	return function samplerCallback(...args: T) {
		_count--;
		if (_count === 0) {
			_count = count;
			return cb(...args);
		}
	};
}

function message(i: number) {
	console.log("hello", i);
}

const sample = sampler(message, 3);

for (const i of Array.from({ length: 10 }, (_, idx) => idx)) {
	sample(i + 1);
}
