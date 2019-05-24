import { createRootNavigator, createStackNavigator } from "react-native";

const AuthStack = createStackNavigator({ Login });
// const SplashStack = createStackNavigator({ SplashScreen });

const BottomTabNavigator = createBottomTabNavigator(
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

export const createRootNavigator = (signedIn = false) => {
  return createStackNavigator(
    {
      AuthStack,
      BottomTabNavigator
    },
    {
    //   headerMode: "none",
    //   mode: "modal",
      initialRouteName: signedIn ? "BottomTabNavigator" : "AuthStack",
    //   navigationOptions: {
        // gesturesEnabled: false
    //   }
    }
  );
};
