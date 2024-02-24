import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const GridIcon = (props: any) => {
    const {width, height, color,boxInsideColor} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 20}
                height={height ? height : 20}
                fill={boxInsideColor}
                {...props}
            >
                <Path
                    stroke={color ? color : "#14142B"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 1H1v7h7V1ZM19 1h-7v7h7V1ZM19 12h-7v7h7v-7ZM8 12H1v7h7v-7Z"
                />
            </Svg>
        </View>

    )};

const styles = StyleSheet.create({
    iconContainer: {
        // backgroundColor: 'red',
        // width: 40,
        // height: 40,
        // alignItems:"center",
        // justifyContent: "center",
        // borderRadius: 20,
    },

})


export default GridIcon;