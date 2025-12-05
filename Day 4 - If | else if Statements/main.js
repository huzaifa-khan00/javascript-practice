let lateMinute = 6;

let stdCard = true;

let eyeSight = true;

if(lateMinute <=5 && stdCard == true && eyeSight == true){
    console.log("You are eligible for the License 🪪. You meet all the requirements 👍.");
}

else if(lateMinute >5 && stdCard == true && eyeSight == true){
    console.log("You are late ⌛ but, don't worry we don't have strong restrictions, since you meet the necessary requirements ✅.")
}

else if(lateMinute <=5 && stdCard == false && eyeSight == true){
    console.log("Plesase provide your Student Card 🪪, This is necessary requirement to be eligible for the license.")
}

else if(lateMinute <=5 && stdCard == true && eyeSight !== true){
    console.log("Sorry Sir!, Your eyesight is week 👁‍🗨, for your safety 🛡️, we are unable ⚠ to provide you the Driving License.")
}

else if(lateMinute >5 && stdCard !== true && eyeSight == true){
    console.log("Sir!, You are late but that's not the reason for your uneligibility, Student Card is must to apply for the Driving License 📝.")
}

else if(lateMinute >5 && stdCard == true && eyeSight !== true){
    console.log("Sir!, You are uneligible ⛔ for the Driving License. We don't have strict rules for the Timing 🕒 but, the necessary requirements must be met. Your eyesight is week & this is the reason and that's for your safety 🛟.")
}

else if(lateMinute <=5 && stdCard !== true && eyeSight !== true){
    console.log("")
}

else{
    console.log("You are Uneligible ❌ for the Driving License since you don't meet any of the Requirements.")
}