let display = document.getElementById('display');
let tipDisplay = document.getElementById('tip-display');

function calculateTip(){
    let bill = Number(document.getElementById('bill-input').value);
    let tip = Number(document.getElementById('per-input').value);

    display.innerText = eval(bill + (bill * (tip/100)));
    tipDisplay.innerText = bill * (tip/100);
    document.getElementById('bill-input').value = "";
    document.getElementById('per-input').value = "";
}