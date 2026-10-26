
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const products = await response.json();

        for (let i = 0; i < products.length; i++) {
            console.log("Product:", products[i].title);
            console.log("Price: $" + products[i].price);
            console.log("Image:", products[i].image);
            console.log("---------------------------");
        }
    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

fetchProducts();
