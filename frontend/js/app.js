const API = "http://localhost:4000/products";
let cart = [];
let allProducts = [];

function addToCart(id) {
  const product = allProducts.find((p) => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart-count").textContent = cart.length;

  alert(`${product.name} added to cart!`);
}
// Get all products
async function getProducts() {
  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    allProducts = products; // Store all products
    displayProducts(products);
    searchProducts(); // Call searchProducts after fetching products

    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach((product) => {
      container.innerHTML += `
               <div class="card">

    <img
        src="${product.image}"
        alt="${product.name}"
        class="product-image"
    >

    <h3>${product.name}</h3>

    <p class="price">
        Ksh ${product.price}
    </p>
    <button onclick="addToCart(${product.id})">
    🛒 Add to Cart
</button>

    <button onclick="editProduct(${product.id}, '${product.name}', ${product.price})">
        ✏ Edit
    </button>

    <button onclick="deleteProduct(${product.id})">
        🗑 Delete
    </button>

</div>
            `;
    });
  } catch (error) {
    console.error(error);
  }
}

function filterProducts(category) {
  if (category === "All") {
    displayProducts(allProducts);
    return;
  }

  const filtered = allProducts.filter(
    (product) => product.category === category,
  );

  displayProducts(filtered);
}

function searchProducts() {
  const keyword = document.getElementById("search").value.toLowerCase();

  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(keyword),
  );

  displayProducts(filtered);
}

function displayProducts(products) {
  const container = document.getElementById("products");

  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `
            <div class="card">

                <img src="${product.image}" class="product-image">

                <h3>${product.name}</h3>

                <p class="price">
                    Ksh ${product.price}
                </p>

                <button onclick="addToCart(${product.id})">
                    🛒 Add to Cart
                </button>

                <button onclick="editProduct(${product.id}, '${product.name}', ${product.price})">
                    ✏ Edit
                </button>

                <button onclick="deleteProduct(${product.id})">
                    🗑 Delete
                </button>

            </div>
        `;
  });
}

// Add product
async function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if (!name || !price) {
    alert("Please fill all fields");
    return;
  }

  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ProductName: name,
      Price: price,
    }),
  });

  const data = await response.json();

  alert(data.message);

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";

  getProducts();
}

// Edit product
async function editProduct(id, currentName, currentPrice) {
  const name = prompt("Enter new product name:", currentName);

  if (name === null) return;

  const price = prompt("Enter new price:", currentPrice);

  if (price === null) return;

  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
    }),
  });

  const data = await response.json();

  alert(data.message);

  getProducts();
}

// Delete product
async function deleteProduct(id) {
  if (!confirm("Delete this product?")) return;

  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  alert(data.message);

  getProducts();
}

// Load products when page opens
getProducts();
