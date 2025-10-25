class Events {}

// Test cases
const events = new Events();

const newUserNewsSubscription = events.subscribe("new-user", (payload) => {
	console.log(`Sending Q1 News to: ${payload}`);
});

events.publish("new-user", "Jhon");

//output: "Sending Q1 News to: Jhon"

events.subscribe("new-user", (payload) => {
	console.log(`Sending Q2 News to: ${payload}`);
});

events.publish("new-user", "Doe");

//output: "Sending Q1 News to: Doe"
//output: "Sending Q2 News to: Doe"

newUserNewsSubscription.remove(); // Q1 news is removed

events.publish("new-user", "Foo");
//output: "Sending Q2 News to: Foo"

events.publishAll("FooBar");
//output: "Sending Q2 News to: FooBar"

events.subscribeOnce("new-user", (payload) => {
	console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once");
//output: "Sending Q2 News to: Foo Once" - normal event
//output: "I am invoked once Foo Once" - once event

events.publish("new-user", "Foo Twice");
//output: "Sending Q2 News to: Foo Twice" - normal event
// once event should not invoke for second time

events.subscribeOnceAsync("new-user").then((payload) => {
	console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once Async");
//output: "Sending Q2 News to: Foo Once Async"
//output: "I am invoked once Foo Once Async"

export default {};
