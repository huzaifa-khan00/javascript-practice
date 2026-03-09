let dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let rollDice = document.getElementById('roll-dice-btn');
let diceDisplay = document.getElementById('dice-display');
let diceHistory = document.getElementById('dice-history-container');
let historyList = [];

generateRandomDice();
diceHistory.innerHTML = '';

function renderHistory(){
    diceHistory.innerHTML = '';
    let counter = 1;
    for(var i = 0; i < historyList.length; i++){
        diceHistory.innerHTML += `<div class="dice-history">
       <span>Roll: ${counter++}</span><span style="font-size: 60px">${historyList[i]}</span>
       </div>`;
    }
    generateRandomDice();
}

function generateRandomDice(){
   let randomDice = Math.floor(Math.random() * dices.length);
   diceDisplay.innerText = dices[randomDice];
   historyList.push(diceDisplay.innerText);
   console.log(historyList);
};

rollDice.addEventListener("click", renderHistory);