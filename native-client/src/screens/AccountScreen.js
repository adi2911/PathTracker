import { FontAwesome } from "@expo/vector-icons";
import React, { useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text> Account Screen</Text>
      <Spacer>
        <Button onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account", //title we show in the bottom navigator
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

export default AccountScreen;
