let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hex_btn = document.getElementById("hex-btn");

let hex_color = document.getElementsByClassName("hex-color")[0];

hex_btn.addEventListener("click", function () {
    
  let hexColor = "#";

  for (var i = 0; i < 6; i++) {
    hexColor += hex[randomColor()];
  }

  document.getElementsByTagName("main")[0].style.backgroundColor = hexColor;
  hex_color.innerHTML = hexColor;
});

function randomColor() {
  let randomColor = Math.floor(Math.random() * hex.length);
  return randomColor;
}
