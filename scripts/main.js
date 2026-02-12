import '../scripts/savings.js'
import { addMoneyInSavings, withdrawMoneyInSavings } from '../scripts/savings.js';
import { renderSavingsHTML } from './renderSavings.js';
import { showReceipts } from './renderReceipts.js';



function showAddWithdrawOption () {
  const addWithdrawBtn = document.querySelector('.add-withdraw-money');
  const addWithdrawContainer = document.querySelector('.add-withdraw-option-container');

  addWithdrawBtn.addEventListener('click', () => {
   addWithdrawContainer.classList.remove("hidden");
  })
  
}

export function hideAddWithdrawOption (button) {
  const addWithdrawContainer = document.querySelector('.add-withdraw-option-container');

   button.addEventListener('click', () => {
   addWithdrawContainer.classList.add("hidden");
  });

 
 addWithdrawContainer.addEventListener('click', (e) => {
  if(e.target === addWithdrawContainer) {
    addWithdrawContainer.classList.add("hidden");
  }
 })
}

renderSavingsHTML();
addMoneyInSavings();
withdrawMoneyInSavings();
showAddWithdrawOption();
showReceipts();

