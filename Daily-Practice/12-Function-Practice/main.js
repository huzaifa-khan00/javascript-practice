var nameFromUser = prompt("Enter your name");

function welcomeUser(userName) {
    var lowerName = userName.toLowerCase();
    var message = "welcome, " + lowerName;
    return message;
}

var result = welcomeUser(nameFromUser);

console.log(result);