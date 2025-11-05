// public/fun.js
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { greet };

// Only run this part if 'window' exists (i.e., in the browser)
if (typeof window !== "undefined") {
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
}
