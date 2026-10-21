
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person's prototype methods
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

const student = new Student("Karan", "Computer Science");

student.showName();
student.showBranch();

console.log(student instanceof Student);
console.log(student instanceof Person);
