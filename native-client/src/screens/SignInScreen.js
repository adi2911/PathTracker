import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        onWillBlur={clearErrorMessage}
      />
      <Spacer>
        <Text h3> SignIn for Tracker</Text>
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
          title="Sign In"
          onPress={() =>
            signIn({
              email,
              password,
            })
          }
        />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Spacer>
          <Text style={styles.link}>Do not have an account? </Text>
          <Text style={styles.link}>Sign Up Instead</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
SignInScreen.navigationOptions = () => {
  return {
    headerShown: false, // to remove the header in the mobile application for this particular screen
  };
};

export default SignInScreen;
