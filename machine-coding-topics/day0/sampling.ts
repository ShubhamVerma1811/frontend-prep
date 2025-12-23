export function sampler<T extends Array<unknown>>(
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
