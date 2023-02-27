import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constans/styles";
import { ExpensesContext } from "../store/expensesCtx";

import IconButton from '../component/UI/IconButton';

import ExpenseForm from "../ManageExpense/ExpenseForm";



const colors = GlobalStyles.colors

function ManageExpenses({ route, navigation }) {

    const expenseCtx = useContext(ExpensesContext);
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId

    const selectedExpense = expenseCtx.expenses.find(expense => expense.id === expenseId);


    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing])

    function onDelete() {
        expenseCtx.deleteExpense(expenseId);
        navigation.goBack()
    };

    function onCancel() {
        navigation.goBack()
    };

    function onAdd(expenseData) {
        if (isEditing) {
            expenseCtx.updateExpense(expenseId, expenseData);
        } else {
            expenseCtx.addExpense(expenseData);
        }
        navigation.goBack()
    }


    return (
        <View style={styles.container}>
            <ExpenseForm
                onAdd={onAdd}
                onCancel={onCancel}
                isEditing={isEditing}
                defaultValue={selectedExpense}
            />

            {isEditing &&
                (
                    <View style={styles.deleteContainer}>
                        <IconButton
                            name='ios-trash-outline'
                            size={24}
                            color={colors.error500}
                            onPress={onDelete}

                        />
                    </View>
                )}
        </View>
    );
};

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: colors.primary800,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopColor: colors.primary200,
        borderTopWidth: 1,
        alignItems: 'center',
    },
})