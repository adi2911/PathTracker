import AsyncStorage from "@react-native-async-storage/async-storage"; //deprecated
import trackerApi from "../api/tracker";
import { authReducer } from "./authReducer";
import createDataContext from "./createDataContext";

const signUp = (dispatch) => {
  return async ({ email, password, navigate }) => {
    try {
      //api request to signUp with the email and password
      const response = await trackerApi.post("/signup", { email, password });

      //modify state for updating the authentication in async store
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signup",
        payload: response.data.token,
      });

      //navigate back to main flow
      navigate("TrackList", "");
    } catch (err) {
      //if signup fails throw error
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
      console.log(err.response.data);
    }
  };
};

const signIn = (dispatch) => {
  return async ({ email, password }) => {
    try {
      //api request to signin with the email and password
      const response = await trackerApi.post("/signin", { email, password });

      //modify state for updating the authentication in async store
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });

      //navigate back to main flow
      navigate("TrackList", "");
    } catch (err) {
      //if signin fails throw error
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin",
      });
      console.log(err.response.data);
    }
  };
};

const signOut = (dispatch) => {
  return ({ email, password }) => {
    //api request to signout with the email and password
    //if signup fails throw error
  };
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const automaticSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList", "");
  } else navigate("SignUp", "");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signOut, signUp, clearErrorMessage, automaticSignIn },
  { token: null, errorMessage: "" }
);
