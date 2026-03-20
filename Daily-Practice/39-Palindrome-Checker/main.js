let userInput = prompt("Write and check if Palindrome!");
let isPalindrome = true;
for (var i = 0; i < userInput.length; i++) {
  if ((i === Math.floor(userInput.length / 2))) {
    break;
  }

  if (userInput[i] !== userInput[userInput.length - 1 - i]) {
    isPalindrome = false;
    break;
  }

  if (isPalindrome) {
    console.log("It's a Palindrome!, Nice");
  }else{
    console.log("Not a Palindrome!");
  }
}
