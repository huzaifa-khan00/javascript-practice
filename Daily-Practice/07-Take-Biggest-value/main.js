var numbers = [10, 45, 23, 89, 12];

if (numbers.length === 0) {
    console.log("Array is empty");
} else {
    var largest = numbers[0];
    
    for (var i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            if (numbers[i] > largest) {
                largest = numbers[i];

            }
        }
    }

    console.log("Largest number is:", largest);
}
