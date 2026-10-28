
let x = 16.75;

let round = Math.round(x);
let root = Math.sqrt(x);
let power = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10;

// Display the results
console.log(`
Number: ${x}
Rounded Value: ${round}
Square Root: ${root.toFixed(2)}
Power: ${power.toFixed(2)}
Random Number: ${random}
`);
