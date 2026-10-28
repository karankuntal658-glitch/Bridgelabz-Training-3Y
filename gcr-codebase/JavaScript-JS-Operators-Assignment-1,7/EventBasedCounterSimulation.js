
let count = 0;

// Increase the count
function increment() {
    count++;
    console.log("Count:", count);
}

// Decrease the count
function decrement() {
    count--;
    console.log("Count:", count);
}

// Nested function to show scope
function showCount() {
    function display() {
        console.log("Current Count:", count);
    }

    display();
}

// Simulate clicks
increment();
increment();
decrement();
showCount();
