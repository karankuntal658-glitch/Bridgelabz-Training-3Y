
let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent == true) {
        salary = salary + bonus;
    }

    console.log("Total Salary:", salary);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus:", bonus);
