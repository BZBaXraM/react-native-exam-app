import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import Search from "../components/Search";
import { RootStackParams } from "../navigation";
import React, { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";
import { Product } from "../types/Product";

type Props = {
  route: any;
  navigation: StackNavigationProp<RootStackParams, "Login">;
  category: string;
};

const windowWidth = Dimensions.get("window").width;

const ProductsScreen = ({ navigation, route }: Props) => {
  const { category } = route.params;
  const service = new ProductService();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = [];
        if (selectedCategory === "Breads") {
          response = await service.getBreads();
        } else if (selectedCategory === "Drinks") {
          response = await service.getDrinks();
        } else if (selectedCategory === "Fruits") {
          response = await service.getFruits();
        } else if (selectedCategory === "Vegetables") {
          response = await service.getVegetables();
        } else if (selectedCategory === "Sweets") {
          response = await service.getSweets();
        } else {
          response = await service.getSweets(); // Если нет категории, по умолчанию получаем товары категории "Sweets"
        }

        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Вызываем функцию получения товаров  при загрузке экрана
  }, [selectedCategory]); // При изменении выбранной категории, вызываем функцию получения товаров

  const drawProducts = () => {
    // return products.filter((product: any, i: number) => (
    //   <ProductItem
    //     product={product}
    //     key={i}
    //     navigation={navigation}
    //     image={product.image}
    //   />
    // ));
    return products
      .filter((x) => selectedCategory === "" || x.category === selectedCategory)
      .map((product: any, i: number) => (
        <ProductItem
          product={product}
          key={i}
          navigation={navigation}
          image={product.image}
        />
      ));
  };

  const setCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <Title title={"Products"} />
        <View style={styles.mainContainer}>
          <Search />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          >
            {drawProducts()}
          </ScrollView>
        </View>
      </View>
      <StatusBar style="auto" />
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
