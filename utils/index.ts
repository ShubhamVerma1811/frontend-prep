export function debounce<T>(fn: (...args: unknown[]) => T, wait: number) {
	let timer: string | number | NodeJS.Timeout | undefined;

	return (...args: unknown[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			return fn.call(args);
		}, wait);
	};
}

export function generateUUID() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = (crypto.getRandomValues(new Uint8Array(1))[0] % 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export function wait(ms: number) {
	return new Promise((res) => {
		setTimeout(() => {
			res(ms);
		}, ms * 1000);
	});
}
