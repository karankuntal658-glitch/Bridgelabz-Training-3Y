
let door = true;
let window = true;
let alarm = true;
let owner = true;

// Check security conditions
if (alarm && door && window && owner) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Change a value and check again
window = false;

if (alarm && door && window && owner) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test OR and NOT
console.log(alarm || !door);
