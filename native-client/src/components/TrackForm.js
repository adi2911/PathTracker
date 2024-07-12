import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext);

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
    </>
  );
};

export default TrackForm;
