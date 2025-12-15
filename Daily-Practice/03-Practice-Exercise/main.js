const profile = {
    firstName:"Huzaifa",
    lastName: "Khan",
    city: "Karachi"
}

profile.firstName = "Zaid";

console.log(profile);

const cities = ["Atlanta", "Georgia", "Las Vegas", "baltimore", "denver", "tokyo", "Helsinki"];

cities.pop();

citiesLength = cities.length -3;

newArray = cities.slice(2,4);

newArray.push("Helsinki");

console.log(cities, newArray);

console.log(hobby);
// Says Undefined & Merely Keeps Errors that is Risky
var hobby = "Car Drifting";

console.log(passion);
// This is the Tempral Dead Zone for Let
let passion = "Full-Stack Web Developer";

