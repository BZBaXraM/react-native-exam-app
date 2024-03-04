import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet, Dimensions, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {SafeAreaView} from "react-native-safe-area-context";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import Search from "../components/Search";
import {RootStackParams} from "../navigation";
import React, {useEffect, useState} from "react";
import {ProductService} from "../services/ProductService";
import {Product} from "../types/Product";

type Props = {
    route: any;
    navigation: StackNavigationProp<RootStackParams, "Login">;
    category: string;
};

const windowWidth = Dimensions.get("window").width;

const ProductsScreen = ({navigation, route}: Props) => {
    const {category} = route.params;
    const service = new ProductService();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await service.getProductsByCategory(category);
            setProducts(response);
        };

        fetchProducts().then(r => console.log("Products fetched"));
    }, [category]);

    const getProducts = () => {
        return products.map((product: any, i: number) => (
            <ProductItem
                product={product}
                key={i}
                navigation={navigation}
                image={product.image}
            />
        ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.whiteContainer}>
                <Title title={"Products"}/>
                <View style={styles.mainContainer}>
                    <Search/>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.productsContainer}
                    >
                        {getProducts()}
                    </ScrollView>
                </View>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    whiteContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#F6F5F5",
    },
    mainContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    productsContainer: {
        width: windowWidth * 0.9,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        rowGap: 20,
    },
});

export default ProductsScreen;