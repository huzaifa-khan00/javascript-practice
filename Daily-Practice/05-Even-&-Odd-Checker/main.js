var nums = [];
var evenCounter = 0;
var oddCounter = 0;

for (var i = 1; i <= 5; i++){
   var userInput = prompt("Enter Number " + i);
   if(isNaN(userInput)){
    console.log("Must Be a Number");
   }else if(userInput.trim() === ""){
    console.log("Can't be empty");
   }else {nums.push(userInput);}
}

for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2){
        console.log(nums[i], " Is Odd Number");
        oddCounter++;
    }
    else{
        console.log(nums[i], " Is Even Number");
        evenCounter++;
    }
}

console.log("Even Count:" + evenCounter);
console.log("Odd Count:" + oddCounter);