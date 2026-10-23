
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Rahul", "Sales", 35000),
    new Employee(4, "Neha", "IT", 40000),
    new Employee(5, "Vikas", "Finance", 32000)
];

employees[0].applyBonus(10);

for (let i = 0; i < employees.length; i++) {
    console.log(
        employees[i].name + " Annual Salary: ₹" +
        employees[i].getAnnualSalary()
    );
}

const totalPayout = employees.reduce(function(total, employee) {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout: ₹" + totalPayout);
