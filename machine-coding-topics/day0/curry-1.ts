function curry() {
	let sum = 0;
	return function sumFn(v: number) {
		sum += v;
		return sum;
	};
}

const curriedSum = curry();

console.log(curriedSum(5)); // 5
console.log(curriedSum(3)); // 8
console.log(curriedSum(4)); // 12
console.log(curriedSum(0)); // 12
