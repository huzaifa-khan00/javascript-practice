let userString = prompt("Type your string to reverse!");
let reversedString = '';
for(var i = 1; i <= userString.length; i++){
    reversedString += userString[userString.length-i];
}

console.log("Reversed String is: " + reversedString);