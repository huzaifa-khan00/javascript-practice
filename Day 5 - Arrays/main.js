let array1 = ["atlanta", "baltimore", "denver", "chicago", "washington", "log angeles", "log-vegas"];

let array1Length = array1.length;

array1.pop();

array1.push("Karachi");

array1.splice(4, 3, "Karachi", "Lahore", "Islamabad");

console.log(array1);

let array2 = array1.slice(4, 7);

console.log(array2);