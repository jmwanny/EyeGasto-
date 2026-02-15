
import { addMoneyInSavings, withdrawMoneyInSavings } from '../scripts/savings.js';
import { renderSavingsHTML } from './renderSavings.js';
import { showReceipts } from './renderReceipts.js';
import {initAddExpenseOption, hideAddExpense} from './modals/addExpense.js';
import {initAddWithdrawOption, hideAddWithdrawOption} from './modals/addWithdraw.js';
import { initAddExpense } from './modals/addExpense.js';
import { renderDateTodayHTML } from './renderdateToday.js';
import { initDeleteExpense, renderExpensesHTML } from './renderExpenses.js';
import { renderDefaultExpensesHTML } from './renderDefault.js';
import { updateTotalExpenses } from './totalExpenses.js';
import { updateRecentExpenses } from './recentExpenses.js';
import { updateBiggestExpense } from './biggestExpense.js';


renderSavingsHTML();
renderDefaultExpensesHTML();
addMoneyInSavings();
withdrawMoneyInSavings();
initAddWithdrawOption();
initAddExpenseOption();
showReceipts();
initAddExpense();
initDeleteExpense();
renderDateTodayHTML();
updateTotalExpenses();
updateRecentExpenses();
updateBiggestExpense();