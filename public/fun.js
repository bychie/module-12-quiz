// public/fun.js
function greet(name) {
  return `Hello, ${name}!`;
}

// Export for Jest testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}

// Run on webpage load
window.addEventListener("DOMContentLoaded", () => {
  const msg = greet("Visitor");

  // Create a pastel gradient background
  document.body.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
  document.body.style.fontFamily = "'Poppins', sans-serif";

  // Create the greeting text
  const el = document.createElement("div");
  el.textContent = msg;
  el.style.color = "#fff";
  el.style.textAlign = "center";
  el.style.fontSize = "2rem";
  el.style.marginTop = "200px";
  el.style.fontWeight = "600";
  el.style.textShadow = "2px 2px 6px rgba(0,0,0,0.2)";
  el.style.transition = "transform 0.6s ease-in-out";
  document.body.appendChild(el);

  // Add floating animation
  let direction = 1;
  setInterval(() => {
    el.style.transform = `translateY(${direction * 10}px) scale(1.05)`;
    direction *= -1;
  }, 1000);

  // Add pastel glow
  const glow = document.createElement("div");
  glow.style.position = "absolute";
  glow.style.top = "50%";
  glow.style.left = "50%";
  glow.style.width = "200px";
  glow.style.height = "200px";
  glow.style.borderRadius = "50%";
  glow.style.transform = "translate(-50%, -50%)";
  glow.style.background = "radial-gradient(circle, #ffe6fa, #ffb3ba)";
  glow.style.filter = "blur(60px)";
  document.body.appendChild(glow);
});
