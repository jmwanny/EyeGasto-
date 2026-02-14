import { expenses } from "./expenses.js";
import { formatToPeso } from "./utils.js";

export function updateTotalExpenses() {
  const total = expenses.reduce((sum,exp) => sum + exp.amount, 0);
  localStorage.setItem("totalExpenses", total);
  console.log(total);

  updateTotalExpensesUI(total);
}

export function updateTotalExpensesUI(total) {

  const totalExpense = document.querySelector('.total-expenses');
  
  if(totalExpense) {
  totalExpense.textContent = formatToPeso(total);
}
}