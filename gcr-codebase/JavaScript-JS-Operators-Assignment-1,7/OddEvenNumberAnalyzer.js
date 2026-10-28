
let numbers = [];
let result = [];

// Store numbers from 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Check each number
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % 3 == 0 && num % 5 == 0) {
        result.push(num + " - FizzBuzz");
    } else if (num % 2 == 0) {
        result.push(num + " - Even");
    } else {
        result.push(num + " - Odd");
    }
}

console.log(result);
