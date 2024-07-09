import { createAppContainer, createSwitchNavigator } from "react-navigation";
import createMaterialBottomNavigator from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const switchNavigator = createSwitchNavigator({
  loginFLow: createStackNavigator({
    SignUp: SignUpScreen,
    SignInScreen: SignInScreen,
  }),
  mainFLow: createMaterialBottomNavigator({
    trackListFLow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator);
