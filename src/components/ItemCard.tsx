/*
import {Text, View, StyleSheet} from "react-native";
import {Image} from "expo-image";
import * as React from "react";

type ItemCardProps = {
    title: string;
    count: number;
    image: string;
}

const ItemCard = ({title, count, image}: ItemCardProps) => (
    <View style={styles.itemCard}>
        <View style={styles.card}/>
        <Text style={styles.pasta}>{title}</Text>
        <Text style={styles.text}>({count})</Text>
        <Image style={styles.mediaIcon} contentFit="cover" source={image}/>
        <View style={styles.cardBorder}/>
    </View>
);

const styles = StyleSheet.create({
    itemCard: {
        borderRadius: 5,
        width: "42.75%",
        height: "23.55%",
        position: "absolute",
    },
    card: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 5,
        height: "100%",
        width: "100%",
    },
    pasta: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: "bold",
        left: 20,
        position: "absolute",
        top: 20,
    },
    text: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: 20,
        left: 20,
        position: "absolute",
        top: 60,
    },
    mediaIcon: {
        height: "100%",
        position: "absolute",
        width: "100%",
    },
    cardBorder: {
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 5,
        borderWidth: 1,
        height: "100%",
        position: "absolute",
        width: "100%",
    },
});

export default ItemCard;*/


// Path: src/components/ItemCard.tsx


import {View, StyleSheet, Dimensions} from "react-native";
import {Text} from "react-native";
import {Image} from "expo-image";
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon";
import MyButton from "./MyButton";
import HeartIcon from "../../assets/icons/HeartIcon";

type CustomRowItemCardProps = {
    productImg: string;
    productName: string;
    productPrice: number;
    currency: string;
    sellingType: string;
};
const ItemCard = ({productImg, productName, productPrice, currency, sellingType}: CustomRowItemCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.leftSubContainer}>
                <Image source={{uri: productImg}} style={styles.image} resizeMode="cover"/>
            </View>

            <View style={styles.rightSubContainer}>
                <View style={styles.header}>
                    <Text style={styles.productName}>{productName}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.price}>
                        {productPrice}
                    </Text>
                    <Text style={styles.currencyAndSellingType}>
                        {currency} / {sellingType}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <MyButton
                        iconShown={true}
                        icon={<HeartIcon color="#9586A8"/>}
                        iconColor="red"
                        buttonStyles={styles.heartBtnStyle} textShown>

                    </MyButton>
                    <MyButton
                        iconShown={true}
                        icon={<ShoppingCartIcon color="#fff"/>}
                        iconColor="red"
                        buttonStyles={styles.shoppingCartBtnStyle}
                        textShown/>
                </View>
            </View>
        </View>
    );
};

export default ItemCard;

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        height: 160,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 5,
        // backgroundColor: "rgba(30,30,30,0.5)",
        // borderWidth: 1,
    },
    leftSubContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: "red",
        // borderWidth: 1,

    },
    image: {
        height: "100%",
        borderRadius: 8

    },
    rightSubContainer: {
        flex: 1,
        // borderWidth: 1

    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        // borderWidth: 1,
        // alignItems: 'center'
    },
    productName: {
        // paddingHorizontal: 20
        fontSize: 18,
        fontWeight: "600"
    },
    body: {
        flex: 1,
        // borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 5,
        alignItems: 'flex-start',
        // justifyContent: "flex-start"
    },
    price: {
        fontSize: 22,
        fontWeight: "700"
    },
    currencyAndSellingType: {
        fontSize: 16,
        fontWeight: "400",
        color: 'rgba(0,0,0,0.5)',

    },
    footer: {
        // borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
    },
    heartBtnStyle: {
        paddingHorizontal: 25,
        // paddingVertical: 30,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#D9D0E3"
    },
    shoppingCartBtnStyle: {
        paddingHorizontal: 25,
        // paddingVertical: 30,
        // backgroundColor: '#fff'
    }


});