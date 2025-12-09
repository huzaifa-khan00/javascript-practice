let hasLearnersPermit = true;

let passedVisionTest = false;

if (hasLearnersPermit == false) {
  console.log("Must get a learner's permit first.");
} else if (passedVisionTest == false) {
  console.log("Must pass the vision test for the further checks");
} else if (hasLearnersPermit == true) {
  let age = prompt("Your age?");

  // age = Number(prompt);

  if (age === "" || age <= 0) {
    console.log("Age is Required!");
  } else if (isNaN(age)) {
    console.log("Age must be a number!");
  } else if (age > 0 && age < 16) {
    console.log("Not eligible for any License, You are underage.");
  } else if (passedVisionTest == true && age >= 16 && age <= 17) {
    console.log("You can apply for the Standard License only.");
  } else if (passedVisionTest == true && age >= 18 && age <= 80) {
    console.log(
      "You are eligible for the Driving License & can apply for the Car or Motorcycle."
    );
  } else if (age > 80) {
    console.log(
      "Sorry sir, you don't meet the age criteria (Must be younger than 80) for the the Driving License!, this is for your safety!"
    );
  }
}
