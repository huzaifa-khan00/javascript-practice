let colors = ["red", "green", "blue", "rgba(255, 0, 200, 1)"];

let btn = document.getElementById("btn");

let color = document.getElementsByClassName("color")[0];

let bgColor = document.getElementsByTagName("main")[0];

btn.addEventListener("click", function () {
  let randomColor = Math.floor(Math.random() * colors.length);
  bgColor.style.backgroundColor = colors[randomColor];
  color.innerHTML = colors[randomColor];
});
