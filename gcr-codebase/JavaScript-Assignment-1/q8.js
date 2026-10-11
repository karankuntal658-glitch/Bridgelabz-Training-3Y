
let currentSalary = 30000;
const annualIncrementRate = 10;

const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    // Increase salary by the annual increment percentage.
    currentSalary += currentSalary * annualIncrementRate / 100;

    salaryReport.push({
        Year: year,
        Salary: Math.round(currentSalary)
    });
}

console.table(salaryReport);
