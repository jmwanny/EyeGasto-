import { deleteExpense } from "../../data/expenses.js";
import { confirmMessage } from "../../core/confirmActions.js";

export function initDeleteExpense() {
const container = document.querySelector('.expenses-container');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('js-trash-button')) {
    confirmMessage(`Do you want to delete <strong>${e.target.dataset.name}?</strong>`, () => {
    deleteExpense(e.target.dataset.id);
    }
  )
}});
}