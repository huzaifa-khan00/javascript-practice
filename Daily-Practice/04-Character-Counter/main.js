let userInput = prompt("Write your review");

let reviewLength = userInput.length;

let maxLength = 200;

let userReview = userInput;

// Note: If we concatenate the string using "+", we get the number of characters in string rather than number.
// But!, when separate with comma "," then we get the result for the characters left in Number (Must be a number),
//keep in mind

if(!userInput){
    console.log("Invalid Input!");
}
else if(userInput.trim() === ""){
    console.log("Cannot contain only spaces & can't be empty");
}

else if(userInput.length > 0 && userInput.length < 200){

    let charLeft = reviewLength - maxLength;
    console.log(userReview);
    console.log("You've typed", reviewLength, "Characters", charLeft, "Characters Left.");
}
