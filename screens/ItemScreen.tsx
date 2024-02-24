import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const ItemScreen = () => {
  return (
    <View style={styles.item}>
      <Image
        style={[styles.mediaIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/media3.png")}
      />
      <Image
        style={styles.dotsIcon}
        contentFit="cover"
        source={require("../assets/dots.png")}
      />
      <View style={[styles.navigationBar, styles.mediaIconPosition]}>
        <View style={styles.background} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.backdrop, styles.backdropPosition]}>
        <View style={[styles.backdropBase, styles.backdropPosition]} />
        <Text style={styles.bostonLettuce}>Boston Lettuce</Text>
        <View style={[styles.buttonSecondary, styles.priceFlexBox]}>
          <Image
            style={styles.iconheart}
            contentFit="cover"
            source={require("../assets/iconheart1.png")}
          />
        </View>
        <View style={[styles.buttonprimaryWithIcon, styles.priceFlexBox]}>
          <Image
            style={styles.iconheart}
            contentFit="cover"
            source={require("../assets/iconshoppingcart1.png")}
          />
          <Text style={[styles.addToCart, styles.titleTypo]}>add to cart</Text>
        </View>
        <View style={[styles.price, styles.priceFlexBox]}>
          <Text style={[styles.text, styles.textLayout]}>1.10</Text>
          <Text style={[styles.piece, styles.textLayout]}>€ / piece</Text>
        </View>
        <Text style={[styles.title, styles.titleTypo]}>Spain</Text>
        <Text style={[styles.text1, styles.textTypo]}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>~ 150 gr / piece</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mediaIconPosition: {
    left: 0,
    top: 0,
  },
  backdropPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  priceFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    letterSpacing: 0,
  },
  textLayout: {
    lineHeight: 43,
    letterSpacing: -1,
    fontFamily: FontFamily.sFProText,
  },
  textTypo: {
    lineHeight: 26,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  mediaIcon: {
    height: 358,
    left: 0,
    top: 0,
    right: 0,
    maxWidth: "100%",
  },
  dotsIcon: {
    marginTop: -190,
    marginLeft: -20,
    top: "50%",
    left: "50%",
    width: 40,
    height: 8,
    position: "absolute",
  },
  background: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    display: "none",
    position: "absolute",
    backgroundColor: Color.background,
  },
  vectorIcon: {
    height: "12.5%",
    width: "1.45%",
    top: "64.58%",
    right: "93.48%",
    bottom: "22.92%",
    left: "5.07%",
    maxHeight: "100%",
  },
  navigationBar: {
    height: 96,
    position: "absolute",
    width: 414,
  },
  backdropBase: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    top: 0,
    bottom: 0,
    backgroundColor: Color.background,
  },
  bostonLettuce: {
    top: 37,
    fontSize: FontSize.size_11xl,
    lineHeight: 41,
    fontFamily: FontFamily.sFProDisplay,
    display: "flex",
    width: 374,
    alignItems: "center",
    letterSpacing: 0,
    textAlign: "left",
    color: Color.textPrimary,
    fontWeight: "700",
    left: 20,
    position: "absolute",
  },
  iconheart: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  buttonSecondary: {
    right: 316,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    bottom: 65,
    top: 494,
    flexDirection: "row",
    left: 20,
    overflow: "hidden",
  },
  addToCart: {
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "600",
    color: Color.white,
    marginLeft: 16,
  },
  buttonprimaryWithIcon: {
    right: 20,
    left: 119,
    backgroundColor: Color.primaryButton,
    paddingHorizontal: 68,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_5xs,
    bottom: 65,
    top: 494,
    flexDirection: "row",
  },
  text: {
    fontSize: 32,
    textAlign: "left",
    lineHeight: 43,
    letterSpacing: -1,
    color: Color.textPrimary,
    fontWeight: "700",
  },
  piece: {
    fontSize: 24,
    textAlign: "center",
    marginLeft: 5,
    color: Color.textSecondary,
  },
  price: {
    top: 94,
    left: 20,
    overflow: "hidden",
  },
  title: {
    top: 204,
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    width: 275,
    height: 24,
    color: Color.textPrimary,
    fontWeight: "700",
    fontFamily: FontFamily.sFProText,
    left: 20,
    position: "absolute",
  },
  text1: {
    top: 244,
    left: 21,
    width: 373,
    height: 194,
    color: Color.textSecondary,
  },
  text2: {
    top: 146,
    fontWeight: "500",
    color: "#06be77",
    left: 20,
  },
  backdrop: {
    top: 281,
  },
  item: {
    height: 896,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.background,
  },
});

export default ItemScreen;
