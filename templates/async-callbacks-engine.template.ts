/**
Implement an engine that process async callbacks using javascript. Your task is to provide implementation of the class QueueCallbacks to meet all the condition.

You should provide the implementation of the constructor and process methods, Do not change the names of these methods or the number of arguments they receive.

The constructor method should recieve an optional string., The value of the string will be responsible for the order in which callbacks stored in the queue are processes.
The only non-empty value it can recieve in the string LIFO(Last in first out). the default order of proecessing callbacks in the queue will be FIFO (First in first out)

The process method recieve a singhe async function that should be executes by following the algorithim described below:

* If there is currently no async funcitn being executed by the class, the received callback method should be executed immediately.
* If there is currently only one async function currently being executed the callback method should be executed immediatley as well.
* If there are two async function currently being executed the callback method should be put int the queue.
* After on of the currently executed async function is finished
* When there were no argument passed to the contructor the first callback method that was pusehd into the queue should be executed (First in first out).
* When the argument passed to the contructor was LIFO, the last callback in the queu should be executed.
* If there are more than 6 callbacks in the queue discard any extra callbacks
* If there are more than 3 callbacks in the queue, follow FIFO if no argument is passed to constructor
 */

class QueueCallbacks {
	constructor() {}
}

// Input:
const asyncCallbacks = new QueueCallbacks();
asyncCallbacks.process(wait(1));
asyncCallbacks.process(wait(2));
asyncCallbacks.process(wait(6));
asyncCallbacks.process(wait(4));
asyncCallbacks.process(wait(5));
asyncCallbacks.process(wait(6));
asyncCallbacks.process(wait(7));
asyncCallbacks.process(wait(8));
asyncCallbacks.process(wait(9));
asyncCallbacks.process(wait(10));

// Output:
// 1 // this will execute first
// 2 // this will execute second
// 4 // this will execute after 2 seconds
// 5 // all of the remaining will execute after 1 second there after
// 6
// 6
// 7
// 8

// Input:
const asyncCallbacksLIFO = new QueueCallbacks("LIFO");
asyncCallbacksLIFO.process(wait(1));
asyncCallbacksLIFO.process(wait(2));
asyncCallbacksLIFO.process(wait(6));
asyncCallbacksLIFO.process(wait(4));
asyncCallbacksLIFO.process(wait(5));
asyncCallbacksLIFO.process(wait(6));
asyncCallbacksLIFO.process(wait(7));
asyncCallbacksLIFO.process(wait(8));
asyncCallbacksLIFO.process(wait(9));
asyncCallbacksLIFO.process(wait(10));

// Output:
// 1 // this will execute first
// 2 // this will execute second
// 7 // this will execute after 5 seconds
// 6 // then this
// 5 // then this
// 4 // then this
// 6 // then this
// 8 // then this
