alert("Variables & Data Types")

console.log("My first code in javascript");

// variables

var firstName = "Huzaifa";

var lastName = "Khan";

var fullName = firstName + " " + lastName;

console.log(fullName);

var fullName = lastName + " " +firstName;

console.log(fullName);

let item = "watch";

let itemQty = 10;

let itemSold;

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

itemSold = --itemQty;
console.log(itemSold);

// Block Scope

{

  // Data written in a Block Scope will be recognized with the Block
  // out side of that block the value is Undefined (Doesn't exist)

  let fullName = "Full Name: Huizafa Khan";

  let age ="Age:" + " " + 24;

  let gender = "Gender: male";
 
   let bioData = fullName + "\n" + age + "\n" + gender;

console.log(bioData);
}