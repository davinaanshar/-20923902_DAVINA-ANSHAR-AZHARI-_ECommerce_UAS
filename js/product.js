// js/product.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = {
        name: button.dataset.name,
        price: parseInt(button.dataset.price),
        image: button.dataset.image,
      };

      // Ambil keranjang lama
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);

      // Simpan lagi ke localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${product.name} berhasil ditambahkan ke keranjang!`);
    });
  });
});
