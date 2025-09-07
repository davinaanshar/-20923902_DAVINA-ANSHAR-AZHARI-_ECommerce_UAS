// Tampilkan isi keranjang di cart.html
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Keranjang masih kosong.</p>";
  } else {
    cart.forEach((item, index) => {
      // Ambil angka harga (buang Rp dan titik)
      let priceNum = parseInt(item.price.replace(/\D/g, ""));
      total += priceNum;

      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="cart-img">
        <div>
          <h4>${item.name}</h4>
          <p>${item.price}</p>
        </div>
        <button class="remove-btn" data-index="${index}">Hapus</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });
  }

  cartTotal.textContent = `Total: Rp ${total.toLocaleString("id-ID")}`;

  // Hapus item dari keranjang
  const removeBtns = document.querySelectorAll(".remove-btn");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });

  // Tombol checkout
  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
    } else {
      alert("Terima kasih, pesanan Anda sedang diproses!");
      localStorage.removeItem("cart"); // kosongkan keranjang
      location.reload();
    }
  });
});
