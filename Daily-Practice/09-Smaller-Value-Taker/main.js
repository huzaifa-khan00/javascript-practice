var range = prompt("How many values in an Array");

var userInput;

var arr = [];

for(var i = 1; i <= range; i++){
    userInput = prompt("Value " + i);
    userInput = Number(userInput);
    arr.push(userInput);
}

var smallest = arr[0];

for(var j=0; j < arr.length; j++){
    if(smallest > arr[j]){
        smallest = arr[j]
    }
}

console.log(smallest);