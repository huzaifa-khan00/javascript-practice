let colors = ["#00F0FF", "#EC00FC", "#00CF35", "#007FFF", "#FF00FF",
  "#00BFFF", "#00FF7F", "#EE82EE", "#1E90FF", "#40E0D0",
  "#4B0082", "#4169E1", "#16E2F5", "#50C878", "#FF69B4",
  "#15317E", "#00FF00", "#0047AB", "#00FA9A", "#800080",
  "#007BA7", "#7FFF00", "#2554C7", "#DA70D6", "#BF00FF",
  "#008080", "#7FFFD4", "#2B65EC", "#191970", "#8B008B"];
let boxesContainer = document.getElementById('box-container');
let headerBox = document.getElementById('header-box');

let boxAmount = Number(prompt("How many boxes"));

  for (var i = 0; i <= boxAmount; i++){
      var boxes = document.createElement('div');
      boxes.className = 'game-box';
      var randomColor = Math.floor(Math.random() * colors.length);
      boxesContainer.appendChild(boxes);
      boxes.style.backgroundColor = colors[randomColor];
      headerBox.style.backgroundColor = colors[randomColor];
  }

  boxesContainer.addEventListener("click", colorPicker);

  function colorPicker(boxes){
    console.log(boxes.target.style.backgroundColor);
  }

