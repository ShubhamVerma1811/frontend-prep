/*
Piping function - Part 1

Create a function that accepts multiple functions as an argument and a value
and run this value through each function and return the final output.

*/

function piep1<T>(obj: T) {
	return (...args) => {
		recurseObj(obj, ...args);
	};
}

function recurseObj(obj, ...args) {
	for (const key in obj) {
		if (Object.hasOwn(obj, key)) {
			if (typeof obj[key] === "function") {
				obj[key] = obj[key].apply(this, args);
			} else if (typeof obj[key] === "object") {
				recurseObj(obj[key], ...args);
			}
		}
	}
}

function pipe2(obj: object) {
	return function (...args) {
		for (const key in obj) {
			if (Object.hasOwn(obj, key)) {
				if (typeof obj[key] === "function") {
					obj[key] = obj[key].apply(this, args);
				} else {
					obj[key] = pipe2(obj[key])(...args);
				}
			}
		}
		return obj;
	};
}

const obj = {
	a: {
		a: 1,
		z: [1],
		b: (a, b, c) => {
			return a + b + c;
		},
		c: (a, b, c) => a + b - c,
	},
	d: (a, b, c) => {
		return a - b - c;
	},
};

console.dir(obj, { depth: Infinity });

pipe2(obj)(1, 1, 1);

console.dir(obj, { depth: Infinity });
