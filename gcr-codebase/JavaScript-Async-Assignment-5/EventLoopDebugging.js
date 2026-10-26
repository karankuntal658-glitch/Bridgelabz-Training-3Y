
console.log("Script start");

// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Synchronous statements execute first.
// Promise.then() schedules a microtask.
// setTimeout() schedules a macrotask.
// Microtasks run before macrotasks after synchronous execution.
