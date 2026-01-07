let colors = ["red", "green", "blue", "cyan", "crimson"];

let greeting = prompt("Your Name");

let span = document.getElementsByClassName('greeting')[0];

span.innerText = greeting;

let heading = document.querySelector('h1');

let buttonText = document.createElement('span');

buttonText.innerText = "Button";
buttonText.style.color = "red";

heading.append(", Welcome to the color changer program!\nClick on any "+buttonText+" below to change it's color.");

console.log(heading);