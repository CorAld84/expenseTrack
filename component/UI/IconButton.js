import { StyleSheet, Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function IconButton({ name, size, color, onPress }) {
    return (
        <>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressedStyle}>
                <View style={styles.buttonContainer}>
                    <Ionicons name={name} size={size} color={color} />
                </View>
            </Pressable>
        </>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 10,
    },
    pressedStyle: {
        opacity: 0.2,
    }

});