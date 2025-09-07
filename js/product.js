// Simpan ke localStorage saat tombol "Beli Sekarang" diklik
document.addEventListener("DOMContentLoaded", () => {
  const buyBtn = document.querySelector(".buy-btn");
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      const productName = document.querySelector(".detail-info h2").textContent;
      const productPrice = document.querySelector(".price").textContent;
      const productImg = document.querySelector("main img").src;

      // Ambil keranjang dari localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Tambah produk baru
      cart.push({
        name: productName,
        price: productPrice,
        img: productImg,
      });

      // Simpan kembali ke localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${productName} berhasil ditambahkan ke keranjang!`);
    });
  }
});
