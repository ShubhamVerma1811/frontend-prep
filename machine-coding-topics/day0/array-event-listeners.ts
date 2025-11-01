// Extend the arrays in Javascript such that an event gets dispatched whenever an item is added or removed.

type Callback<T> = (eventName: string, items: T, array: T[]) => void;

class ArrayWithListeners<T> extends Array<T> {
	private events: Map<string, Array<Callback<T>>>;

	constructor() {
		super();
		this.events = new Map();
	}

	addListener(eventName: string, cb: Callback<T>) {
		if (!this.events.has(eventName)) this.events.set(eventName, []);
		this.events.get(eventName)?.push(cb);

		return () => this.removeListener(eventName, cb);
	}

	removeListener(eventName: string, cb: Callback<T>) {
		const x = this.events.get(eventName);
		if (!x) return;
		this.events.set(
			eventName,
			x.filter((i: Callback<T>) => i !== cb)
		);
	}

	pushWithEvent(eventName: string, data: T) {
		this.push(data);
		this.update(eventName, data);
	}

	popWithEvent(eventName: string) {
		const data = this.pop();
		if (!data) return;
		this.update(eventName, data);
	}

	private update(eventName: string, data: T) {
		const cbs = this.events.get(eventName);
		if (!cbs) return;
		for (const cb of cbs) cb(eventName, data, this);
	}
}

const arr = new ArrayWithListeners<number>();

const add: Callback<number> = function add(eventName, items, array) {
	console.log(
		`items were added with name ${eventName} and array ${array}`,
		items
	);
};

const listener = arr.addListener("add", add);

const remove: Callback<number> = function remove(eventName, item, array) {
	console.log(item, ` was removed with event ${eventName} and array ${array}`);
};

arr.addListener("remove", remove);

// arr.removeListener('remove', remove);

arr.pushWithEvent("add", 4);
arr.pushWithEvent("add", 3);
// listener();
arr.pushWithEvent("add", 5);
arr.popWithEvent("remove");
