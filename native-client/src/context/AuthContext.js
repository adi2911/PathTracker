import trackerApi from "../api/tracker";
import { authReducer } from "./authReducer";
import createDataContext from "./createDataContext";

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      //api request to signUp with the email and password
      const response = await trackerApi.post("/signup", { email, password });
      //modify state for updating the authentication
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
  return ({ email, password }) => {
    //api request to signIn with the email and password
    //modify state for updating the authentication
    //if signIn fails throw error
  };
};

const signOut = (dispatch) => {
  return ({ email, password }) => {
    //api request to signout with the email and password
    //if signup fails throw error
  };
};
export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { errorMessage: "" }
);
