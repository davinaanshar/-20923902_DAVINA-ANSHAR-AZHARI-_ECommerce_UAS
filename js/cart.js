// js/cart.js

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  // Ambil data keranjang dari localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;

      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">Rp ${item.price.toLocaleString()}</p>
        <button onclick="removeItem(${index})">Hapus</button>
      `;
      cartItemsContainer.appendChild(div);
    });

    totalPriceElement.textContent = "Rp " + total.toLocaleString();
  }

  // Buat fungsi remove global
  window.removeItem = function (index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  renderCart();
});
