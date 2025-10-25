/*
Piping function - Part 1

Create a function that accepts multiple functions as an argument and a value
and run this value through each function and return the final output.

*/

function pipe1() {}

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

pipe1(obj)(1, 1, 1);

console.dir(obj, { depth: Infinity });

export default {};
