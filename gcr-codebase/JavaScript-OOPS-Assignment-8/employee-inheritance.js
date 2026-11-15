
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing regular work");
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the team");
    }
}

let employee1 = new Employee("Rahul", "IT");
let manager1 = new Manager("Aman", "HR");

employee1.work();
manager1.work();
