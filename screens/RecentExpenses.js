


import { useContext } from "react";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expensesCtx";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);
    

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return (expense.date > date7DaysAgo) && (expense.date <= today);
    });

    return (
        <>
            <ExpensesOutput expenses={recentExpenses} expensesPeriod='last seven days' fallbackText='No Recent Expense' />
        </>
    );
};

export default RecentExpenses;

