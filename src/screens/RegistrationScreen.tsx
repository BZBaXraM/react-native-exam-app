import { View, StyleSheet, Button, TextInput } from "react-native";
import { ProductService } from "../services/ProductService";
import React, { useState } from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type RegistrationScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const RegistrationScreen = ({ navigation }: RegistrationScreenProps) => {
  const service = new ProductService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await service.register(email, password);
      if (response) {
        console.log("Registration successful");
        // navigation.navigate("Login");
      } else {
        console.error("Error: Registration response is undefined");
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
        secureTextEntry={false}
      />
      <Button title="Register" onPress={handleRegistration} />

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default RegistrationScreen;
