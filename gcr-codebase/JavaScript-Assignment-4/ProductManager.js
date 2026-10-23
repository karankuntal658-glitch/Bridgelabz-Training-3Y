
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `${this.id} ${this.name} ₹${this.price} ${this.category}`;
    }
}

const p1 = new Product(1, "Laptop", 50000, "Electronics");
const p2 = new Product(2, "Mouse", 800, "Accessories");
const p3 = new Product(3, "Phone", 15000, "Electronics");

p1.applyDiscount(10);

const products = [p1, p2, p3];
const result = products.filter(p => p.price > 1000);

for (let i = 0; i < result.length; i++) {
    console.log(result[i].displayDetails());
}
