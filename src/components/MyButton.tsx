import React from 'react';
import {Pressable, Text, StyleSheet} from "react-native";


type CustomButtonProps = {
    iconShown: boolean;
    icon: any;
    textShown: boolean;
    text?: string;
    textStyles?: object;
    buttonStyles: object;
};
const MyButton = (props: CustomButtonProps) => {

    const {
        iconShown,
        icon,
        textShown,
        text,
        textStyles,
        buttonStyles,
    } = props;

    return (
        <Pressable style={[styles.container, buttonStyles]}>
            {iconShown && icon}
            {textShown &&
                <Text style={[styles.text, textStyles]}>{text}</Text>}
        </Pressable>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingVertical: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        backgroundColor: '#0BCE83',
        borderRadius: 8
    },
    text: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: "600",

    }
});

export default MyButton;