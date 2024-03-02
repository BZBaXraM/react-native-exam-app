import React, {useContext, useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import AuthContext from '../context/AuthContext';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);

    const handleSubmit = () => {
        login(email, password).then(r => console.log(r));
    };

    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <TextInput style={
                {
                    marginBottom: 25,
                    width: 200,
                    borderBottomColor: 'black',
                }
            } placeholder="Email" onChangeText={setEmail} value={email}/>
            <TextInput style={
                {
                    marginBottom: 25,
                    width: 200,
                    borderBottomColor: 'black',
                }
            } placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry/>
            <Button color={'black'} title="Submit" onPress={handleSubmit}/>
        </View>
    );
};

export default LoginScreen;
