let age = prompt("Your age?");

    age = Number(prompt);

let hasLearnersPermit = true;

let passedVisionTest = true;

if (hasLearnersPermit == true) {
  if (age === 0 || age === -0 || age === "" || age === false || age === 0n) {
    console.log("Age is Invalid!");
  } else if (passedVisionTest == false) {
    console.log("Need to pass the vision test first!");
  } 
  /* else if (age === "" || age <= 0) {
console.log("Age is Required!");
  } else if (isNaN(age)) {
    console.log("Age must be a number!");
  }*/
    else if (age < 16 && age >0) {
    console.log("Not eligible for any License, You are underage.");
  } else if (passedVisionTest == true && age >= 16 && age <= 17) {
    console.log("You can apply for the Standard License only.");
  } else if (passedVisionTest == true && age >= 18 && age <= 80) {
    console.log(
      "You are eligible for the Driving License & can apply for the Car or Motorcycle."
    );
  } else if (age > 80) {
    console.log("Sorry sir, you are too old for the license!, you are uneligible for the Driving License. And this is for your safety!");
  }
} else {
  console.log("Must get a learner's permit first.");
}
