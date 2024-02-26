import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {ProductService} from "../services/ProductService";
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

const LoginScreen = ({navigation}: LoginScreenProps) => {
    const service = new ProductService();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await service.login(email, password);
            if (response) {
                await AsyncStorage.setItem('accessToken', response);
                navigation.navigate('Category');
            } else {
                console.error('Error: Login response is undefined');
            }
        } catch (ex) {
            console.error(ex);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default LoginScreen;