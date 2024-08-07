import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");

  const { state } = useContext(TrackContext);

  const track = state.find((tr) => tr._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text style={styles.trackName}> {track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  trackName: { fontSize: 48 },
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
