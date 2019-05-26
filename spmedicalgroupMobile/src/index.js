import auth from "./services/auth";
import router from "./services/router";
import React, { Component } from "react";
import { Alert } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Login from "./pages/login";
import ListarConsultas from "./pages/listarConsultas";
import Perfil from "./pages/perfil";
// import auth from './services/auth';

const AuthStack = createStackNavigator({ Login });

const SignedIn = createBottomTabNavigator(
  {
    ListarConsultas: {
      screen: ListarConsultas
    },
    Perfil: {
      screen: Perfil
    }
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

const Logado = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack,
      SignedIn
    },
    {
      initialRouteName: "SignedIn"
    }
  )
);

const Deslogado = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack,
      SignedIn
    },
    {
      initialRouteName: "AuthStack"
    }
  )
);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      token: ""
    };
  }

  getToken = async () => {
    let _token = await auth.getItem().then(res => (token = res));

    this.setState({ token: _token });
  };

  componentDidMount = async () => {
    console.warn("entrou");

    let token = await auth.getItem().then(res => (token = res));

    // let isSignedIn = async () => {
    //   const token = await auth.getItem().then(res => (token = res));
    //   console.warn("token");
    //   console.warn(token);

    //   return token !== null ? true : false;
    // };

    console.warn(token);

    token !== null
      ? this.setState({ signedIn: true })
      : this.setState({ signedIn: false });

    this.setState({ checkedSignIn: true });

    // auth
    //   .isSignedIn()
    //   .then(res => {
    //     res !== null
    //       ? this.setState({ signedIn: true })
    //       : this.setState({ signedIn: false });

    //     this.setState({ checkedSignIn: true });
    //   })
    //   .catch(err => Alert.alert("Ocorreu um erro!"));
  };

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    // if (!checkedSignIn) {
    //   return null;
    // }

    const Layout = this.state.signedIn ? Logado : Deslogado;

    return <Layout />;
  }
}
