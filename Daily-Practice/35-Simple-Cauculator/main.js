function calculator(firstNum, operator, secondNum){
    return result = eval(firstNum + operator + secondNum);
}

let firstVal = prompt("Type first value");
let operatorSign = prompt("+, -, /, *");
let secondVal = prompt("Type second value");

let result = calculator(firstVal, operatorSign, secondVal);
console.log(result);