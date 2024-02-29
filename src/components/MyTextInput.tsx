import {TextInput, View, StyleSheet, Dimensions} from "react-native";

type MyTextInputProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
};

const MyTextInput = ({label, value, onChangeText, placeholder}: MyTextInputProps) => {
    return (
        <View style={styles.container}>
            {label}
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
};

export default MyTextInput;

const styles = StyleSheet.create({
    container: {
        // marginHorizontal:15
        flexDirection: 'column',
        width: Dimensions.get('screen').width * 0.90,
        height: 70,
        gap: 5
    },
    label: {
        flex: 1,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        paddingHorizontal: 14,
        color: "#9586A8",
    },
    input: {
        flex: 1,
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: "#fff",
    },
});