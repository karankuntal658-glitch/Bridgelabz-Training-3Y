
const expenses = [5000, 2000, 10000, 1500, 1000];

let totalExpense = 0;

// Add all five categories of expenses.
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

const averageExpense = totalExpense / expenses.length;

// Add 10% tax to the total expense.
const taxRate = 10;
const taxAmount = totalExpense * taxRate / 100;
totalExpense += taxAmount;

console.log(`Total Expenses Before Tax: ₹${(totalExpense - taxAmount).toFixed(2)}`);
console.log(`Average Monthly Expense: ₹${((totalExpense - taxAmount) / expenses.length).toFixed(2)}`);
console.log(`Tax Amount: ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${totalExpense.toFixed(2)}`);
