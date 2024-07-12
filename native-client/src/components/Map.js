import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const initialLocation = {
  longitude: -122.0312186,
  latitude: 37.33233141,
};
//Polyline is used to draw line.
const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  return currentLocation ? (
    <MapView
      initialRegion={{
        ...initialLocation, //When using physical device location for testing , we have to use ...currentLocation.coords
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}

      // region property will keep the map in the same region as that of initial region, if we try to drag around
      // region={{  ...currentLocation.coords,   latitudeDelta: 0.01, longitudeDelta: 0.01}}
    >
      <Polyline coordinates={locations.map((location) => location.coords)} />
      <Circle
        center={currentLocation.coords}
        radius={50}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  ) : (
    <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
