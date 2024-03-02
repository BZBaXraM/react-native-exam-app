import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ProductService } from "../services/ProductService";
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg";
import { Product } from "../types/Product";
import { useEffect } from "react";

export const HeartIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Defs>
      <ClipPath id="clip">
        <Rect width="20" height="20" fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip)">
      <Path
        d="M44.8794 12.8477C44.3232 12.6172 43.7271 12.4985 43.125 12.4985C42.5229 12.4985 41.9268 12.6172 41.3704 12.8477C40.8142 13.0781 40.3088 13.4159 39.8833 13.8417L39 14.7251L38.1167 13.8417C37.2568 12.9819 36.0908 12.499 34.875 12.499C33.6592 12.499 32.4929 12.9819 31.6333 13.8417C30.7734 14.7014 30.2905 15.8676 30.2905 17.0834C30.2905 18.2992 30.7734 19.4653 31.6333 20.3251L32.5166 21.2084L39 27.6918L45.4832 21.2084L46.3667 20.3251C46.7925 19.8994 47.1301 19.394 47.3606 18.8379C47.5911 18.2816 47.7097 17.6854 47.7097 17.0834C47.7097 16.4813 47.5911 15.8851 47.3606 15.329C47.1301 14.7727 46.7925 14.2673 46.3667 13.8417C45.9409 13.4159 45.4355 13.0781 44.8794 12.8477Z"
        stroke="#9586A8"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export const CartIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Defs>
      <ClipPath id="clip">
        <Rect width="20" height="20" fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip)">
      <Path
        d="M47.5713 14.1666L46.1428 22.738L34.7141 22.738L33.2856 14.1666L47.5713 14.1666Z"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M36.1428 27.5C35.6169 27.5 35.1904 27.0736 35.1904 26.5476C35.1904 26.0216 35.6169 25.5952 36.1428 25.5952C36.6687 25.5952 37.0952 26.0216 37.0952 26.5476C37.0952 27.0736 36.6687 27.5 36.1428 27.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M44.7144 27.5C44.1885 27.5 43.762 27.0736 43.762 26.5476C43.762 26.0216 44.1885 25.5952 44.7144 25.5952C45.2402 25.5952 45.6667 26.0216 45.6667 26.5476C45.6667 27.0736 45.2402 27.5 44.7144 27.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M33.2856 14.1666L30.4285 14.1666"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </G>
  </Svg>
);
const FruitsScreen = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const service = new ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await service.getFruits();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts().finally(() => console.log("Products fetched"));
  }, []);

  return (
    <View style={styles.container}>
      {products.map((product, index) => (
        <View key={index} style={styles.product}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <HeartIcon />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price} € / kg</Text>
          <CartIcon />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
});

export default FruitsScreen;
