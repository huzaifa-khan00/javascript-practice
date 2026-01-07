let colors = [];

let greeting = prompt("Your Name");

let colorRange = prompt("How many Colors");

for(var i=0; i < colorRange; i++){
    colors[i] = prompt("Color " + (i+1));
}

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
button1.addEventListener("click", colorChanger1);
button2.addEventListener("click", colorChanger2);
button3.addEventListener("click", colorChanger3);

function colorChanger1(){
    let randomColor = Math.floor(Math.random() * colors.length);
    button1.style.backgroundColor = colors[randomColor];
};



function colorChanger2(){
    let randomColor = Math.floor(Math.random() * colors.length);
    button2.style.backgroundColor = colors[randomColor];
};

function colorChanger3(){
    let randomColor = Math.floor(Math.random() * colors.length);
    button3.style.backgroundColor = colors[randomColor];
};
