import { expenses } from "./expenses.js";
import { loadSavingsFromStorage, saveToLocalStorage } from "./storage.js";
import { formatToPeso } from "./utils.js";

const savedData = loadSavingsFromStorage("biggestExpense");

let biggestExpense = savedData || [0];


export function updateBiggestExpense() {

 biggestExpense = expenses.reduce((max, expense) => 
   expense.amount > max.amount ? expense : max , 
{amount:0, description: "", category: "", logo: "", color: ""});

saveToLocalStorage("biggestExpense", biggestExpense);

renderBiggestExpense(biggestExpense);
}

function renderBiggestExpense (biggestExpense) {

  const container = document.querySelector('.biggest-expense-container');

  if(!container)
    return;

 container.innerHTML = 
 `
    <h1 class = "font-semibold font-[DM_Sans] w-full">Biggest Expense Today:<span class ="biggestExpenseName">${biggestExpense.description}</span></h1>


    <div class = "bg-white rounded-xl flex w-full">
    <div class = "w-full rounded-xl flex items-center justify-start gap-2 rounded-r-none px-1 py-2" style ="background-color: ${biggestExpense.color}">
    <img class = "w-5 flex-shrink-0" src = "${biggestExpense.logo}" alt = "${biggestExpense.category}"/>
    <h1 class = "font-bold text-white">${biggestExpense.category}</h1>
    </div>
    
     <h1 class ="text-[#079F9F] font-['DM_Sans'] font-bold text-xl px-3 m-auto">${formatToPeso(biggestExpense.amount)}</h1>
    </div>-
 `
 }

