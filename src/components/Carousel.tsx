import {
    FlatList,
    Image,
    View,
    Dimensions,
    StyleSheet
} from "react-native";
import React, {useEffect, useRef, useState} from "react";


type CarouselProps = {
    images: string[];
};
const Carousel = ({images}: CarouselProps) => {
    const flautistRef = useRef<FlatList<any>>(null);
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const imageHeight = screenHeight * 0.4
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeIndex === carouselData.length - 1) {
                flautistRef.current?.scrollToIndex({
                    index: 0,
                    animated: true,
                });
            } else {
                flautistRef.current?.scrollToIndex({
                    index: activeIndex + 1,
                    animated: true,
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    });

    const getItemLayout = (data: ArrayLike<any>, index: number) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const carouselData = images.map((image, index) => ({
        id: `0${index + 1}`,
        image: image,
    }));


    const renderItem = ({item, index}: { item: any, index: number }) => {
        return (
            <View>
                <Image
                    source={item.image}
                    style={{height: imageHeight, width: screenWidth, zIndex: -1}}
                />
            </View>
        );
    };

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;

        const index = scrollPosition / screenWidth;

        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return carouselData.map((dot, index) => {

            return activeIndex === index ? (
                <View
                    style={{
                        backgroundColor: "#fff",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        marginHorizontal: 6,
                    }}
                ></View>
            ) : (
                <View
                    key={index}
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        marginHorizontal: 6,
                    }}
                ></View>
            );
        });
    };

    return (
        <View>
            <View style={styles.container}>
                {renderDotIndicators()}
            </View>

            <FlatList
                data={carouselData}
                ref={flautistRef}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
            />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 30,
                }}>
            </View>
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 90,
        left: "50%",
        flexDirection: "row",
        transform: [{translateX: -50}],
        zIndex: 99
    },

});