/* ====================================================
   KeyNova — script.js
   Vanilla JS: smooth scroll, menu mobile, order WhatsApp
   ==================================================== */

// Nomor WhatsApp (placeholder) — ganti dengan nomor asli (format: 62xxx)
const WHATSAPP_NUMBER = "6289516956230";

/**
 * Fungsi reusable untuk membuka WhatsApp dengan pesan tertentu.
 * Membuka di tab baru menggunakan window.open.
 * @param {string} message - Isi pesan yang akan dikirim.
 */
function orderWhatsApp(message) {
  const text = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank");
}

/* ---------- Hubungkan semua tombol ber-atribut data-wa ---------- */
document.querySelectorAll("[data-wa]").forEach((btn) => {
  btn.addEventListener("click", () => {
    orderWhatsApp(btn.getAttribute("data-wa"));
  });
});

/* ---------- Smooth scroll untuk link menu ---------- */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      // Tutup menu mobile setelah klik
      navLinks.classList.remove("open");
    }
  });
});

/* ---------- Toggle menu mobile ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* ---------- Efek navbar saat di-scroll ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});