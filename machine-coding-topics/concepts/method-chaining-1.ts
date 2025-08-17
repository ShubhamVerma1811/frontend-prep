/*
Method chaining - Part 1

Explain method chaining in JavaScript by implementing a calculator that performs
the basic actions like add, subtract, divide, and multiply.

Example:
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);
//20

Method chaining is an object-oriented paradigm, in which the methods usually
share the same reference, which in JavaScript is done by sharing this (current context)
from each method.

Two different implementations of method chaining:
• Using objects
• With functions

Using objects:
Methods inside the object can refer to the current object using this keyword,
thus we can use the same to perform our operations and return them so that
they can be shared around the chain.

Method chaining with functions:
The problem with objects is that we cannot create a new instance of them.
But it can be solved using functions.
*/

const calculator = {
	sum: 0,
	add(v) {
		this.sum += v;
		return this;
	},
	subtract(v) {
		this.sum -= v;
		return this;
	},
	divide(v) {
		this.sum /= v;
		return this;
	},
	multiply(v) {
		this.sum *= v;

		return this;
	},
};

// Test case
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.sum);
// Expected output: 20
