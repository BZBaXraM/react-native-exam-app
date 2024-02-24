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

export default ItemCard;