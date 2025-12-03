let nameInput = prompt("Enter Your Name");

let ageInput = Number(prompt("How old are you?"));

let isMember = prompt("Do you have membership");

if(ageInput >0 && ageInput <=10 && isMember == 'no'){
    console.log("Congrats!🎉, Your Ticket🎫 is Free lil Kid");
}
if(ageInput >0 && ageInput <=10 && isMember == 'yes'){
    console.log("You are Welcome!, Mr. " + nameInput + ", Your Ticket🎫 is Free & Since you are our one of the Youngest Members, You will be provided with Extra Discount 75%,\nKeep Visiting for more values👍");
}

if(ageInput >=10 && ageInput <=20){
    console.log("You are Eligible for Inclusive Discount👍 since you are" + " " + ageInput + " " + "Years old");
}

if(ageInput >60){
    console.log("Congratulations!🎉, Mr." + nameInput + "Your Ticket is 💯% Free  Old Man 😊");
}

// if(isMember == 'yes'){  
//     console.log("Welcome Back!🤚," + nameInput);
// }

if(ageInput >20 && ageInput <60 && isMember == 'no' ){
    console.log("Unfortunately😐, Mr" + " " + nameInput + ", You are uneligible for any of our offers. Since you don't meet the following: \n1. 10 Years old or younger. \n2. 60 or Older. \n3. Must be a VIP member. \n4. Age b / w 10 - 20. \nBut Don't worry, We've got you covered. \nBecome a 👑VIP👑 Member & get 🫴50% Discount for getting 1st Time Membership🙂.");
}

if(ageInput >20 && ageInput <60 && isMember == 'yes' ){
    console.log("Welcome Back!, Mr" + " " + nameInput + "," + " " + "Long time no see!. We have some special offers for you.\n.1 Your next month subscription is Free😊\n.2 3rd Month's Subscription will be deducted to 🫴50%\n.3 You will be provided with the VIP ⊕ Badge for a month.\nKeep Coming Back for Special Deals and Offers👍");
}