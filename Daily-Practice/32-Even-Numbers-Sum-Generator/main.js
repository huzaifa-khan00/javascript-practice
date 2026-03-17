let n = Number(prompt("Type your range!"));
let sum = 0;

    for(var i = 1; i <=n; i++){
        if(i % 2 === 0){
            console.log(i);
            sum += i;
        };
    }
    console.log("Total: " + sum);