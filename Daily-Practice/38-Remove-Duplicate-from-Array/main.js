let userArray = [];
let uniqueArray = [];
let inputRange = Number(prompt("How many value you want"));

// Take values from user in array
for (var i = 0; i < inputRange; i++) {
  let userInput = prompt(`Letter ${i + 1}`);
  userArray[i] = userInput;
}

// Check Duplicates and remove them if not, push them into unique array
for (var j = 0; j < userArray.length; j++) {
  let isDuplicate = false;
    for(var k = 0; k < uniqueArray.length; k++){
      if(userArray[j] === uniqueArray[k]){
        isDuplicate = true;
        break;
      }
    }
    
    if(!isDuplicate){
      uniqueArray.push(userArray[j]);
    }
}

// Print unique array
console.log(uniqueArray);