const quotes = [
  "Hayot - bu sayohat, manzil emas.",
  "Bilim - eng qudratli qurol.",
  "Harakat qilmagan odam hech qayerga yetmaydi.",
  "Tabassum - bu eng yaxshi dori.",
  "Kichik qadamlardan boshlang."
];
document.getElementById('quoteBtn').onclick = () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = random;
}
