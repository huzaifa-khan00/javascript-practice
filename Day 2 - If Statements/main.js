let nameInput = prompt("Enter Your Name");

let ageInput = Number(prompt("How old are you?"));

let isMember = prompt("Do you have membership");

if(ageInput >0 && ageInput <=10 && isMember == 'no' && ageInput !== ''){
    console.log("Congrats!🎉, Your Ticket🎫 is Free lil Kid");
}
if(ageInput >0 && ageInput <=10 && isMember == 'yes'){
    console.log("You are Welcome!, Mr. " + nameInput + ", Your Ticket🎫 is Free & Since you are our one of the Youngest Members, You will be provided with Extra Discount of 75%,\nKeep Visiting for more values👍");
}

if(ageInput >=10 && ageInput <=20 && isMember == 'no' && nameInput !== ''){
    console.log("You are Eligible for Inclusive Discount👍 since you are" + " " + ageInput + " " + "Years old");
}

if(ageInput >=10 && ageInput <=20 && isMember == 'yes'){
    console.log("You are Welcome once Again!, Young Boy🫡.\nYou are back at the right time⌛.Our Offer is about to end withing an Hour. Luckily🤞, You are added⊕ to the whishlist of 'First 100 Members Visit during Offer period' for this offer.");
}

if(ageInput >=60 && isMember == 'no' && nameInput !== ''){
    console.log("Congratulations!🎉, Mr." + nameInput + " Your Ticket is 💯% Free for the 1st Month. We respect old people 😊.");
}

if(ageInput >=60 && isMember == 'yes' && nameInput !== ''){
    console.log("Knock Knock!, Who's There🧓, " + nameInput + " Right after 30 Years, We are about to announce that 'Big Congratulation!🎉 to you sir, " + nameInput + " You've won the Free Forever 100% Offer🥇. Enjoy the site Forever👍. If you expect more, Contact us after 'Death☠' 🕶.");
}

if(ageInput >=60 && isMember == 'yes' && nameInput !== '' ){
    console.log("Sir!, What we are supposed to call you? Mr Nobody? or Mr " + ageInput + "\nPlease Enter your name so we are engaged with you by calling your name.");
}

if(ageInput >20 && ageInput <60 && isMember == 'no' ){
    console.log("Unfortunately😐, Mr" + " " + nameInput + ", You are uneligible for any of our offers. Since you don't meet the following: \n1. 10 Years old or younger. \n2. 60 or Older. \n3. Must be a VIP member. \n4. Age b / w 10 - 20. \nBut Don't worry, We've got you covered. \nBecome a 👑VIP👑 Member & get 🫴50% Discount for being 1st Time Member🙂.");
}

if(ageInput >20 && ageInput <60 && isMember == 'yes' ){
    console.log("Welcome Back!, Mr" + " " + nameInput + "," + " " + "Long time no see!. We have some special offers for you.\n.1 Your next month subscription is Free😊\n.2 3rd Month's Subscription will be deducted to 🫴50%\n.3 You will be provided with the VIP ⊕ Badge for a month.\nKeep Coming Back for Special Deals and Offers👍.");
}

if(ageInput == '' && nameInput == '' && isMember == ''){
    console.log("Really!🤔, You can't be that Lazy🦥, There is no way.");
}

if(ageInput == '' && nameInput !== '' && isMember !== ''){
    console.log("Brooo!, put your ageee!!!🙏");
}

if(ageInput !== '' && nameInput !== '' && isMember == ''){
    console.log("Sir, " + nameInput + " Please let us know wether you are a member or not.\n This will help us help you with our offers.");
}

if(ageInput !== '' && nameInput == '' && isMember !== ''){
    console.log("Sir!, What do you expect us to call you?\nMr. " + ageInput + " ?\nPlease Let us know about your name, This help us engaged with you while calling you by your name.");
}