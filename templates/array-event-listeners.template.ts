// Extend the arrays in Javascript such that an event gets dispatched whenever an item is added or removed.

class ArrayWithListeners {
	constructor() {}

	addListener() {}

	removeListener() {}

	pushWithEvent() {}

	popWithEvent() {}
}

const arr = new ArrayWithListeners();

function add(eventName, items, array) {
	console.log(
		`items were added with name ${eventName} and array ${array}`,
		items
	);
}

const _lst = arr.addListener("add", add);

function remove(eventName, item, array) {
	console.log(item, ` was removed with event ${eventName} and array ${array}`);
}

arr.addListener("remove", remove);

arr.removeListener("remove", remove);
// lst.removeListener();

arr.pushWithEvent("add", 4);
arr.pushWithEvent("add", 3);
arr.pushWithEvent("add", 5);
arr.popWithEvent("remove");

export default {};
