import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <Text> Account Screen</Text>
      <Spacer>
        <Button onPress={signOut} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AccountScreen;
