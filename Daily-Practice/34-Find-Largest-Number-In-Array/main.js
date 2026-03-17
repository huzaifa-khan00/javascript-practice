let array = [];

for(var i = 0; i < 5; i++){
    let userInput = Number(prompt("Number"));
    array[i] = userInput;
}

let largestNum = array[0];

for(var j = 0; j < array.length; j++){
    if(largestNum < array[j]){
        largestNum = array[j];
    }
}

console.log(largestNum+ " Is the largest Number");