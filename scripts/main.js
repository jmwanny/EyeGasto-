
import { addMoneyInSavings, withdrawMoneyInSavings } from '../scripts/savings.js';
import { renderSavingsHTML } from './renderSavings.js';
import { showReceipts } from './renderReceipts.js';
import {initAddExpenseOption, hideAddExpense} from './modals/addExpense.js';
import {initAddWithdrawOption, hideAddWithdrawOption} from './modals/addWithdraw.js';
import { initAddExpense } from './modals/addExpense.js';
import { renderDateTodayHTML } from './renderdateToday.js';
import { renderExpensesHTML } from './renderExpenses.js';



renderSavingsHTML();
renderExpensesHTML();
addMoneyInSavings();
withdrawMoneyInSavings();
initAddWithdrawOption();
initAddExpenseOption();
showReceipts();
initAddExpense();
renderDateTodayHTML();