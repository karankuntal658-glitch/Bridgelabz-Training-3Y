function loadDashboard() {

    let usersAPI = fetch("http://localhost:3004/users");
    let ordersAPI = fetch("http://localhost:3004/orders");
    let productsAPI = fetch("http://localhost:3004/products");

    // Fetch all three APIs together
    Promise.all([usersAPI, ordersAPI, productsAPI])

        .then(function (responses) {

            responses.forEach(function (response) {

                if (!response.ok) {
                    throw new Error("API request failed");
                }

            });

            return Promise.all(
                responses.map(function (response) {
                    return response.json();
                })
            );

        })

        .then(function (data) {

            let users = data[0];
            let orders = data[1];
            let products = data[2];

            document.getElementById("users").innerHTML = "";
            document.getElementById("orders").innerHTML = "";
            document.getElementById("products").innerHTML = "";

            users.forEach(function (user) {

                document.getElementById("users").innerHTML += `
                    <article>
                        <h3>${user.name}</h3>
                        <p>${user.email}</p>
                    </article>
                `;

            });

            orders.forEach(function (order) {

                document.getElementById("orders").innerHTML += `
                    <article>
                        <h3>${order.product}</h3>
                        <p>Amount: ₹${order.amount}</p>
                    </article>
                `;

            });

            products.forEach(function (product) {

                document.getElementById("products").innerHTML += `
                    <article>
                        <h3>${product.name}</h3>
                        <p>Price: ₹${product.price}</p>
                    </article>
                `;

            });

        })

        .catch(function () {

            document.getElementById("warning").textContent =
                "Warning: One or more APIs failed to load.";

            document.getElementById("users").textContent =
                "Users unavailable";

            document.getElementById("orders").textContent =
                "Orders unavailable";

            document.getElementById("products").textContent =
                "Products unavailable";

        });

}

loadDashboard();