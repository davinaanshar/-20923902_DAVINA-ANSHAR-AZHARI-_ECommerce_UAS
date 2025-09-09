// js/cart.js
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  const clearBtn = document.getElementById("clear-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("cart loaded:", cart);

  function render() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    if (!cart.length) {
      cartItemsContainer.innerHTML = "<p>Keranjang masih kosong.</p>";
      totalElement.textContent = "Total: Rp 0";
      return;
    }

    cart.forEach((it, idx) => {
      total += it.price;
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${it.image}" alt="${it.name}">
        <div style="flex:1">
          <h3>${it.name}</h3>
          <p class="price">Rp ${it.price.toLocaleString()}</p>
        </div>
        <button data-index="${idx}" class="remove-btn">Hapus</button>
      `;
      cartItemsContainer.appendChild(div);
    });

    totalElement.textContent = "Total: Rp " + total.toLocaleString();

    // attach remove handlers
    document.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.index);
        cart.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        render();
      });
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (!confirm("Kosongkan keranjang?")) return;
      cart = [];
      localStorage.removeItem("cart");
      render();
    });
  }

  render();
});
