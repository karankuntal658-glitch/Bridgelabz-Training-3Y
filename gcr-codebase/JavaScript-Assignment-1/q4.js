
const marks = [90, 85, 88, 92, 80];

let totalMarks = 0;
let failedSubject = false;

// Calculate total marks and check for failed subjects.
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];

    if (marks[i] < 35) {
        failedSubject = true;
    }
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

// A failed subject overrides the overall percentage.
if (failedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !failedSubject) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
