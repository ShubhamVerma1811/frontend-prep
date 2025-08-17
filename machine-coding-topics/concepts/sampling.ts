function sampler(fn, count) {
  let _count = count;

  return (...args) => {
    const context = this;
    _count--;
    if (_count === 0) {
      _count = count;
      return fn.apply(context, args);
    }
  };
}

function message() {
  console.log('hello');
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
