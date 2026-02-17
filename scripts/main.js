
import { addMoneyInSavings, withdrawMoneyInSavings } from './data/savings.js';
import { renderSavingsHTML } from './ui/renderSavings.js';
import { showReceipts } from './ui/renderReceipts.js';
import {initAddExpenseOption, initAddExpense} from './features/expenses/addExpense.js';
import {initAddWithdraw, initAddWithdrawOption} from './withdrawals/addWithdraw.js';
import { renderDateTodayHTML } from './ui/renderDateToday.js';
import { initDeleteExpense, initExpensesTooltip } from './ui/renderExpenses.js';
import { renderDefaultExpensesHTML } from './ui/renderDefault.js';
import { updateTotalExpenses } from './features/expenses/totalExpenses.js';
import { updateRecentExpenses } from './features/expenses/recentExpenses.js';
import { updateBiggestExpense } from './features/expenses/biggestExpense.js';
import { updateExpensesChart } from './charts/expensesChart.js';
import { expenses } from './data/expenses.js';
import { initDateFilter } from './features/expenses/viewExpense.js';
import { initEditExpense } from './features/expenses/editExpense.js';



function initApp() {
renderSavingsHTML();
renderDateTodayHTML();
renderDefaultExpensesHTML();
addMoneyInSavings();
withdrawMoneyInSavings();
initAddWithdrawOption();
initAddWithdraw();
initAddExpenseOption();
showReceipts();
initAddExpense();
initDeleteExpense();
updateTotalExpenses();
updateRecentExpenses();
updateBiggestExpense();
initDateFilter();
updateExpensesChart(expenses);
initExpensesTooltip();
initEditExpense();
}


document.addEventListener('DOMContentLoaded', initApp);

