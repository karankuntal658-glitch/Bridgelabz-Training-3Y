
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const student = new Student("Karan", "Computer Science");

student.showName();
student.showBranch();

console.log(student instanceof Student);
console.log(student instanceof Person);
