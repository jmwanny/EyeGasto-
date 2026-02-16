import { updateExpensesChart } from "../../charts/expensesChart.js";
import { saveToLocalStorage } from "../../core/storage.js";
import { expenses, getCategoryLogo, getCategoryColor } from "../../data/expenses.js";
import { updateBiggestExpense } from "./biggestExpense.js";
import { updateRecentExpenses } from "./recentExpenses.js";
import { updateTotalExpenses } from "./totalExpenses.js";
import { renderExpensesHTML } from "../../ui/renderExpenses.js";
import { formatToPeso } from "../../core/utils.js";



export function initEditExpense () {
   const container =  document.querySelector('.expenses-container');
   container.addEventListener('click', (e) => {
    if (e.target.classList.contains("js-edit-button")) {
      const id = Number(e.target.dataset.id);
      openEditForm(id);
    }
   })
}

function openEditForm(id) {

  const expense = expenses.find(e => e.id === id);
  if (!expense) 
    return;

  document.getElementById('expense-description').value = expense.description;
  document.getElementById('expense-amount').value = expense.amount;
  document.getElementById('category').value = expense.category;

  const modal = document.querySelector('.add-expense-option-container');
  modal.classList.remove("hidden");
   
  const addButton = document.getElementById('js-add-expense');
  const saveButton = document.getElementById('js-save-edit');
  addButton.classList.add("hidden");
  saveButton.classList.remove("hidden");

 saveButton.addEventListener('click', () => {
  saveEditedExpense(id);
  modal.classList.add('hidden');
  saveButton.classList.add('hidden');
  addButton.classList.remove('hidden');
  renderExpensesHTML();

 });

}

function saveEditedExpense(id) {
  const description = document.getElementById('expense-description').value;
  const amount = Number(document.getElementById('expense-amount').value);
  const category = document.getElementById('category').value;

  const index = expenses.findIndex(e => e.id === id);
  if(index === -1) 
    return;

 
  expenses[index].description = description;
  expenses[index].amount = amount;
  expenses[index].category = category;

  expenses[index].color = getCategoryColor(category);
  expenses[index].logo = getCategoryLogo(category);

  saveToLocalStorage('expenses', expenses);
  updateTotalExpenses();
  updateRecentExpenses();
  updateBiggestExpense();
  updateExpensesChart();
}
