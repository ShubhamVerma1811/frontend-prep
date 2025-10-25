function sampler() {}

function message() {
	console.log("hello");
}

const sample = sampler(message, 0);
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed

export default {};
