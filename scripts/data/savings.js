
import { formatToPeso } from "../core/utils.js";
import "../core/storage.js";
import { loadSavingsFromStorage, saveToLocalStorage } from "../core/storage.js";


const savedData = loadSavingsFromStorage("savings") || {}
export let savingsMoney = {
  money: savedData.money ?? 0,
  transactions: savedData.transactions ?? [],
  

  addMoney(amount, description) {
      
    if(amount <=0) {
      alert ('Please enter a valid amount!');
      return;
    }
       
      this.money += amount;
      
      this.transactions.push({
        amount: Number(amount),
        description: description,
        type: "deposit",
        date: new Date().toLocaleDateString()
      });
      
      saveToLocalStorage("savings", {
        money: savingsMoney.money,
        transactions: savingsMoney.transactions
      });
    },


   withdrawMoney(amount, description) {

        if (amount > this.money) {
          alert("Insufficient balance!");
          return;
    }
  
      this.money -= amount;
      
      this.transactions.push({
        amount: Number(amount),
        description: description,
        type: "withdraw",
        date: new Date().toLocaleDateString()
      })

      saveToLocalStorage("savings", {
        money: savingsMoney.money,
        transactions: savingsMoney.transactions
      });
  },

  getCurrentMoney() {
    return formatToPeso(this.money);
  }


}



