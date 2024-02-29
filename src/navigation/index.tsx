import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import CategoryScreen from "../screens/CategoryScreen";
import VegetablesScreen from "../screens/VegetablesScreen";
import LoginScreen from "../screens/LoginScreen";
import ItemScreen from "../screens/ItemScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Category" component={CategoryScreen}/>
            <Stack.Screen name="Vegetables" component={VegetablesScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            {/*<Stack.Screen name={"Item"} component={ItemScreen}/>*/}
        </Stack.Navigator>
    );
}

export default RootNavigation;