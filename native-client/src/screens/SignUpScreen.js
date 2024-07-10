import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/spacer";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> SignUp for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // To keep the password hidden
      />
      <Spacer />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150, // To add extra space in the bottom and not keep it completely in the center
  },
});

//navigationOptions can also be assinged as an object instead of function
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false, // to remove the header in the mobile application for this particular screen
  };
};

export default SignUpScreen;
