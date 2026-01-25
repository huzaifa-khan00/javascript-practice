var expenses = [200, 150, 300, 100];

function totalExpense() {
  var total = 0;

  for (var i = 0; i < expenses.length; i++) {
    total = total + expenses[i];
  }

  return total;
}

var result = totalExpense();
console.log("Total Expense is: " + result);
