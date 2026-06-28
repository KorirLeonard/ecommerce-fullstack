const cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");

let total = 0;

cart.forEach((product) => {
  total += Number(product.price);

  container.innerHTML += `
        <div class="card">

            <img src="${product.image}" class="product-image">

            <h3>${product.name}</h3>

            <p>Ksh ${product.price}</p>

        </div>
    `;
});

document.getElementById("total").textContent = `Total: Ksh ${total}`;
