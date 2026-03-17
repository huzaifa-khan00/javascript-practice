let vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
let userInput = prompt("You type text, I count Vowels!. Sounds amazing right?");

for (var i = 0; i < userInput.length; i++) {

    if (userInput[i] === "a") {
      vowelCount++;
    }
    if (userInput[i] === "e") {
      vowelCount++;
    }
    if (userInput[i] === "i") {
      vowelCount++;
    }
    if (userInput[i] === "o") {
      vowelCount++;
    }
    if (userInput[i] === "u") {
      vowelCount++;
    }
  }

console.log(`There are, ${vowelCount}, Vowels in ${userInput}`);
