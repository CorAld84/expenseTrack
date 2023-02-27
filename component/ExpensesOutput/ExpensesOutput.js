import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constans/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";


const colors = GlobalStyles.colors

function ExpensesOutput({ expensesPeriod, expenses, fallbackText }) {

    let content = <ExpensesList expenses={expenses} periodName={expensesPeriod} />;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} periodName={expensesPeriod} />
    } else {
        content = (
            <View style={styles.containerText}>
                <Text style={styles.text}>{fallbackText}</Text>
            </View>
        )
    };


    return (
        <>
            <View style={styles.container}>
                <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
                {content}
            </View>
        </>
    );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.primary700,
        paddingBottom: 80,
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white
    }
})