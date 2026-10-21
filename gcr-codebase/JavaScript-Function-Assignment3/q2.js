
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, num => num * 2);
const squared = applyOperation(numbers, num => num * num);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
