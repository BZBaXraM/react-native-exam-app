import {StatusBar} from "expo-status-bar";
import {StyleSheet, Dimensions, View, Text, ImageBackground} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import FavoriteButton from "../components/FavoriteButton";
import BasketBtn from "../components/BasketBtn";
import {Product} from "../types/Product";

const windowDimensions = Dimensions.get("window");


type Props = {
    route: any;
};
export default function ProductScreen({route}: Props) {
    const product = route.params.product;
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={product.image} resizeMode="cover" style={styles.image}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{product.price}</Text>
                    </View>
                    <Text style={styles.weight}>~ 150 gr / piece</Text>
                    <Text style={styles.country}>{product.country}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <View style={styles.buttons}>
                        <FavoriteButton isBig={true}/>
                        <BasketBtn hasTitle={true}/>
                    </View>
                </View>
                <StatusBar style="auto"/>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {height: windowDimensions.height},
    image: {height: windowDimensions.height / 2, alignItems: "center"},
    detailsContainer: {
        marginTop: 290,
        height: windowDimensions.height * 0.7,
        width: windowDimensions.width,
        backgroundColor: "#F6F5F5",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 25,
        paddingTop: 40,
        alignItems: "flex-start",
    },
    priceContainer: {paddingTop: 20, paddingBottom: 10, flexDirection: "row"},
    price: {color: "#2D0C57", fontSize: 28, fontWeight: "bold", marginRight: 5},
    unit: {color: "#9586A8", fontSize: 22},
    title: {color: "#2D0C57", fontWeight: "bold", fontSize: 34},
    weight: {paddingBottom: 30, color: "#06BE77", fontWeight: "500", fontSize: 17},
    country: {fontSize: 22, fontWeight: "700", color: "#2D0C57"},
    description: {
        color: "#9586A8",
        flexWrap: "wrap",
        fontSize: 17,
        width: windowDimensions.width * 0.9,
        paddingVertical: 10
    },
    buttons: {flexDirection: "row"},
});