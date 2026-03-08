let dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let rollDice = document.getElementById('roll-dice-btn');

function generateRandomDice(){
    console.log(dices[0]);
};

rollDice.addEventListener("click", generateRandomDice);