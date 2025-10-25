class Move {}

// 1st observer
const moveHandler = function moveHandler(item) {
	console.log(`fired: ${item}`);
};

// 2nd observer
const moveHandler2 = function moveHandler2(item) {
	console.log(`Moved: ${item}`);
};

const move = new Move();

// subscribe 1st observer
move.subscribe(moveHandler);
move.fire("event #1");

// unsubscribe 1st observer
move.unsubscribe(moveHandler);
move.fire("event #2");

// subscribe 1st & 2nd observer
move.subscribe(moveHandler);
move.subscribe(moveHandler2);
move.fire("event #3");

// Output:
// ("fired: event #1");

// ("fired: event #3");

// ("Moved: event #3");

export default {};
