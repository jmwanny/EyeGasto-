import '../scripts/savings.js'
import { addMoneyInSavings, withdrawMoneyInSavings } from '../scripts/savings.js';
import { renderSavingsHTML } from './renderSavings.js';
import { showReceipts } from './renderReceipts.js';



function initAddWithdrawOption () {
  const button = document.querySelector('.add-withdraw-money');
  const closeButton = document.querySelector('.js-close-add-withdraw');
  const container = document.querySelector('.add-withdraw-option-container');

  button.addEventListener('click', () => {
   container.classList.remove("hidden");
  })
  
   closeButton.addEventListener('click', () => {
    container.classList.add("hidden");
  });

}

export function hideAddWithdrawOption (button) {
  const container = document.querySelector('.add-withdraw-option-container');

   button.addEventListener('click', () => {
   container.classList.add("hidden");
  });

}

function initAddExpenseOption() {
  const button = document.querySelector('.js-show-add-expense');
  const container = document.querySelector('.add-expense-option-container');

  button.addEventListener('click', () => {

    container.classList.remove("hidden");
  })

  const closeButton = document.querySelector('.js-close-add-expense');

   closeButton.addEventListener('click', () => {
    container.classList.add("hidden");

  });
   
}

function hideAddExpense() {
  const container = document.querySelector('.add-expense-option-container');


}





renderSavingsHTML();
addMoneyInSavings();
withdrawMoneyInSavings();
initAddWithdrawOption();
initAddExpenseOption();
showReceipts();

