import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/login";
import ListarConsultas from "./pages/listarConsultas";

const AuthStack = createStackNavigator({ Login });

const BottomTabNavigator = createBottomTabNavigator (
  {
    ListarConsultas
  },
  {
    initialRouteName: "ListarConsultas",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
    //   showIcon: true,
      inactiveBackgroundColor: "#39B158",
      activeBackgroundColor: "#81DF99",
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#FFFFFF",
      style: {
        height: 50
      }
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      BottomTabNavigator,
      AuthStack
    },
    {
      initialRouteName: "BottomTabNavigator"
      // initialRouteName: "AuthStack"
    }
  )
);
