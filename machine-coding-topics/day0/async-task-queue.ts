/*
  Design and implement an AsyncTaskQueue class that manages the execution of asynchronous tasks with a specified maximum concurrency limit. The queue should execute tasks in the order they are added (FIFO) and ensure that no more than the specified number of tasks run concurrently.

  If a task’s Promise rejects, the rejection should be silently ignored, allowing the queue to continue processing remaining tasks.Design and implement an AsyncTaskQueue class that manages the execution of asynchronous tasks with a specified maximum concurrency limit.

  The queue should execute tasks in the order they are added (FIFO) and ensure that no more than the specified number of tasks run concurrently.

  If a task’s Promise rejects, the rejection should be silently ignored, allowing the queue to continue processing remaining tasks.
*/

class AsyncTaskQueue {
	private CONCURRENCY_LIMIT;
	private activeConcurrentCount;
	private tasksQueue: Array<() => Promise<unknown>>;

	constructor(concurrency: number) {
		this.CONCURRENCY_LIMIT = concurrency;
		this.activeConcurrentCount = 0;
		this.tasksQueue = [];
	}

	queue(task: () => Promise<unknown>) {
		this.tasksQueue.push(task);
		this.processQueue();
	}

	private processQueue() {
		while (
			this.activeConcurrentCount < this.CONCURRENCY_LIMIT &&
			this.tasksQueue.length > 0
		) {
			const task = this.tasksQueue.shift();

			this.activeConcurrentCount++;
			task?.()
				.then(console.log)
				.catch()
				.finally(() => {
					this.activeConcurrentCount--;
					this.processQueue();
				});
		}
	}
}

const queue = new AsyncTaskQueue(2);

// Example async tasks
const task1 = () =>
	new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = () =>
	new Promise((_, reject) => setTimeout(() => reject("Task 2 failed"), 2500));
const task3 = () =>
	new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 200));

// Queue tasks
queue.queue(task1); // Starts immediately
queue.queue(task2); // Starts immediately (concurrency = 2)
queue.queue(task3); // Waits until one of the first two tasks completes
