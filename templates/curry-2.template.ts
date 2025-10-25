function curryLimit() {}

const sum = curryLimit((a, b, c, d, e) => {
	console.log({ a, b, c, d, e });

	return a + b + c + d + e;
});

sum(1, 2, 3, 4, 5);
sum(1, 2)(3, 4, 5);
sum(1)(2, 3, 4, 5);
sum(1, 2, 3)(4, 5);
sum(1)(2)(3)(4)(5);
sum(1, 2, 3, 4)(5);

export default {};
