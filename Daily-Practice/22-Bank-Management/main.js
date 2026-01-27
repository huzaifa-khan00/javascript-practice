var initialAmount = 5000;
var showResult = document.getElementById('showResult');
var amountInput = document.getElementById('amount-inp');

function checkAmount() {
    showResult.innerText = "Current amount: " + initialAmount;
}

function depositAmount() {
    var amount = Number(amountInput.value);

    if (amount < 500) {
        alert("Please deposit at least 500");
        return;
    }

    initialAmount = initialAmount + amount;
    showResult.innerText = "Amount deposited: " + amount;
}

function withdrawAmount() {
    var amount = Number(amountInput.value);

    if (amount < 500) {
        alert("Please withdraw at least 500");
        return;
    }

    if (amount > initialAmount) {
        alert("Insufficient balance");
        return;
    }

    initialAmount = initialAmount - amount;
    showResult.innerText = "Amount withdrawn: " + amount;
}
