/**
 * Problem: Async Method Chaining - Uber Driver Simulator
 *
 * Create a Uber class that implements asynchronous method chaining.
 * The driver should be able to perform various actions like picking up passengers,
 * driving, dropping passengers, and resting - all while maintaining chainability.
 *
 * Requirements:
 * 1. Implement a Uber class with the following methods:
 *    - pick(passengerName: string): Pick up a passenger and log "User {name} is picked"
 *    - drive(seconds: number): Drive for specified seconds and log "Driver is driving" (async operation)
 *    - drop(passengerName: string): Drop off a passenger and log "Drop {name}"
 *    - rest(seconds: number): Rest for specified seconds and log "Driver is in offline mode" (async operation)
 *
 * 2. All methods should be chainable (return this or promise of this)
 *
 * 3. Constructor should log "Hello uber driver is online"
 *
 * 4. The drive() and rest() methods should actually wait for the specified time
 *    before proceeding to the next operation in the chain
 *
 * 5. Support both synchronous chaining and asynchronous chaining:
 *    - Initial chain: const x = new Uber().pick(...).drive(...)...
 *    - Continuation: x.pick(...).drive(...)...
 *
 * Example Usage:
 * const driver = new Uber()
 *   .pick("TestUser")
 *   .pick("Rahul")
 *   .drive(2)           // waits 2 seconds
 *   .drop("Rahul")
 *   .drive(4)           // waits 4 seconds
 *   .drop("TestUser")
 *   .rest(10);          // waits 10 seconds
 *
 * driver.pick("Kumar").drive(4).drop("Kumar");
 */

class Uber {
	private queue: Array<() => Promise<unknown>>;
	private isExecuting: boolean = false;

	constructor() {
		this.queue = [];
		this.isExecuting = false;
	}

	private async processQueue() {
		if (this.isExecuting) return;
		this.isExecuting = true;
		for (const cb of this.queue) {
			await cb();
		}
	}

	pick(person: string) {
		this.queue.push(function pick() {
			return new Promise((res) => {
				console.log(`User ${person} is picked`);
				res("OK");
			});
		});
		this.processQueue();
		return this;
	}

	drive(distance: number) {
		this.queue.push(function drive() {
			return new Promise((res) => {
				console.log(`Started driving for`, distance * 1000);
				setTimeout(() => {
					res("OK");
				}, distance * 1000);
			});
		});
		this.processQueue();

		return this;
	}

	drop(person: string) {
		this.queue.push(function drop() {
			return new Promise((res) => {
				console.log(`Drop ${person}`);
				res("OK");
			});
		});

		this.processQueue();

		return this;
	}

	rest(time: number) {
		this.queue.push(function rest() {
			return new Promise((res) => {
				console.log(`Driver is offline for`, time * 1000);
				setTimeout(() => {
					res("OK");
				}, time * 1000);
			});
		});

		this.processQueue();

		return this;
	}
}

const x = new Uber()
	.pick("TestUser")
	.pick("Rahul")
	.drive(2)
	.drop("Rahul")
	.drive(4)
	.drop("TestUser")
	.rest(10)
	.pick("Kumar")
	.drive(4)
	.drop("Kumar");

x.pick("BABBY").drive(4).drop("BABBY").rest(10);

// Output:
// Hello uber driver is online
// User TestUser is picked
// User Rahul is picked
// Driver is driving     <-- wait 2 seconds
// Drop Rahul
// Driver is driving     <-- wait 4 seconds
// Drop TestUser
// Driver is in offline mode <-- wait 10 seconds
