let cities = ["atlanta", "baltimore", "denver", "chicago", "washington", "los angeles", "los vegas"];

let citiesLength = cities.length -3;

cities.pop();

cities.push("Karachi");

cities.splice();

console.log(cities);

cities.shift();

let cities2 = cities.unshift("Atlanta", "Georgia", "Helsinki");

console.log(cities.length);

console.log(cities2);