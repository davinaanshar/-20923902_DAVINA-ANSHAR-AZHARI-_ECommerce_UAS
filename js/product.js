// js/product.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Prefer dataset (we added it), fallback ke DOM if missing
      let name =
        button.dataset.name ||
        button.closest(".detail-info")?.querySelector("h2")?.textContent ||
        "";
      let price = button.dataset.price
        ? parseInt(button.dataset.price)
        : (() => {
            const p =
              button.closest(".detail-info")?.querySelector(".price")
                ?.textContent || "";
            return parseInt(p.replace(/[^\d]/g, "")) || 0;
          })();
      let image =
        button.dataset.image ||
        button
          .closest(".product-detail")
          ?.querySelector("img")
          ?.getAttribute("src") ||
        "";

      if (!name || !price || !image) {
        alert("Produk gagal ditambahkan. Data tidak lengkap.");
        return;
      }

      const product = { name, price, image };

      try {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("cart updated:", cart);
        alert(`${product.name} berhasil ditambahkan ke keranjang!`);
      } catch (e) {
        console.error("Gagal menyimpan ke localStorage:", e);
        alert("Terjadi kesalahan saat menambahkan ke keranjang.");
      }
    });
  });
});
