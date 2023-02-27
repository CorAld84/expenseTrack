import { TextInput, View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from '../constans/styles';
import { color } from "react-native-reanimated";

const colors = GlobalStyles.colors

function Input({ label, textInputConfig, style }) {

    let inputStyle = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyle.push(styles.inputMultiline)

        // or if you copy the proprieties of input in inpuMultiline => inputStyle = [styles.inputMultiline]
    } else {
        inputStyle = [styles.input]
    }


    return (
        <>
            <View style={[styles.inputContainer, style]}>
                <Text style={styles.label}>
                    {label}
                </Text>
                <TextInput {...textInputConfig} style={inputStyle} />
            </View>
        </>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 19,
        color: colors.primary100,
        marginBottom: 4,
    },
    input: {
        backgroundColor: colors.primary100,
        padding: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.primary400,
        fontSize: 18,
        color: colors.primary700,

    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
});
