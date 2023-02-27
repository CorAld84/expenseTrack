import { View, StyleSheet, Text, Alert, TextComponent } from "react-native";

import Input from "./Input";
import { GlobalStyles } from "../constans/styles";
import { useState } from "react";

const colors = GlobalStyles.colors;
import CustomButton from '../component/UI/CustomButton';
import { getFormattedDate } from "../util/date";

function ExpenseForm({ onCancel, onAdd, isEditing, defaultValue }) {

    /* 
    You can use 3 useState and 3 function but you can use only one with object inside

    const [amountValue, setAmountValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    function amountChangeHandler(entered) {
        setAmountValue(entered);
    };
    
    function dateChangeHandler(entered) {
        setDateValue(entered);
    };

    function descriptionChangeHandler(entered) {
        setDescriptiontValue(entered);
    };
    
    */

    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValue ? defaultValue.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValue ? getFormattedDate(defaultValue.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValue ? defaultValue.description.toString() : '',
            isValid: true,
        },
    });

    function InputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        })
    };

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            //Alert.alert('Invalid Input', 'Please Check Input')
            setInputs((currentInputs) => {
                return {
                    amount: { value: currentInputs.amount.value, isValid: amountIsValid },
                    date: { value: currentInputs.date.value, isValid: dateIsValid },
                    description: { value: currentInputs.description.value, isValid: descriptionIsValid },

                }
            })
            return;
        }

        onAdd(expenseData);
    };

    const formIsInvalidAmount = !inputs.amount.isValid;
    const formIsInvalidDate = !inputs.date.isValid;
    const formIsInvalidDescription = !inputs.description.isValid;



    return (
        <>
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Your Expense</Text>
                <View style={styles.amountDateConatiner}>
                    <View>
                        <Input
                            label='Amount'
                            style={styles.rowInput}
                            textInputConfig={{
                                keyboardType: 'decimal-pad',
                                onChangeText: InputChangeHandler.bind(this, 'amount'),
                                placeholder: '$',
                                value: inputs.amount.value,

                            }}
                        />
                        {formIsInvalidAmount && <Text>fuck no valid amount</Text>}
                    </View>
                    <Input
                        label='Date'
                        style={styles.rowInput}
                        textInputConfig={{
                            placeholder: 'YYYY-MM-DD',
                            maxLength: 10,
                            onChangeText: InputChangeHandler.bind(this, 'date'),
                            keyboardType: 'number-pad',
                            value: inputs.date.value
                        }}
                    />
                </View>
                <Input
                    label='Description'
                    textInputConfig={{
                        multiline: true,
                        autocorrect: false,
                        autoCapitalize: 'none',
                        onChangeText: InputChangeHandler.bind(this, 'description'),
                        value: inputs.description.value
                    }}
                />
                {(formIsInvalidAmount || formIsInvalidDate || formIsInvalidDescription) && <Text style={styles.textTitle}>not valid died</Text>}
                <View style={styles.buttonContainer}>
                    <CustomButton
                        mode='flat'
                        onPress={onCancel}
                        style={styles.button}
                    >
                        Cancel
                    </CustomButton>
                    <CustomButton
                        onPress={submitHandler}
                        style={styles.button}
                    >
                        {isEditing ? 'Update' : 'Add'}
                    </CustomButton>
                </View>
            </View>
        </>
    )
};

export default ExpenseForm;

const styles = StyleSheet.create({
    mainContainer: {
        //flex: 1,
        marginTop: '20%'
    },
    textTitle: {
        fontSize: 25,
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.primary200,
        marginBottom: 12,
        fontWeight: 'bold',
    },
    amountDateConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 130,
        marginHorizontal: 10,
    }
})

