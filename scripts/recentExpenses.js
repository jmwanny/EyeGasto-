import { expenses } from "./expenses.js";
import { loadSavingsFromStorage, saveToLocalStorage } from "./storage.js";
import { formatToPeso } from "./utils.js";


const savedData = loadSavingsFromStorage("recentExpenses");

let recentExpenses = savedData || [];

export function updateRecentExpenses () {
    
    recentExpenses = expenses.slice(-2);

    saveToLocalStorage("recentExpenses", recentExpenses);

    renderRecentExpensesHTML(recentExpenses)
}


function renderRecentExpensesHTML(recentExpenses) {
    const container = document.querySelector('.recent-expenses-container');

     if(!container)
       return;

   container.innerHTML = recentExpenses.map(expense =>
    `
    <div class = "bg-white w-full rounded-xl flex flex-row mb-2">
    <div style = "background-color:${expense.color}" class = "rounded-xl rounded-r-none w-full flex p-2 items-center justify-start gap-3">
    <img src = "${expense.logo}" alt = "${expense.category}" class="w-5 flex-shrink-0"/>
    <h1 class = "text-white text-sm font-bold">
     ${expense.description}
    </h1>
    </div>
    <div class = "flex items-center">
    <h1 class = "text-[#079F9F] font-['DM_Sans'] font-bold text-xl px-3">${formatToPeso(expense.amount)}</h1>
    
    </div>
    </div>

    `).join('');

}