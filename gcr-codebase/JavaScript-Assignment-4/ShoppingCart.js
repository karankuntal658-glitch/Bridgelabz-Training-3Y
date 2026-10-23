
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(function(total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(coupon) {
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(coupon);

        if (!match) {
            console.log("Invalid coupon!");
            return;
        }

        const discount = Number(match[2]);

        if (discount < 1 || discount > 99) {
            console.log("Discount must be between 1% and 99%.");
            return;
        }

        const total = this.getTotal();
        const finalTotal = total - total * discount / 100;

        console.log("Original Total: ₹" + total);
        console.log("Discount: " + discount + "%");
        console.log("Final Total: ₹" + finalTotal.toFixed(2));
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Cart Total: ₹" + cart.getTotal());

cart.applyCoupon("SAVE20");
