import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constans/styles";
import { getFormattedDate } from "../../util/date";

const color = GlobalStyles.colors

function ExpenseItem({ description, amount, date, id }) {

    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpenses', {
            expenseId: id
        });
    };

    return (
        <>
            <Pressable
                onPress={expensePressHandler}
                style={({ pressed }) => pressed && styles.pressed}
                android_ripple={{ color: 'yellow' }}
            >
                <View style={styles.expenseItem}>
                    <View>
                        <Text style={[styles.textBase, styles.description]}>
                            {description}
                        </Text>
                        <Text style={styles.textBase}>
                            {getFormattedDate(date)}
                        </Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>
                            {amount.toFixed(2)} $
                        </Text>
                    </View>
                </View>
            </Pressable>
        </>
    );
};

export default ExpenseItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
    expenseItem: {
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 2,
        backgroundColor: color.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: color.gray700,
        shadowRadius: 4,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.6,
    },
    textBase: {
        color: color.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',

    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 90,

    },
    amount: {
        color: color.primary500,
        fontWeight: 'bold',
    }

})