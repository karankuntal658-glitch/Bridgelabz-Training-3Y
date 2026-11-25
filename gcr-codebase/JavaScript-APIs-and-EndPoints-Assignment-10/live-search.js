$(document).ready(function () {

    $("#search").on("keyup", function () {

        let searchText = $(this).val();

        $("#loading").show();
        $("#products").empty();

        $.ajax({
            url: "http://localhost:3001/products",
            method: "GET",
            data: { q: searchText },

            success: function (products) {

                $("#loading").hide();

                if (products.length === 0) {
                    $("#products").html("<p>No products found.</p>");
                    return;
                }

                products.forEach(function (product) {

                    $("#products").append(`
                        <article>
                            <img src="${product.image}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p>Price: ₹${product.price}</p>
                        </article>
                    `);

                });
            },

            error: function () {
                $("#loading").hide();
                $("#products").html("<p>Error loading products.</p>");
            }
        });

    });

});