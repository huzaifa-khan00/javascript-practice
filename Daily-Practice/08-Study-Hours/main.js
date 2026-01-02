var studyHours = [2, 4, -1, 8, 3];

var count = 0;

for (var i = 0; i < studyHours.length; i++) {

    if (studyHours[i] < 0) {
        console.log("Invalid hours: cannot be negative");
    }
    else if (studyHours[i] > 6) {
        console.log("Invalid hours: cannot be more than 6");
    }
    else {
        console.log("Student studied " + studyHours[i] + " hours");

        if (studyHours[i] > 3) {
            count = count + 1;
        }
    }
}

console.log("Students who studied more than 3 hours: " + count);
