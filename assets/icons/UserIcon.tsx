import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const UserIcon = (props: any) => {
    const {width, height, color} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 18}
                height={height ? height : 20}
                fill="none"
                {...props}
            >
                <Path
                    stroke={color ? color : "#14142B"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 19v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                />
            </Svg>
        </View>

    )};

const styles = StyleSheet.create({
    iconContainer: {
        // backgroundColor: '#a7cde1',
        // width: 40,
        // height: 40,
        // alignItems:"center",
        // justifyContent: "center",
        // borderRadius: 20,
    },

})


export default UserIcon;