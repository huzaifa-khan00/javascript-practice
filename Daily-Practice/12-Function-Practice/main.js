// var nameFromUser = prompt("Enter your name");

// function welcomeUser(userName) {
//     var lowerName = userName.toLowerCase();
//     var message = "welcome, " + lowerName;
//     return message;
// }

// var result = welcomeUser(nameFromUser);

// console.log(result);

function checkString(text) {
    var lowerText = text.toLowerCase();

    if (lowerText.length < 5) {
        return "too short";
    } else {
        return "accepted";
    }
}

console.log(checkString("Ali"));
console.log(checkString("Ahmed"));

