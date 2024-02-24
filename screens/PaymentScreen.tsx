import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import {Image} from "expo-image";
import {Styles} from "../GlobalStyles";

type TextFieldProps = {
    top: number;
    text: string;
    hint: string;
};

const TextField = ({top, text, hint}: TextFieldProps) => (
    <View style={[styles.textField, {top}]}>
        <View style={styles.container}/>
        <View style={styles.text}>
            <Text style={styles.alexandraSmith}>{text}</Text>
        </View>
        <View style={styles.hint}>
            <Text style={styles.nameOnCard}>{hint}</Text>
        </View>
    </View>
);

type IconProps = {
    source: string;
    style: object;
};
const Icon = ({source, style}: IconProps) => (
    <Image style={style} contentFit="cover" source={require(`../assets/${source}.png`)}/>
);

const PaymentScreen = () => {
    return (
        <View style={styles.payment}>
            <Text style={styles.title}>Credit / Debit card</Text>
            <Icon source="card" style={[styles.cardIcon, styles.iconPosition]}/>
            <TextField top={465} text="Alexandra Smith" hint="Name on card"/>
            <TextField top={558} text="4747 4747 4747 4747" hint="Card number"/>
            <TextField top={651} text="07/21" hint="Expiry date"/>
            <TextField top={651} text="474" hint="CVC"/>
            <Icon source="hint" style={styles.hintIcon}/>
            <Icon source="mc-symbol-1" style={styles.mcSymbol1Icon}/>
        </View>
    );
};

const styles = StyleSheet.create({
    iconPosition: {
        top: "50%",
        position: "absolute",
    },
    containerPosition: {
        borderRadius: Styles.Border.xs5,
        bottom: 0,
        right: 0,
        left: 0,
        position: "absolute",
    },
    textPosition: {
        height: 70,
        right: 20,
        left: 20,
        position: "absolute",
    },
    textFlexBox: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        overflow: "hidden",
    },
    nameOnCardTypo: {
        lineHeight: 22,
        fontFamily: Styles.FontFamily.sFProText,
        textAlign: "left",
        letterSpacing: 0,
    },
    textLayout: {
        height: 69,
        width: 176,
        position: "absolute",
    },
    title: {
        top: 97,
        fontSize: Styles.FontSize.xl11,
        lineHeight: 41,
        fontWeight: "700",
        fontFamily: Styles.FontFamily.sFProDisplay,
        textAlign: "left",
        letterSpacing: 0,
        color: Styles.Color.textPrimary,
        left: 20,
        position: "absolute",
    },
    cardIcon: {
        marginTop: -289,
        width: 374,
        height: 240,
        left: 20,
    },
    textField: {
        height: 70,
        right: 20,
        left: 20,
        position: "absolute",
    },
    container: {
        backgroundColor: Styles.Color.white,
        borderStyle: "solid",
        borderColor: Styles.Color.border,
        borderWidth: 1,
        height: 48,
    },
    alexandraSmith: {
        fontSize: Styles.FontSize.mid,
        color: Styles.Color.textPrimary,
        lineHeight: 22,
    },
    text: {
        top: 35,
        left: 13,
    },
    nameOnCard: {
        fontSize: Styles.FontSize.sm,
        color: Styles.Color.textSecondary,
    },
    hint: {
        left: 14,
        top: 0,
        alignItems: "center",
        flexDirection: "row",
    },
    hintIcon: {
        top: 34,
        left: 123,
        width: 36,
        height: 26,
        position: "absolute",
    },
    mcSymbol1Icon: {
        top: 593,
        right: 37,
        width: 32,
        height: 20,
        position: "absolute",
    },
    payment: {
        height: 896,
        overflow: "hidden",
        width: 414,
        backgroundColor: Styles.Color.background,
    },
});

export default PaymentScreen;