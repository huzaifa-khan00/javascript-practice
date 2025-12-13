let table = prompt("Which Table");

let range = prompt("What's the range");

if(isNaN(table) || isNaN(range)){
    console.log("Can only be a Number!");
}

else if(table == "" || range == ""){
    console.log("Cannot be empty!");
}

else if(!table || !range){
    console.log("invalid Input!");
}

else for(var i = 1; i <= range; i++){
    console.log(table + " x", i, "=" ,i * table);
}