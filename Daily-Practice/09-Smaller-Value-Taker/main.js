var range = prompt("How many values in an Array");

var arr = [];

for(var i =0; i <range; i++){
    arr[i] = Number(prompt("Value " + i));
}

var smallest = arr[0];

for(var j=1; j < arr.length; j++){
    if(smallest > arr[j]){
        smallest = arr[j]
    }
    smallest = Number(smallest);
}

console.log(arr);
console.log(smallest);