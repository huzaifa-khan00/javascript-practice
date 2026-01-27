var initialAmount = 5000;
var showResult = document.getElementById('showResult');
var amountInput = document.getElementById('amount-inp');
var historyData = [];

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
    historyData.push("Deposited: " + amount);
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
    historyData.push("Withdrawn: " + amount);
    showResult.innerText = "Amount withdrawn: " + amount;
}

function viewHistory() {
    showResult.innerText = "";

    if (historyData.length == 0) {
        showResult.innerText = "No history available";
        return;
    }

    for (var i = 0; i < historyData.length; i++) {
        showResult.innerHTML += historyData[i] + "<br>";
    }
}
