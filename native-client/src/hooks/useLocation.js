import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export default (shouldStartTracking, locationUpdateCallback) => {
  const [error, setErr] = useState("");
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      //check when user's location update
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //every 1 second update
          distanceInterval: 10, // every 10 m update
        },
        locationUpdateCallback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldStartTracking) startWatching();
    else {
      subscriber && subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldStartTracking]);

  return [error];
};
