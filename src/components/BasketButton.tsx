import React from "react";
import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import BasketIconActive from "../../assets/icons/BasketIconActive";
import BasketIcon from "../../assets/icons/BasketIcon";

type Props = {
  hasTitle: boolean;
};

const BasketButton = ({ hasTitle }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Pressable
      style={hasTitle ? styles.btnbig : styles.btn}
      onPress={() => setIsActive(!isActive)}
    >
      {hasTitle ? (
        <View
          style={isActive ? styles.containerActiveBig : styles.containerBig}
        >
          {isActive ? (
            <>
              <BasketIconActive style={styles.basketIcon} />
              <Text style={styles.btnTitle}>ADD TO CARD</Text>
            </>
          ) : (
            <>
              <BasketIcon style={styles.basketIcon} />
              <Text style={styles.btnTitleActive}>ADD TO CARD</Text>
            </>
          )}
        </View>
      ) : (
        <View style={isActive ? styles.containerActive : styles.container}>
          {isActive ? (
            <BasketIconActive style={styles.basketIcon} />
          ) : (
            <BasketIcon style={styles.basketIcon} />
          )}
        </View>
      )}
    </Pressable>
  );
};

export default BasketButton;

const styles = StyleSheet.create({
  btnbig: {
    marginLeft: 60,
    width: 250,
  },
  btn: {
    width: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  basketIcon: {
    color: "D9D0E3",
    width: 22,
    height: 20,
  },
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ffffff",
    width: 45,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerActive: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#0bce83",
    width: 45,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBig: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ffffff",
    width: 250,
    height: 50,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerActiveBig: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#0bce83",
    width: 250,
    height: 50,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
    paddingLeft: 10,
  },
  btnTitleActive: {
    fontSize: 18,
    color: "#9586A8",
    fontWeight: "600",
    paddingLeft: 10,
  },
});
