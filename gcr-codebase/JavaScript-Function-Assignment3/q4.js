
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Shared method on the prototype
Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

console.log(car1.getDetails === car2.getDetails);
