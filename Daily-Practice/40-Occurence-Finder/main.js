let para = prompt("Type your string to find the index for a specific letter in our provided string!");
let targetLetter = prompt("Which letter's index you want?");
let occurence = Number(prompt("“Which occurrence do you want? (1st, 2nd, 3rd...)”"));
let arrow = ""; 
let targetFound = 0;

for(var i = 0; i < para.length; i++){
    arrow += " ";
    if(para.slice(i, i+1) === targetLetter){
        targetFound++
    }

    if(i === para.length-1 && targetFound !== occurence){
        console.log(`The letter ${targetLetter} doesn't appear ${occurence} times in your string!`);
        console.log("Your string is: "+para);
        break;
    }

    if(targetFound === occurence){
        arrow = arrow.slice(13);
        console.log(`Found the letter "${para.slice(i, i+1)}" at index ${i+1}   Your ↓ String`);
        console.log(para);
        console.log(arrow + "Your letter ↑");
        console.log("Occurence selected: "+occurence);
        break;
    }
}