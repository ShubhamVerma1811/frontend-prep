// The problem statement reads as Implement a function in JavaScript that retries promises N number of times with a delay between each call.

function retry() {}

// Input:
retry(asyncFn, (retries = 3), (delay = 50), (finalError = "Failed"));

// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50ms -> failed
// ... attempt 3 -> retry after 50ms -> failed
// ... Failed.

export default {};
