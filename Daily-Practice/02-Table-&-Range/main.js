let table = prompt("Which Table");

let range = prompt("What's the range");

for(var i = 1; i <= range; i++){
    console.log(table + " x", i, "=" ,i * table);
}