import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import AuthContext, { AuthProvider } from "./src/context/AuthContext";
import VegetablesScreen from "./src/screens/VegetablesScreen";
import DrinksScreen from "./src/screens/DrinksScreen";
import FruitsScreen from "./src/screens/FruitsScreen";
import BreadsScreen from "./src/screens/BreadsScreen";
import SweetsScreen from "./src/screens/SweetsScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";

const Stack = createStackNavigator();

function App() {
  const { isLogged } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <>
            <Stack.Screen name={"Category"} component={CategoryScreen} />
            <Stack.Screen name={"Vegetables"} component={VegetablesScreen} />
            <Stack.Screen name={"Drinks"} component={DrinksScreen} />
            <Stack.Screen name={"Sweets"} component={SweetsScreen} />
            <Stack.Screen name={"Fruits"} component={FruitsScreen} />
            <Stack.Screen name={"Breads"} component={BreadsScreen} />
          </> 
        ) : (
          <>
            <Stack.Screen name="Register" component={RegistrationScreen} />
            <Stack.Screen name={"Login"} component={LoginScreen} />
          </>
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
