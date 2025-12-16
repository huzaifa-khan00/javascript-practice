var nums = [];

for (var i = 1; i <= 5; i++){
   var userInput = prompt("Enter Number " + i);
    nums.push(userInput);
}

for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2){
        console.log(nums[i], " Is Odd Number");
    }
    else{
        console.log(nums[i], " Is Even Number");
    }
}