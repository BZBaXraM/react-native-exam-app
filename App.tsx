import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import RootNavigation from "./src/navigation";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;