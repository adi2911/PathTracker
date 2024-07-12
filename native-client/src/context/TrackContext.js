import trackApi from "../api/tracker";
import createDataContext from "./createDataContext";
import { trackReducer } from "./trackReducer";

const fetchTrack = (dispatch) => {
  return async () => {
    const res = await trackApi.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: res.data });
  };
};

const createTrack = (dispatch) => {
  return async (name, locations) => {
    try {
      await trackApi.post("/tracks", {
        name,
        locations,
      });
    } catch (err) {
      console.log("On createTrack ", err);
    }
  };
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTrack, createTrack },
  []
);
