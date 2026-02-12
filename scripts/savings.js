import { hideAddWithdrawOption } from "./main.js";
import { formatToPeso } from "./utils.js";
import "./storage.js";
import { loadSavingsFromStorage, saveToLocalStorage } from "./storage.js";


const savedData = loadSavingsFromStorage();

export let savingsMoney = {
  money: savedData.money,
  transactions: savedData.transactions,
  

  addMoney(input, description) {
   
      if(typeof input !== "number" || isNaN(input) || input<=0) {
        alert('Please enter a valid number!');
         return;
      } else {

      this.money += input;
      
      this.transactions.push({
        amount: input,
        description: description,
        type: "deposit",
        date: new Date().toLocaleDateString()
      });
      
      saveToLocalStorage({
        money: savingsMoney.money,
        transactions: savingsMoney.transactions
      });

    }},

  withdrawMoney(input, description) {
     if(typeof input !== "number" || isNaN(input) || input<=0 ) {
       alert('Please enter a valid number!');
         return; 
     }

    if(input>savingsMoney.money) {
      alert('Insufficient funds!');
     } else {
      this.money -= input;
      
      this.transactions.push({
        amount: input,
        description: description,
        type: "withdraw",
        date: new Date().toLocaleDateString()
      })

      saveToLocalStorage({
        money: savingsMoney.money,
        transactions: savingsMoney.transactions
      });
  }},

  getCurrentMoney() {
    return formatToPeso(this.money);
  }

}


export function addMoneyInSavings() {
    const addButton = document.querySelector('.js-add-button');
    let savingsBalanceHTML = document.querySelector('.savings-balance');

    addButton.addEventListener('click', () => {
      const newDescription = document.querySelector('.js-description').value;
      const addedAmount = Number(document.querySelector('.js-amountInput').value);

      savingsMoney.addMoney(addedAmount, newDescription);
      savingsBalanceHTML.textContent = savingsMoney.getCurrentMoney();
      hideAddWithdrawOption(addButton);

    });

  }

  
export function withdrawMoneyInSavings() {
    const withdrawButton = document.querySelector('.js-withdraw-button');
    let savingsBalanceHTML = document.querySelector('.savings-balance');

    withdrawButton.addEventListener('click', () => {
      const newDescription = document.querySelector('.js-description').value;
      const withdrawnAmount = Number(document.querySelector('.js-amountInput').value);

      savingsMoney.withdrawMoney(withdrawnAmount, newDescription);
      savingsBalanceHTML.textContent = savingsMoney.getCurrentMoney();
      hideAddWithdrawOption(withdrawButton);

    });

  }


