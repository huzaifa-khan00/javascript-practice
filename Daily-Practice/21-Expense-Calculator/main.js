var expenses = [200, 150, 300, 100];

function totalExpense() {
  var total = 0;

  for (var i = 0; i < expenses.length; i++) {
    total = total + expenses[i];
  }

  return total;
}

function averageExpense() {
  var total = 0;

  for (var i = 0; i < expenses.length; i++) {
    total = total + expenses[i];
  }

  var avg = total / expenses.length;
  return avg;
}

console.log("Total Expense is: " + totalExpense());
console.log("Average Expense is: " + averageExpense());
