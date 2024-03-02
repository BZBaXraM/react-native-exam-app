import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import AuthContext, { AuthProvider } from './src/context/AuthContext';
import VegetablesScreen from "./src/screens/VegetablesScreen";

const Stack = createStackNavigator();

function App() {
    const { isLogged } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLogged ? (
                    <>
                        <Stack.Screen name={"Category"} component={CategoryScreen}/>
                        <Stack.Screen name={"Vegetables"} component={VegetablesScreen}/>
                         {/*other screens for logged in users */}
                    </>
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);