window.addEventListener("load", () => {
  const btn = document.getElementById("magicBtn");
  const msg = document.getElementById("cuteMsg");

  if (!btn || !msg) return; // prevent errors if not found

  btn.addEventListener("click", () => {
    msg.textContent = "💫 You just made the world a little cuter! 💕";
    msg.style.opacity = 1;
    msg.style.transform = "scale(1.1)";
    msg.style.color = "#ff8fab";

    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.textContent = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "0px";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      heart.style.opacity = 0.7;
      heart.style.transition = "transform 4s linear, opacity 4s";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = 0;
      }, 100);

      setTimeout(() => heart.remove(), 4000);
    }
  });
});
