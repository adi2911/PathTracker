import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export default (shouldStartTracking, locationUpdateCallback) => {
  const [error, setErr] = useState("");

  useEffect(() => {
    let subscriber = null;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Location permission not granted");
        }
        //check when user's location update
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, //every 1 second update
            distanceInterval: 10, // every 10 m update
          },
          locationUpdateCallback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldStartTracking) {
      startWatching();
    } else {
      subscriber && subscriber.remove();
      subscriber = null;
    }

    //ensuring multiple events are not triggered, each time we call start watching.
    // we clean up the previous event we were listening to.
    return () => {
      subscriber && subscriber.remove();
    };
  }, [shouldStartTracking, locationUpdateCallback]);
  // locationUpdateCallback cannot pass as update directly , unless it is defined as a useCallback and only updates when required

  return [error];
};
