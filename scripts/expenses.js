import { loadSavingsFromStorage, saveToLocalStorage } from "./storage.js";
import { formatToPeso } from "./utils.js";

const savedData = loadSavingsFromStorage("expenses");

export let expenses = savedData || [];

export function addExpense(description, amount, category) {
  const expense = {
    id: crypto.randomUUID(),
    description,
    category,
    amount: Number(amount),
    color: getCategoryColor(category),
    logo: getCategoryLogo(category),
  };
   
  expenses.push(expense);
  
  saveToLocalStorage("expenses", expenses)
}


function getCategoryColor(category) {
   
  const categoryColors = {
    "Foods & Drinks": "#FF6B6B",
    Transport: "#44C2B9",
    Shopping: "#FFB142",
    "Bills & Utilities": "#556270",
    "Health & Fitness": "#00B894",
    Entertainment: "#A29BFE",
    Education:"#0984E3",
    Savings:"#6C5CE7",
    Debt: "#FF7675",
    Others:"#636E72",
  }

  return categoryColors[category] || "black";
}

function getCategoryLogo(category) {
   
  const categoryLogo = {
    "Foods & Drinks": "../images/category/foods-drinks.png",
    Transport: "../images/category/transport.png",
    Shopping: "../images/category/shopping.png",
    "Bills & Utilities": "../images/category/bills-utilities.png",
     "Health & Fitness": "../images/category/health.png",
    Entertainment: "../images/category/entertainment.png",
    Education:"../images/category/education.png",
    Savings:"../images/category/savings.png",
    Debt: "../images/category/debt.png",
    Others:"../images/category/belongings.png",
  }
  
  return categoryLogo[category] || null;
}

