
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 15 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 3 },
    { id: 4, name: "Jeans", category: "Clothing", price: 2000, stock: 10 },
    { id: 5, name: "Table", category: "Furniture", price: 5000, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(product => product.stock < 6);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

function groupByCategory() {
    return products.reduce((groups, product) => {
        let category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, {});
}

console.log("Low Stock Products:", getLowStockProducts());

console.log("Products Sorted By Price:", sortProductsByPrice());

console.log("Total Inventory Value:", calculateTotalInventoryValue());

console.log("Products Grouped By Category:", groupByCategory());
