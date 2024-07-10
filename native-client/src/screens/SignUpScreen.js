import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signUp } = useContext(AuthContext);
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
      {state.errorMessage && (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      )}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() =>
            signUp({
              email,
              password,
            })
          }
        />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Spacer>
          <Text style={styles.link}>Already have and account? </Text>
          <Text style={styles.link}>Sign In Instead</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150, // To add extra space in the bottom and not keep it completely in the center
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: "blue",
  },
});

//navigationOptions can also be assinged as an object instead of function
SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false, // to remove the header in the mobile application for this particular screen
  };
};

export default SignUpScreen;
