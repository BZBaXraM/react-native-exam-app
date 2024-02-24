import * as React from "react";
import RootNavigation from "./navigation";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigation/>
        </NavigationContainer>
    );
};
export default App;