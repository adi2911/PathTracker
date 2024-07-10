import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackListScreen = () => {
  return (
    <View>
      <Text> TrackList Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
