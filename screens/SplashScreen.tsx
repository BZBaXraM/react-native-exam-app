import MyButton from "../src/components/MyButton";
import {ImageBackground, View, StyleSheet, Text} from "react-native";
import DIcon from "../assets/icons/DIcon";
import BoxIcon from "../assets/icons/BoxIcon";
import React from "react";

type SplashScreenProps = {
    navigation: any;
};
const SplashScreen = ({navigation}: SplashScreenProps) => {
    return (
        <View style={styles.container}>
            <DIcon style={styles.topIcon}/>
            <ImageBackground
                source={require('./../assets/bg.png')}
                style={styles.backgroundImage}>
                <View style={styles.bottomContainer}>
                    <View style={styles.iconContainer}>
                        <BoxIcon style={styles.icon}/>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Non-Contact Deliveries</Text>
                    </View>


                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>
                            When placing an order, select the option “Contactless delivery” and the courier will leave
                            your order at the door.
                        </Text>
                    </View>
                    <View
                        style={styles.buttonsContainer}>
                        <MyButton
                            textShown={true}
                            text="Dismiss"
                            textStyles={styles.dismissButtonText}
                            buttonStyles={styles.dismissButton}
                            iconColor="#9586A8"
                            iconShown={false}
                        />
                        <MyButton
                            textShown={true}
                            text="Order Now"
                            textStyles={styles.orderNowButtonText}
                            buttonStyles={styles.orderNowButton}
                            iconColor="#fff"
                            iconShown={false}
                            onPress={() => navigation.navigate("Category")}
                        />
                    </View>
                </View>
            </ImageBackground>

        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({

        container: {
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: "#A259FF"
        },
        topIcon: {
            position: 'absolute',
            top: '7%',
            left: '5%',
            padding: 15,
            borderRadius: 50,
            backgroundColor: "#CDFFB6"
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        bottomContainer: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#F6F5F5",
            padding: 20,
            height: '65%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
        },
        iconContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end"
        },
        icon: {
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 50
        },


        titleContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        title: {
            fontWeight: '700',
            fontSize: 34,
            lineHeight: 41,
            color: "#2D0C57",
            textAlign: "center"
        },

        descriptionContainer: {
            flex: 1,
        },
        description: {
            fontSize: 17,
            fontWeight: '400',
            lineHeight: 25,
            textAlign: "center",
            color: "#9586A8"
        },


        buttonsContainer: {
            flex: 1,
            justifyContent: "space-between"
        },
        orderNowButton: {
            alignItems: "center",
            justifyContent: "center",
        },
        dismissButton: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent"
        },
        dismissButtonText: {
            fontSize: 15,
            fontWeight: '600',
            lineHeight: 18,
            color: "#9586A8",
            textAlign: "center"
        },

        orderNowButtonText: {
            fontSize: 15,
            fontWeight: '600',
            lineHeight: 18,
            color: "#fff",
            textAlign: "center"
        }
    }
);