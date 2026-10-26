
console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

console.log("Synchronous log");

console.log("End");

// Synchronous code runs first.
// After the synchronous code finishes, JavaScript processes
// the microtask queue before the macrotask queue.
// Therefore, the Promise callback runs before setTimeout.
