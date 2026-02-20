import { loadSavingsFromStorage, saveToLocalStorage } from "../core/storage.js";
import { formatToPeso } from "../core/utils.js";
import { showNotif } from "../notifs/notifications.js";

const savedData = loadSavingsFromStorage('budget') ?? 0;
const savedOriginal = loadSavingsFromStorage('budgetOriginal') ?? 0; 

export let budget = {
  budget: savedData,
  originalBudget: savedOriginal,

  addBudget(amount) {
    if (amount <= 0) return alert('Please enter a valid number!');
    this.budget += amount;
    this.originalBudget += amount;
    saveToLocalStorage('budget', this.budget);
  },

  editBudget(amount) {
    if (isNaN(amount) || amount < 0) return alert('Please enter a valid amount!');
    this.budget = amount;
    this.originalBudget = amount;                      
    saveToLocalStorage('budget', this.budget);
    saveToLocalStorage('budgetOriginal', this.originalBudget); 
  },

  getCurrentBudget() {
    return formatToPeso(this.budget);
  },

  deduct(amount) {
      this.budget = Math.max(this.budget - amount, 0);
      saveToLocalStorage('budget', this.budget);
      this.checkBudgetStatus()
  },

  refund(amount) {
    this.budget = Math.min(this.budget + amount, this.originalBudget);
    saveToLocalStorage('budget', this.budget);
    this.checkBudgetStatus(); 
    
  },

 
  checkBudgetStatus() {
    if (this.originalBudget <= 0) return; 

    const percentLeft = (this.budget / this.originalBudget) * 100;

    if (this.budget <= 0){
      if(!this._outShown) {
      this._outShown = true;
      showNotif('budgetOut');
     }  
  return;
}
    if (percentLeft <= 50) {
      if(!this._lowShown) {
        this._lowShown = true;
        showNotif('budgetLow');
      }
      return;
    }

  this._outShown = false;
  this._lowShown = false;
  },

  
};
