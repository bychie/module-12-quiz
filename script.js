// script.js

window.addEventListener("load", () => {
  // 🌸 Pastel color palette
  const pastelColors = [
    "#f9c5d1", // soft pink
    "#f6eac2", // light cream
    "#c5f9d7", // mint green
    "#c5d8f9", // baby blue
    "#e4c5f9", // lavender
  ];

  let i = 0;

  // 🌈 Smooth pastel background transitions
  setInterval(() => {
    document.body.style.transition = "background-color 2s ease-in-out";
    document.body.style.backgroundColor = pastelColors[i];
    i = (i + 1) % pastelColors.length;
  }, 2500); // every 2.5 seconds

  // ✨ Add aesthetic message element
  const msg = document.createElement("div");
  msg.textContent = "✨ Welcome to the Ugly UI Revival ✨";
  msg.style.textAlign = "center";
  msg.style.fontFamily = "'Poppins', sans-serif";
  msg.style.fontSize = "1.8em";
  msg.style.marginTop = "40px";
  msg.style.color = "#555";
  msg.style.textShadow = "1px 1px 3px rgba(0,0,0,0.1)";
  msg.style.transition = "opacity 1s ease-in-out";
  msg.style.opacity = 0;

  document.body.appendChild(msg);

  // 🌷 Fade in effect for the text
  setTimeout(() => {
    msg.style.opacity = 1;
  }, 1000);
});
