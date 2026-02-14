import { deleteExpense, expenses } from "./expenses.js";
import { addJustifyCenter, formatToPeso, removeJustifyCenter } from "./utils.js";

export function initDeleteExpense() {
const container = document.querySelector('.expenses-container');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('js-trash-button')) {
    deleteExpense(e.target.dataset.id);
  }
});
}

export function renderExpensesHTML() {
  const container = document.querySelector('.expenses-container');

  if (expenses.length === 0) {
    container.innerHTML = `
      <h1 class = "font-['DM_Sans'] text-center">No expenses today yet. Start tracking now 💸.</h1>
    `;
    addJustifyCenter(container);
    return;
  }

  
   removeJustifyCenter(container);

  container.innerHTML = expenses.map(expense => `
    <div class="flex w-full justify-evenly items-center rounded-xl bg-white px-1 gap-2.5">
      <h1 class="font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-[40%] ">${expense.description}</h1>
      <div class="rounded-full flex py-1 px-4 gap-2 items-center flex-shrink-0" style="background-color: ${expense.color}">
        <img class="w-5" src="${expense.logo}">
        <h1 class="text-white font-bold text-[12px]">${expense.category}</h1>
      </div>
      <h1 class="text-[#079F9F] font-['DM_Sans'] font-bold text-lg  whitespace-nowrap max-w-[25%] overflow-hidden text-ellipsis">
        ${formatToPeso(expense.amount)}
      </h1>
      <i class="fa-solid fa-trash js-trash-button cursor-pointer" data-id="${expense.id}"></i>
    </div>
  `).join('');
}



  
