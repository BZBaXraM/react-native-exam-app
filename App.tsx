import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from "./screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import VegetablesScreen from "./screens/VegetablesScreen";
import ItemScreen from "./screens/ItemScreen";

const Stack = createStackNavigator();

function App() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         {/*<Stack.Screen name="Auth" component={RegistrationScreen}/>*/}
        //         <Stack.Screen name="Category" component={CategoryScreen}/>
        //         <Stack.Screen name="Login" component={LoginScreen}/>
        //         <Stack.Screen name="Vegetables" component={VegetablesScreen}/>
        //     </Stack.Navigator>
        // </NavigationContainer>

        <ItemScreen productName={"Boston Lettuce"} price={1.10} currency={'€'} weight={'150gr'} additionalSellingType={"piece"} country={"Spain"} sellingType={"price"} description={"Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled."} />
    );
}

export default App;