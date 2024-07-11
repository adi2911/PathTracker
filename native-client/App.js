import { createAppContainer, createSwitchNavigator } from "react-navigation";
import createMaterialBottomNavigator from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

import AccountScreen from "./src/screens/AccountScreen";
import AutomaticSignInScreen from "./src/screens/AutomaticSignInScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const switchNavigator = createSwitchNavigator({
  AutomaticSignIn: AutomaticSignInScreen, //should be shown by default
  loginFLow: createStackNavigator({
    SignUp: SignUpScreen,
    SignInScreen: SignInScreen,
  }),
  mainFlow: createMaterialBottomNavigator({
    trackListFLow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigationObject) => {
          setNavigator(navigationObject);
        }}
      />
    </AuthProvider>
  );
};
