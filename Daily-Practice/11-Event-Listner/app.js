let colors = [];

let greeting = prompt("Your Name");

let colorRange = prompt("How many Colors");

for(var i=0; i < colorRange; i++){
    colors[i] = prompt("Color " + i+1);
}

console.log(colors);

let span = document.getElementsByClassName('greeting')[0];

span.innerText = greeting;

let heading = document.querySelector('h1');

let buttonText = document.createElement('span');

buttonText.innerText = "Button";
buttonText.style.color = "red";

heading.append(", Welcome to the color changer program!\nClick on any ", buttonText," below to change it's color.");

let button1 = document.getElementsByClassName('button')[0];
let button2 = document.getElementsByClassName('button')[1];
let button3 = document.getElementsByClassName('button')[2];
button1.addEventListener("click", colorChanger);
button2.addEventListener("click", colorChanger);
button3.addEventListener("click", colorChanger);

function colorChanger(){
    let randomColor = Math.floor(Math.random() * colors.length);
    button1.style.backgroundColor = colors[randomColor];
    button2.style.backgroundColor = colors[randomColor];
    button3.style.backgroundColor = colors[randomColor];
};
