import React from 'react';
import {Pressable, Text, StyleSheet} from "react-native";

type CustomButtonProps = {
    iconShown: boolean;
    icon?: any;
    textShown: boolean;
    text: string;
    textStyles: object;
    buttonStyles?: object;
    iconColor: string;
    onPress?: () => void;
};

const MyButton = ({
                      iconShown, icon, textShown, text, textStyles, buttonStyles,
                      iconColor, onPress
                  }: CustomButtonProps) => {

    const IconComponent = icon;

    return (
        <Pressable style={[styles.container, buttonStyles]} onPress={onPress}>
            {iconShown && <IconComponent color={iconColor}/>}
            {textShown && <Text style={[styles.text, textStyles]}>{text}</Text>}
        </Pressable>
    );
};
export default MyButton;

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
        // fontFamily: 'SFProText-Regular'
    }
});