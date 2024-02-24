import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {Styles} from "../GlobalStyles";

const VegetablesScreen = () => {
  return (
    <View style={styles.vegetables}>
      <View style={[styles.itemRowView, styles.itemViewLayout]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.mediaIcon, styles.iconLayout]}
          contentFit="cover"
          // source={require("../assets/media.png")}
        />
        <Text style={styles.savoyCabbage}>{`Savoy Cabbage
`}</Text>
        <View style={styles.price}>
          <Text style={[styles.text, styles.textTypo]}>1.45</Text>
          <Text style={[styles.kg, styles.kgFlexBox]}>€ / kg</Text>
        </View>
        <View
          style={[styles.buttonsecondary, styles.buttonsecondarySpaceBlock]}
        >
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            // source={require("../assets/iconshoppingcart.png")}
          />
        </View>
        <View style={[styles.iconheartWrapper, styles.searchfieldBorder]}>
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            // source={require("../assets/iconheart.png")}
          />
        </View>
      </View>
      <View style={styles.vegetables1}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          // source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.itemRowView1, styles.itemViewLayout]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.mediaIcon, styles.iconLayout]}
          contentFit="cover"
          // source={require("../assets/media1.png")}
        />
        <Text style={styles.savoyCabbage}>{`Purple Cauliflower

`}</Text>
        <View style={styles.price}>
          <Text style={[styles.text, styles.textTypo]}>1.85</Text>
          <Text style={[styles.kg, styles.kgFlexBox]}>€ / kg</Text>
        </View>
        <View
          style={[styles.buttonsecondary, styles.buttonsecondarySpaceBlock]}
        >
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            // source={require("../assets/iconshoppingcart.png")}
          />
        </View>
        <View style={[styles.iconheartWrapper, styles.searchfieldBorder]}>
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconheart.png")}
          />
        </View>
      </View>
      <View style={[styles.itemRowView2, styles.itemViewLayout]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={styles.mediaIcon2}
          contentFit="cover"
          // source={require("../assets/media2.png")}
        />
        <Text style={styles.savoyCabbage}>{`Boston Lettuce

`}</Text>
        <View style={styles.price}>
          <Text style={[styles.text, styles.textTypo]}>1.10</Text>
          <Text style={[styles.kg, styles.kgFlexBox]}>€ / piece</Text>
        </View>
        <View
          style={[styles.buttonsecondary, styles.buttonsecondarySpaceBlock]}
        >
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            // source={require("../assets/iconshoppingcart.png")}
          />
        </View>
        <View style={[styles.iconheartWrapper, styles.searchfieldBorder]}>
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconheart.png")}
          />
        </View>
      </View>
      <Text style={[styles.title, styles.textTypo]}>Vegetables</Text>
      <View style={styles.search}>
        <View style={[styles.searchfield, styles.searchfieldBorder]} />
        <Text style={[styles.text3, styles.text3Position]}>Search</Text>
        <Image
          style={[styles.iconsearch, styles.text3Position]}
          contentFit="cover"
          // source={require("../assets/iconsearch.png")}
        />
      </View>
      <View style={[styles.chipsselecetd, styles.chipsselecetdSpaceBlock]}>
        <Image
          style={styles.iconcheck}
          contentFit="cover"

        />
        <Text style={[styles.abbageAndLettuce, styles.andTypo]}>
          Сabbage and lettuce (14)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd, styles.chipsselecetdSpaceBlock]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Сucumbers and tomatoes (10)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd1, styles.chipsunselecetdPosition]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Potatoes and carrots (4)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd2, styles.chipsunselecetdPosition]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Oinons and garlic (8)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd3, styles.chipsunselecetdPosition]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Peppers (7)
        </Text>
      </View>
      <Image
        style={styles.tabBarIcon}
        contentFit="cover"
        // source={require("../assets/tab-bar.png")}
      />
      <View style={styles.navigationBar}>
        <View style={[styles.background, styles.containerPosition]} />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          // source={require("../assets/vector1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemViewLayout: {
    height: 160,
    left: 0,
    position: "absolute",
    width: 414,
  },
  containerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Styles.Color.textPrimary,
    letterSpacing: 0,
  },
  kgFlexBox: {
    textAlign: "center",
    color: Styles.Color.textSecondary,
  },
  buttonsecondarySpaceBlock: {
    paddingVertical: Styles.Padding.xs3,
    paddingHorizontal: Styles.Padding.xl10,
    alignItems: "center",
    top: 104,
    borderRadius: Styles.Border.xs5,
    flexDirection: "row",
    overflow: "hidden",
  },
  searchfieldBorder: {
    borderWidth: 1,
    borderColor: Styles.Color.border,
    borderStyle: "solid",
    backgroundColor: Styles.Color.white,
    position: "absolute",
  },
  text3Position: {
    top: "25%",
    height: "50%",
    position: "absolute",
  },
  chipsselecetdSpaceBlock: {
    paddingVertical: Styles.Padding.xs9,
    paddingHorizontal: Styles.Padding.mini,
    height: 34,
    borderRadius: Styles.Border.xl5,
    top: 253,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  andTypo: {
    fontSize: Styles.FontSize.sm,
    fontFamily: Styles.FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
  },
  chipsunselecetdPosition: {
    top: 307,
    paddingVertical: Styles.Padding.xs9,
    paddingHorizontal: Styles.Padding.mini,
    height: 34,
    borderRadius: Styles.Border.xl5,
    backgroundColor: Styles.Color.white,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  container: {
    position: "absolute",
  },
  mediaIcon: {
    borderRadius: 6,
    left: "4.83%",
    bottom: "10%",
    right: "52.42%",
    top: "10%",
    width: "42.75%",
    height: "80%",
    maxHeight: "100%",
    position: "absolute",
  },
  savoyCabbage: {
    height: "15%",
    left: "52.42%",
    fontSize: Styles.FontSize.lg,
    fontWeight: "600",
    textAlign: "left",
    color: Styles.Color.textPrimary,
    fontFamily: Styles.FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
    top: "10%",
    width: "42.75%",
    position: "absolute",
  },
  text: {
    fontSize: Styles.FontSize.xl3,
    fontFamily: Styles.FontFamily.sFProText,
    lineHeight: 22,
  },
  kg: {
    fontSize: Styles.FontSize.base,
    marginLeft: 2,
    fontFamily: Styles.FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
  },
  price: {
    top: 52,
    alignItems: "flex-end",
    flexDirection: "row",
    left: 218,
    position: "absolute",
    overflow: "hidden",
  },
  iconshoppingCart: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  buttonsecondary: {
    left: 316,
    backgroundColor: Styles.Color.primaryButton,
    position: "absolute",
  },
  iconheartWrapper: {
    paddingVertical: Styles.Padding.xs3,
    paddingHorizontal: Styles.Padding.xl10,
    alignItems: "center",
    top: 104,
    borderRadius: Styles.Border.xs5,
    flexDirection: "row",
    overflow: "hidden",
    left: 218,
    borderColor: Styles.Color.border,
    borderStyle: "solid",
  },
  itemRowView: {
    top: 709,
  },
  vectorIcon: {
    height: "89.66%",
    width: "90%",
    top: "5%",
    right: "5%",
    bottom: "5.34%",
    left: "5%",
    position: "absolute",
  },
  vegetables1: {
    top: -40,
    left: 232,
    width: 234,
    height: 234,
    position: "absolute",
  },
  itemRowView1: {
    top: 541,
  },
  mediaIcon2: {
    borderRadius: Styles.Border.xs5,
    maxHeight: "100%",
    maxWidth: "100%",
    left: "4.83%",
    bottom: "10%",
    right: "52.42%",
    top: "10%",
    width: "42.75%",
    height: "80%",
    position: "absolute",
    overflow: "hidden",
  },
  itemRowView2: {
    top: 373,
  },
  title: {
    bottom: 758,
    fontSize: Styles.FontSize.xl11,
    lineHeight: 41,
    fontFamily: Styles.FontFamily.sFProDisplay,
    left: 20,
    position: "absolute",
  },
  searchfield: {
    borderRadius: Styles.Border.xl8,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  text3: {
    width: "77.54%",
    left: "16.58%",
    fontSize: Styles.FontSize.mid,
    color: Styles.Color.textSecondary,
    top: "25%",
    height: "50%",
    textAlign: "left",
    fontFamily: Styles.FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
  },
  iconsearch: {
    width: "6.42%",
    right: "87.7%",
    bottom: "25%",
    left: "5.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  search: {
    top: 165,
    right: 20,
    height: 48,
    left: 20,
    position: "absolute",
  },
  iconcheck: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  abbageAndLettuce: {
    fontWeight: "500",
    color: Styles.Color.colorBlueviolet_100,
    marginLeft: 8,
    textAlign: "left",
  },
  chipsselecetd: {
    backgroundColor: Styles.Color.selectedBGViolet,
    left: 20,
  },
  ucumbersAndTomatoes: {
    textAlign: "center",
    color: Styles.Color.textSecondary,
  },
  chipsunselecetd: {
    left: 253,
    backgroundColor: Styles.Color.white,
    paddingVertical: Styles.Padding.xs9,
    paddingHorizontal: Styles.Padding.mini,
    height: 34,
    borderRadius: Styles.Border.xl5,
    top: 253,
  },
  chipsunselecetd1: {
    left: 300,
  },
  chipsunselecetd2: {
    left: 20,
  },
  chipsunselecetd3: {
    left: 189,
  },
  tabBarIcon: {
    right: 0,
    bottom: -80,
    height: 80,
    maxWidth: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  background: {
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
    backgroundColor: Styles.Color.background,
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  vectorIcon1: {
    height: "12.5%",
    width: "1.45%",
    top: "64.58%",
    right: "93.48%",
    bottom: "22.92%",
    left: "5.07%",
    position: "absolute",
  },
  navigationBar: {
    top: 0,
    height: 96,
    left: 0,
    position: "absolute",
    width: 414,
  },
  vegetables: {
    height: 896,
    overflow: "hidden",
    width: 414,
    backgroundColor: Styles.Color.background,
  },
});

export default VegetablesScreen;
