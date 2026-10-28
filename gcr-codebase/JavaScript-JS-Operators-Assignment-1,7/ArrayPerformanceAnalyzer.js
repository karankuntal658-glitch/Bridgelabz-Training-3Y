
let marks = [];

// Generate 8 random marks between 30 and 100
for (let i = 0; i < 8; i++) {
    marks.push(Math.floor(Math.random() * 71) + 30);
}

// Find highest and lowest marks
let high = Math.max(...marks);
let low = Math.min(...marks);

// Calculate average
let total = marks.reduce((sum, mark) => sum + mark, 0);
let avg = total / marks.length;

// Find students who passed
let pass = marks.filter(mark => mark >= 50);

// Use map to display marks
let result = marks.map(mark => "Marks: " + mark);

console.log(result);
console.log("Highest Marks:", high);
console.log("Lowest Marks:", low);
console.log("Average Marks:", avg.toFixed(2));
console.log("Students Passed:", pass.length);
