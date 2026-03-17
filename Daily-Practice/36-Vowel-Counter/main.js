let vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
let userInput = prompt("You type text, I count Vowels!. Sounds amazing right?");

for (var i = 0; i < userInput.length; i++) {
        for(var j = 0; j < vowels.length; j++){
            if(userInput[i] === vowels[j]){
                vowelCount++
            }
        }
  }

console.log(`There are ${vowelCount} Vowels in ${userInput}`);
