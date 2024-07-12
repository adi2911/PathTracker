import createDataContext from "./createDataContext";
import { locationReducer } from "./locationReducer";

const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: "start_recording" });
  };
};
const stopRecording = (dispatch) => {
  return () => {
    dispatch({ type: "stop_recording" });
  };
};
const addLocation = (dispatch) => {
  return (location, recording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (recording) dispatch({ type: "add_location", payload: location });
  };
};

const changeName = (dispatch) => {
  return (name) => {
    dispatch({ type: "change_name", payload: name });
  };
};

const resetLocationContext = (dispatch) => {
  return () => {
    dispatch({ type: "reset" });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    resetLocationContext,
  },
  {
    name: "",
    recording: false,
    locations: [],
    currentLocation: null,
  }
);
