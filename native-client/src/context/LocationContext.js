import createDataContext from "./createDataContext";
import { locationReducer } from "./locationReducer";

const startRecording = (dispatch) => {};
const stopRecording = (dispatch) => {};
const addLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: "add_location", payload: location });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  {
    recording: false,
    locations: [],
    currentLocation: null,
  }
);
