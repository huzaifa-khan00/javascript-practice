// Ask how many people
var count = prompt("How many people?");

// Convert to number
count = Number(count);

// Array to store ages
var ages = [];

// Take ages from user
for (var i = 0; i < count; i++) {
  var age = prompt("Enter age of person " + (i + 1));
  age = Number(age);
  ages.push(age);
}

// Counters
var childCount = 0;
var teenCount = 0;
var adultCount = 0;
var seniorCount = 0;

// Categorize ages
for (var j = 0; j < ages.length; j++) {
  var currentAge = ages[j];

  if (currentAge >= 0 && currentAge <= 12) {
    alert("Person " + (j + 1) + ": Child");
    childCount++;
  } else if (currentAge >= 13 && currentAge <= 19) {
    alert("Person " + (j + 1) + ": Teen");
    teenCount++;
  } else if (currentAge >= 20 && currentAge <= 59) {
    alert("Person " + (j + 1) + ": Adult");
    adultCount++;
  } else if (currentAge >= 60) {
    alert("Person " + (j + 1) + ": Senior");
    seniorCount++;
  } else {
    alert("Person " + (j + 1) + ": Invalid age");
  }
}

// Summary
alert(
  "Summary:\n" +
  "Children: " + childCount + "\n" +
  "Teens: " + teenCount + "\n" +
  "Adults: " + adultCount + "\n" +
  "Seniors: " + seniorCount
);
