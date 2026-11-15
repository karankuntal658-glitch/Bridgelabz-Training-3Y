
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    let newPrice = this.price - discount;

    return newPrice;
};

let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 5000);

console.log(product1.name, product1.applyDiscount(10));
console.log(product2.name, product2.applyDiscount(20));
console.log(product3.name, product3.applyDiscount(15));
