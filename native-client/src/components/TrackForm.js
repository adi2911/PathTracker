import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} onChange={changeName} placeholder="Enter Name" />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      {!recording && locations.length > 0 && (
        <Button title="Save Recording" onPress={saveTrack} />
      )}
    </>
  );
};

export default TrackForm;
