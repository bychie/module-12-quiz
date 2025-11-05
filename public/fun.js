// public/fun.js
function greet(name) {
  return `Hello, ${name}!`;
}

// Export for testing
module.exports = { greet };

// Also run it on the webpage
window.addEventListener("DOMContentLoaded", () => {
  const msg = greet("Visitor");
  const el = document.createElement("div");
  el.textContent = msg;
  el.style.color = "#ffb3ba"; // pastel pink
  el.style.textAlign = "center";
  el.style.fontSize = "1.5rem";
  el.style.marginTop = "20px";
  document.body.appendChild(el);
});
