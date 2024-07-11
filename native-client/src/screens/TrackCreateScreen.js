import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import "../_mockLocation"; //for dev purpose
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [error, setErr] = useState("");

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      //check when user's location update
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //every 1 second update
          distanceInterval: 10, // every 10 m update
        },
        (location) => {
          console.log("Location updated to :", location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ tope: "always" }}>
      <Text h2> Create a Track</Text>
      <Map />
      {!!error && (
        <Text style={styles.errorMessage}>Please enable location services</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontWeight: "bold",
  },
});
export default TrackCreateScreen;
