import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/login";
import ListarConsultas from "./pages/listarConsultas";
import Perfil from './pages/perfil';
 const AuthStack = createStackNavigator({ Login });

const BottomTabNavigator = createBottomTabNavigator (
  {
    ListarConsultas,
    Perfil
  },
  {
    // initialRouteName: "Perfil",
    initialRouteName: "ListarConsultas",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      inactiveBackgroundColor: "#B2DBF1",
      activeBackgroundColor: "#83bedf",
      activeTintColor: "#81DF99",
      inactiveTintColor: "#000000",
      style: {
        height: 50,
        borderTopWidth: 0
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
      // initialRouteName: "BottomTabNavigator"
      initialRouteName: "AuthStack"
    }
  )
);
