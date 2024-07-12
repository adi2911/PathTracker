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

import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

import { FontAwesome } from "@expo/vector-icons";

const trackListFLow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

trackListFLow.navigationOptions = {
  title: "Tracks", //title we show in the bottom navigator
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  AutomaticSignIn: AutomaticSignInScreen, //should be shown by default
  loginFLow: createStackNavigator({
    SignUp: SignUpScreen,
    SignInScreen: SignInScreen,
  }),
  mainFlow: createMaterialBottomNavigator({
    trackListFLow: trackListFLow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigationObject) => {
              setNavigator(navigationObject);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
