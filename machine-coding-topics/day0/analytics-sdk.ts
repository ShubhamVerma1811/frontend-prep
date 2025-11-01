/*
  This is a Swiggy frontend interview question.

  Implement an analytics SDK that exposes log events, it takes in events and queues them, and then starts sending the events. The SDK should adhere the following properties.

  •Send each event after a delay of 1 second and this logging fails every n % 5 times.
  •Send the next event only after the previous one resolves.
  •When the failure occurs attempt a retry.'
 */

const RETRY_LIMIT = 3;

class SDK {
	private queue: Array<{
		event: string;
		count: number;
	}>;

	constructor() {
		this.queue = [];
	}

	logEvent(event: string) {
		this.queue.push({
			event,
			count: RETRY_LIMIT,
		});
	}

	send() {
		this.processQueue();
	}

	private processQueue() {
		if (!this.queue.length) return;
		const event = this.queue.shift();
		if (!event) return;

		this.wait(1000)
			.then(() => {
				console.log(`Analytics sent ${event.event}`);
			})
			.catch(() => {
				if (event.count < 0) {
					console.log("Exhaused retry limit for ", event);
					return;
				}
				console.log("Failed to send%s\nRetrying at the end", event.event);
				event.count--;
				this.queue.push(event);
			})
			.finally(() => {
				this.processQueue();
			});
	}

	private wait(i: number) {
		return new Promise((res, rej) =>
			setTimeout(() => (Math.random() < 0.43 ? rej() : res("OK")), i)
		);
	}
}

// INPUT
const sdk = new SDK();

Array.from({ length: 10 }, (_, i) => sdk.logEvent(`event ${i + 1}`));

sdk.send();

// Output:
// "Analytics sent event 1"
// "Analytics sent event 2"
// "Analytics sent event 3"
// "Analytics sent event 4"
// "-----------------------"
// "Failed to send event 5"
// "Retrying sending event 5"
// "-----------------------"
// "Analytics sent event 5"
// "Analytics sent event 6"
// "Analytics sent event 7"
// "Analytics sent event 8"
// "-----------------------"
// "Failed to send event 9"
// "Retrying sending event 9"
// "-----------------------"
// "Analytics sent event 9"
// "Analytics sent event 10"
