import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import CategoryScreen from "../screens/CategoryScreen";
import VegetablesScreen from "../screens/VegetablesScreen";
import LoginScreen from "../screens/LoginScreen";
import DrinksScreen from "../screens/DrinksScreen";
import BreadsScreen from "../screens/BreadsScreen";
import FruitsScreen from "../screens/FruitsScreen";
import SweetsScreen from "../screens/SweetsScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Splash"} component={SplashScreen}/>
            <Stack.Screen name={"Category"} component={CategoryScreen}/>
            <Stack.Screen name={"Vegetables"} component={VegetablesScreen}/>
            <Stack.Screen name={"Drinks"} component={DrinksScreen}/>
            <Stack.Screen name={"Fruits"} component={FruitsScreen}/>
            <Stack.Screen name={"Breads"} component={BreadsScreen}/>
            <Stack.Screen name={"Sweets"} component={SweetsScreen}/>
            <Stack.Screen name={"Login"} component={LoginScreen}/>
            {/*<Stack.Screen name={"Item"} component={ItemScreen}/>*/}
        </Stack.Navigator>
    );
}

export default RootNavigation;