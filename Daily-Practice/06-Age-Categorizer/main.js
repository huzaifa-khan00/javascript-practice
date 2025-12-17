// Ask how many people
var count = prompt("How many people?");
count = Number(count);

// Basic validation for count
if (isNaN(count) || count <= 0) {
  alert("Invalid number of people. Program will stop.");
} else {

  var ages = [];

  // Take ages from user
  for (var i = 0; i < count; i++) {
    var age = prompt("Enter age of person " + (i + 1));
    age = Number(age);

    // Validate age
    if (isNaN(age) || age < 0 || age > 120) {
      alert("Invalid age entered. This person will be skipped.");
    } else {
      ages.push(age);
    }
  }

  // Counters
  var childCount = 0;
  var teenCount = 0;
  var adultCount = 0;
  var seniorCount = 0;

  // Categorize valid ages
  for (var j = 0; j < ages.length; j++) {
    var currentAge = ages[j];

    if (currentAge <= 12) {
      childCount++;
      alert("Person " + (j + 1) + ": Child");
    } else if (currentAge <= 19) {
      teenCount++;
      alert("Person " + (j + 1) + ": Teen");
    } else if (currentAge <= 59) {
      adultCount++;
      alert("Person " + (j + 1) + ": Adult");
    } else {
      seniorCount++;
      alert("Person " + (j + 1) + ": Senior");
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
}
