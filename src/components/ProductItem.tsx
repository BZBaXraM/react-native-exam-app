import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { ImageSourcePropType } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import FavoriteButton from "./FavoriteButton";
import BasketBtn from "./BasketBtn";
import { RootStackParams } from "../navigation";
import { Product } from "../types/Product";
import { ProductService } from "../services/ProductService";

const windowWidth = Dimensions.get("window").width;

type Props = {
  product: Product;
  navigation: StackNavigationProp<RootStackParams, "Login">;
  image: ImageSourcePropType;
};

const ProductItem = ({ product, navigation, image }: Props) => {
  const service = new ProductService();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await service.getDrinks();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Product", {
          product: product,
        })
      }
    >
      <View style={{ flexDirection: "row", width: windowWidth * 0.5 }}>
        <ImageBackground
          source={{ uri: product.image }}
          borderRadius={15}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}></View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.pieceOrKg}>€ / {product.price}</Text>
          </View>
          <View style={styles.btnsContainer}>
            <FavoriteButton isBig={false} />
            <BasketBtn hasTitle={false} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.5,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 210,
    borderRadius: 15,
  },
  image: {
    alignItems: "center",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderRadius: 15,
  },
  content: {
    width: windowWidth * 0.42,
    height: 210,
    paddingHorizontal: 10,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "500",
    fontSize: 22,
  },
  priceContainer: {
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    color: "#2D0C57",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 5,
  },
  pieceOrKg: {
    color: "#9586A8",
    fontSize: 18,
  },
  btnsContainer: {
    flex: 1,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
