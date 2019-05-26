import {
  StackNavigator,
  createBottomTabNavigator,
  createRootNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Login from "../pages/login";
import ListarConsultas from "../pages/listarConsultas";
import Perfil from "../pages/perfil";
import auth from "./auth";
import React, {Component} from 'react';

const AuthStack = createStackNavigator({ Login });

// export const SignedOut = StackNavigator({
//   Login : {
//     screen: Login,
//     navigationOptions: {
//       title: "Login"
//     }
//   }
// });

const SignedIn = createBottomTabNavigator({
  ListarConsultas: {
    screen: ListarConsultas
  },
  Perfil: {
    screen: Perfil
  }
});

// let signedIn = false;
let isSignedIn = async () => {
  const token = await auth.getItem().then(res => (token = res));

  return token !== null ? true : false;
};

// let signedIn = auth.isSignedIn().then(res => {
//   return JSON.parse(res);
// });

export default createAppContainer(
  createSwitchNavigator(
  {
    AuthStack,
    SignedIn
  },
  {
    initialRouteName: isSignedIn ? "SignedIn" : "AuthStack"
  }
));

// export default AppContainer;

// export default createAppContainer = (signedIn = false) => {
//   return createSwitchNavigator(
//     {
//       AuthStack,
//       SignedIn
//     },
//     {
//       initialRouteName: signedIn ? "SignedIn" : "AuthStack"
//     }
//   );
// };
