function composeAsync() {}

// Input:
function a(x, y, next) {
	console.log({ x, y, next });

	function onTimeout() {
		next(null, x * y);
	}
	setTimeout(onTimeout, 0);
}

function b(z, next) {
	console.log({ z, next });

	function onTimeout() {
		next(null, z + 5);
	}
	setTimeout(onTimeout, 0);
}

function c(r, next) {
	console.log({ r, next });

	function onTimeout() {
		next(null, r / 10);
	}
	setTimeout(onTimeout, 0);
}

const compose = composeAsync(c, b, a);

function done(error, result) {
	if (error) {
		throw error;
	}
	console.log({ result });
}

compose(5, 3, done);

// Output:
// 2

export default {};
