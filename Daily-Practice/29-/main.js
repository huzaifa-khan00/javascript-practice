let dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let rollDice = document.getElementById('roll-dice-btn');
let diceDisplay = document.getElementById('dice-display');
let diceHistory = document.getElementById('dice-history-container');
let counter = 0;

function generateRandomDice(){
   let randomDice = Math.floor(Math.random() * dices.length);
   diceDisplay.innerText = dices[randomDice];
   counter++
   diceHistory.innerHTML += `<div class="dice-history">
   <span>Roll: ${counter}</span><span>${diceDisplay.innerText}</span>
   </div>`;
   console.log(diceHistory.innerHTML);
};

rollDice.addEventListener("click", generateRandomDice);