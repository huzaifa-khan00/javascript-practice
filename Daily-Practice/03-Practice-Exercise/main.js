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