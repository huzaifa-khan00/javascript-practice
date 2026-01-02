var studyHours = [2, 4, 1, 5, 3];

var count = 0;

for (var i = 0; i < studyHours.length; i++) {
    console.log("Student studied " + studyHours[i] + " hours");

    if (studyHours[i] > 3) {
        count = count + 1;
    }
}

console.log("Students who studied more than 3 hours: " + count);
