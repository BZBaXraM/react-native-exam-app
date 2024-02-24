import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const DroneIcon = (props: any) => {
    const {width, height, color} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 24}
                height={height ? height : 24}
                fill="none"
                {...props}
            >
                <Path
                    fill={color ? color : "#14142B"}
                    d="M23.794 16.679a.702.702 0 0 0-.993 0l-1.86 1.86a1.849 1.849 0 0 0-1.408 0l-4.074-4.075V9.532l4.07-4.07a1.835 1.835 0 0 0 1.41 0l1.858 1.86a.7.7 0 0 0 .993 0 .702.702 0 0 0 0-.994l-1.86-1.86a1.84 1.84 0 0 0-.397-2.003 1.84 1.84 0 0 0-2.004-.398L17.67.207a.703.703 0 0 0-.993.993l1.86 1.86c-.186.45-.186.959 0 1.408l-3.918 3.918-2.22-1.132a.878.878 0 0 0-.796 0L9.38 8.387 5.46 4.468c.186-.45.186-.958 0-1.408L7.32 1.2a.702.702 0 1 0-.993-.993l-1.86 1.86a1.84 1.84 0 0 0-2.004.398 1.84 1.84 0 0 0-.398 2.003l-1.86 1.86a.702.702 0 1 0 .994.993l1.859-1.858a1.836 1.836 0 0 0 1.41 0L8.54 9.536v4.932l-4.07 4.07a1.849 1.849 0 0 0-1.408 0l-1.86-1.86a.702.702 0 1 0-.993.994l1.858 1.859c-.091.22-.14.459-.14.705 0 .49.192.952.54 1.3a1.832 1.832 0 0 0 2.003.397l1.86 1.86a.7.7 0 0 0 .993 0 .702.702 0 0 0 0-.994l-1.859-1.858a1.835 1.835 0 0 0 0-1.41l3.917-3.917 2.22 1.132a.875.875 0 0 0 .795 0l2.223-1.133 3.918 3.918a1.836 1.836 0 0 0 0 1.41l-1.858 1.858a.702.702 0 0 0 .993.994l1.86-1.86a1.842 1.842 0 0 0 2.003-.398c.348-.347.539-.808.539-1.3 0-.245-.048-.484-.14-.704l1.86-1.859a.702.702 0 0 0 0-.993ZM19.927 3.458a.432.432 0 0 1 .612 0 .434.434 0 1 1-.612 0ZM4.069 4.07a.43.43 0 0 1-.612 0 .434.434 0 1 1 .612 0Zm.004 16.472a.434.434 0 1 1-.612-.614.434.434 0 0 1 .612.614Zm9.98-6.218L12 15.372l-2.054-1.046v-4.65L12 8.63l2.054 1.046v4.65Zm6.49 6.218a.434.434 0 1 1-.612-.614.434.434 0 0 1 .612.614Z"
                />
            </Svg>
        </View>

    )
};

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


export default DroneIcon;