/*
  A debounce function is a function that limits the rate at which a function can be called.
  You are given a function fn, an integer wait, and an optional options object as arguments.
  The options object can have two properties:
    leading: A boolean indicating whether the function should be called on the leading edge of the wait period.
    trailing: A boolean indicating whether the function should be called on the trailing edge of the wait period.
 */

export function debounce(
	fn: (args: unknown[]) => void,
	wait: number,
	opts = { leading: true, trailing: true }
) {}

// INPUT
const fn = debounce(() => {
	console.log("debounced");
}, 1000);

fn();
fn();
fn();
