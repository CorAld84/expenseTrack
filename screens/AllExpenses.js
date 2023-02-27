
import { useContext } from "react";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expensesCtx";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <>
            <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total' fallbackText='No Expenses at All' />
        </>
    );
};

export default AllExpenses;