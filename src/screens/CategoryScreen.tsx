import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";

const mockData = [
  {
    title: "Sweets",
    image: require("../../assets/media9.png"),
  },
  {
    title: "Drinks",
    image: require("../../assets/media5.png"),
  },
  {
    title: "Vegetables",
    image: require("../../assets/media6.png"),
  },
  {
    title: "Bread",
    image: require("../../assets/media7.png"),
  },
  {
    title: "Fruits",
    image: require("../../assets/media8.png"),
  },
];

type CategoryScreenProps = {
  navigation: object | any;
};

const windowWidth = Dimensions.get("window").width;

const CategoryScreen = ({ navigation }: CategoryScreenProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredData = mockData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePress = (title: string) => {
    if (title === "Vegetables") {
      navigation.navigate("Vegetables");
    } else if (title === "Fruits") {
      navigation.navigate("Fruits");
    } else if (title === "Bread") {
      navigation.navigate("Breads");
    } else if (title === "Drinks") {
      navigation.navigate("Drinks");
    } else if (title === "Sweets") {
      navigation.navigate("Sweets");
    } else {
      Alert.alert("Error", "Category not found");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}></View>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search..."
      />
      <ScrollView contentContainerStyle={styles.itemCardContainer}>
        {filteredData.map((item, index) => (
          <TouchableOpacity
            style={styles.itemCard}
            key={index}
            onPress={() => handlePress(item.title)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 20,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    position: "relative",
    width: 370,
    height: 45,
    left: 0,
    top: 0,
    borderRadius: 10,
    backgroundColor: "#F6F5F5",
    paddingLeft: 15,
    fontSize: 18,
  },
  itemCardContainer: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemCard: {
    width: "45%",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  count: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
