let colors = [
  "Red",
  "Blue",
  "Yellow",
  "Green",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Lime",
  "Maroon",
  "Navy",
  "Olive",
  "Teal",
  "Silver",
  "Gold",
  "Indigo",
  "Violet",
  "Turquoise",
  "Beige",
  "Amber",
  "Azure",
  "Coral",
  "Crimson",
  "Ivory",
  "Khaki",
  "Lavender",
  "Mint",
  "Peach",
  "Plum",
  "Salmon",
  "Tan",
  "Wheat",
  "Scarlet",
  "Orchid",
  "Sienna",
  "Charcoal",
  "Emerald",
  "Ruby",
  "Sapphire",
  "Bronze",
  "Mustard",
  "Mauve",
  "Copper",
  "Lilac",
  "Periwinkle",
];

let probColors = [
  "White",
  "Ivory",
  "Azure",
  "Beige",
  "Mint",
  "Wheat",
  "Yellow",
  "Silver",
  "Peach",
  "Lavender",
  "Cyan",
  "Gold",
  "Pink",
  "Gray",
  "Lime",
  "Turquoise",
  "Amber",
  "Coral",
  "Khaki",
  "Salmon",
  "Tan",
  "Orchid",
  "Mauve",
  "Lilac",
  "Periwinkle",
];

let btn = document.getElementById("btn");

let color = document.getElementsByClassName("color")[0];

let bgColor = document.getElementsByTagName("main")[0];

btn.addEventListener("click", function () {

  document.getElementsByClassName("color")[0].style.color = "white";

  let randomColor = Math.floor(Math.random() * colors.length);

  bgColor.style.backgroundColor = colors[randomColor];

  // let problemColor = '"' + color.innerHTML + '"';

  // for (var i = 0; i < probColors.length; i++) {
  //   if (colors[randomColor] === probColors[i]) {
  //     document.getElementsByTagName("h2")[0].style.color = "black";
  //     break;
  //   }
  // }

  // console.log(problemColor);

  document.getElementsByClassName('color')[0].style.color ="rgb(0, 255, 8)";

  color.innerHTML = colors[randomColor];
});
