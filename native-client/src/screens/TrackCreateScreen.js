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

  const [error] = useLocation(isFocused, updateLocationCallback);

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

//Give us a prop isFocused that tells whether the component is focused or not
export default withNavigationFocus(TrackCreateScreen);
