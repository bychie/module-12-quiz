// Ugly UI demo script
document.addEventListener("DOMContentLoaded", function() {
  console.log("Welcome to the Life Action Revival ugly UI mockup!");
  var btn = document.createElement("button");
  btn.textContent = "CLICK ME FOR A ‘MIRACLE’";
  btn.style.padding = "12px 24px";
  btn.style.fontSize = "16px";
  btn.style.backgroundColor = "#FF0000";
  btn.style.color = "#FFFF00";
  btn.style.border = "4px outset #0000FF";
  btn.style.margin = "20px auto";
  btn.style.display = "block";
  btn.onclick = function() {
    alert("A MIRACLE JUST HAPPENED!");
  };
  document.body.appendChild(btn);
});
