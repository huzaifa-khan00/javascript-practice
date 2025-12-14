let array1 = ["atlanta", "baltimore", "denver", "chicago", "washington", "los angeles", "los vegas"];

let array1Length = array1.length -3;

array1.pop();

array1.push("Karachi");

array1.splice(4, 3, "Karachi", "Lahore", "Islamabad");

console.log(array1);

let array2 = array1.slice(array1Length);

console.log(array2);

