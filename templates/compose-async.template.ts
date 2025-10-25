function composeAsync() {}

function a(x, y) {
	return new Promise((resolve) => setTimeout(() => resolve(x * y), 100));
}

function b(z) {
	return new Promise((resolve, _) => setTimeout(() => resolve(z + 5), 100));
}

function c(r) {
	return new Promise((resolve) => setTimeout(() => resolve(r / 10), 100));
}

composeAsync(
	c,
	b,
	a
)(5, 3)
	.then((result) => {
		console.log({ result });
	})
	.catch(console.error);

// Output:
// 2

export default {};
