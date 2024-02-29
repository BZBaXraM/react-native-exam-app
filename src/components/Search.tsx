import React from "react";
import {StyleSheet, View,  TextInput, Dimensions} from "react-native";
import SearchIcon from "../../assets/icons/SearchIcon";

type SearchProps = {
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
};
const Search = ({value, onChangeText, onSubmit}: SearchProps) => {


    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <SearchIcon color="#000000"/>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#9586A8"
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
            />
        </View>
    );
};

export default Search;

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        maxWidth: screenWidth - 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 10,
        borderRadius: 27,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    iconContainer: {},
    input: {
        flex: 1,
        fontSize: 19,
        fontWeight: '400',
        lineHeight: 22,
        color: '#000',
        borderWidth: 0,
        paddingLeft: 5
    },

});