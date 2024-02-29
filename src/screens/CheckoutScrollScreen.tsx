import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import {Image} from "expo-image";

type CheckoutScrollViewProps = {
    text: string;
    top: number;
    icon?: string;
};

const Title = ({text, top}: CheckoutScrollViewProps) => (
    <Text style={[styles.title, {top}]}>{text}</Text>
);

const Address = ({top, text, icon}: CheckoutScrollViewProps) => (
    <View style={[styles.address, {top}]}>
        <Text style={styles.text}>{text}</Text>
        <Image style={styles.icon} contentFit="cover" source={require(`../assets/${icon}.png`)}/>
    </View>
);

const Switch = ({top}: CheckoutScrollViewProps) => (
    <View style={[styles.switch, {top}]}>
        <View style={styles.background1}/>
        <View style={styles.knob}/>
        <Text style={styles.yes}>Yes</Text>
    </View>
);

const CheckoutScrollScreen = () => {
    return (
        <View style={styles.checkoutScrollView}>
            <Title text="Delivery address" top={248}/>
            <Title text="PaymentScreen method" top={120}/>
            <Title text="Delivery options" top={480}/>
            <Title text="Non-contact-delivery" top={744}/>
            <Address top={288} text={`Alexandra Smith\nCesu 31 k-2 5.st, SIA Chili\nRiga\nLV–1012\nLatvia`}
                     icon="iconhome"/>
            <Address top={520} text="I’ll pick it up myself" icon="iconwalking"/>
            <Address top={160} text="**** **** **** 4747" icon="iconcreditcard"/>
            <Address top={584} text="By courier" icon="iconbike"/>
            <Address top={648} text="By Drone" icon="icondrone"/>
            <Switch top={741} text={
                "Non-contact delivery\nI’ll pick it up myself\nBy courier\nBy Drone"
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        width: 275,
        height: 24,
        color: Color.textPrimary,
        fontWeight: "700",
        fontSize: FontSize.size_3xl,
        left: 20,
        textAlign: "left",
        position: "absolute",
    },
    address: {
        height: 160,
        position: "absolute",
        width: 414,
    },
    text: {
        left: 69,
        width: 197,
        height: 128,
        lineHeight: 26,
        fontSize: FontSize.size_mid,
        color: Color.textSecondary,
        top: 16,
        textAlign: "left",
        position: "absolute",
    },
    icon: {
        width: 24,
        top: 16,
        height: 24,
        left: 20,
        position: "absolute",
        overflow: "hidden",
    },
    switch: {
        height: 30,
        width: 74,
        right: 20,
        position: "absolute",
    },
    background1: {
        borderRadius: 37,
        backgroundColor: Color.selectedBGViolet,
        height: 30,
        width: 74,
        right: 0,
        top: 0,
    },
    knob: {
        top: 2,
        right: 2,
        borderRadius: 100,
        backgroundColor: Color.white,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowRadius: 8,
        elevation: 8,
        width: 26,
        height: 26,
        position: "absolute",
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    yes: {
        top: 4,
        right: 36,
        fontSize: FontSize.size_sm,
        fontWeight: "500",
        color: Color.colorBlueviolet_100,
        textAlign: "left",
        position: "absolute",
    },
    checkoutScrollView: {
        height: 896,
        overflow: "hidden",
        width: 414,
        backgroundColor: Color.background,
    },
});

export default CheckoutScrollScreen;