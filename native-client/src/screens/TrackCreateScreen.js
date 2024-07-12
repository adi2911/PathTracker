import { FontAwesome } from "@expo/vector-icons";
import React, { useCallback, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import "../_mockLocation"; //for dev purpose
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);

  //updates the callback only when recording changes, not on all renders or updates
  // prevent passing updated callback each time
  const updateLocationCallback = useCallback(() => {
    (location) => addLocation(location, recording);
  }, [recording]);

  //If we are recording, we should keep the location tracking on even if we are not on the same screen
  const [error] = useLocation(isFocused || recording, updateLocationCallback);

  return (
    <SafeAreaView forceInset={{ tope: "always" }}>
      <Text h2> Create a Track</Text>
      <Map />
      {!!error && (
        <Text style={styles.errorMessage}>Please enable location services</Text>
      )}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontWeight: "bold",
  },
});

TrackCreateScreen.navigationOptions = {
  title: "Add Track", //title we show in the bottom navigator
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};
//Give us a prop isFocused that tells whether the component is focused or not
export default withNavigationFocus(TrackCreateScreen);
