let userInput = prompt("Write your review");
// The cancelation of dialog is checked before the userInput access the .length property.
// It will through an error if not validated, Because when the user cancels the program/Dialog,
// It will return the value of null, since the userInput is connected to "userInput.length" in the else statement,
// And that the null doesn't contain .length property.

if (userInput == null) {
  console.log("User Canceled the Program!");
}

else if(!userInput || userInput === "0"){
console.log("Invalid Input!");
}
// .trim() Method is used to validate the empty whitespace that is truthy value (Doesn't work with !userInput).
else if (userInput.trim() === "") {
  console.log("Cannot contain only spaces & can't be empty");
} else if (userInput.length > 0 && userInput.length < 200) {

  let reviewLength = userInput.length;

  let maxLength = 200;

  let userReview = userInput;

  // The order of the subtraction is changed here, due to the negative value being printed, because, I was subtracting the
  // Big number (maxLength) from the small number (ReviewLength), while I had to subtract the Typed characters from the Max Limit.
  let charLeft = maxLength - reviewLength;

  console.log(userReview);
  // Note: If we concatenate the string using "+", we get the number of characters in string rather than number.
  // But!, when separate with comma "," then we get the result for the characters left in Number (Must be a number),
  //keep in mind
  console.log("You've typed", reviewLength, "Characters,", charLeft, "Characters Remaining.");
};
