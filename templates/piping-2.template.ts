/*
Piping function - Part 2

Create a function that accepts multiple functions as an argument and a value
and run this value through each function and return the final output.

*/

const pipingFunctions = () => {};

const getSalary = (person: { salary: number }): number => person.salary * 100;
const addBonus = (netSalary: number): number => netSalary + 1000;
const deductTax = (grossSalary: number): number =>
	grossSalary - grossSalary * 0.3;

const result = pipingFunctions(
	getSalary,
	addBonus,
	deductTax
)({ salary: 1000 });

console.log(result);

export default {};
