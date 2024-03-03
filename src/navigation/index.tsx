import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import reen from "../screens/RegistrationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import ProductScreen from "../screens/ProductScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import Products from "../screens/ProductsScreen";
import Product from "../screens/ProductScreen";
import ProductsScreen from "../screens/ProductsScreen";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export type RootStackParams = {
  Home?: any;
  Login?: any;
  SignUp?: any;
  Categories?: any;
  Products?: any;
  Product?: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigation = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <RootStack.Navigator>
      {isLogged ? (
        <>
          {/* <RootStack.Screen name="Home" component={SplashScreen} /> */}
          <RootStack.Screen name="Categories" component={CategoryScreen} />
          <RootStack.Screen name="Products" component={ProductsScreen} />
          {/* <RootStack.Screen name="Products" component={ProductsScreen} /> */}
          <RootStack.Screen name="Product" component={ProductScreen} />
        </>
      ) : (
        <>
          <RootStack.Screen name="SignUp" component={RegistrationScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
