let dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let rollDice = document.getElementById("roll-dice-btn");
let diceDisplay = document.getElementById("dice-display");
let diceHistoryContainer = document.getElementById("dice-history-container");
let modalWindow = document.getElementById("modal-container");
let historyList = [];
let html;
let currentDice;

generateRandomDice();

function generateRandomDice() {
  let randomDice = Math.floor(Math.random() * dices.length);
  currentDice = dices[randomDice];
  diceDisplay.innerText = currentDice;
  updateHistory(currentDice);
}

function updateHistory(currentDice) {
  historyList.push(currentDice);
}

function renderHistory() {
  if (historyList.length >= 11) {
    document.getElementById('text').innerText = "History Limit Reached!";
    modalWindow.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    return;
  }

  html = "";
  let counter = 1;
  for (var i = 0; i < historyList.length; i++) {
    html += `<div class="dice-history">
       <span>Roll: ${counter++}</span><span style="font-size: 60px">${historyList[i]}</span>
       </div>`;
  }
  diceHistoryContainer.innerHTML = html;
  generateRandomDice();
}

function closeModal(){
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'scroll';
}

rollDice.addEventListener("click", renderHistory);
