let colors = ["red", "green", "blue", "rgba(255, 0, 200, 1)"];

let btn = document.getElementById('btn');

let color = document.getElementsByClassName('color');

let randomColor = Math.floor(Math.random() * colors.length);

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[randomColor];

})