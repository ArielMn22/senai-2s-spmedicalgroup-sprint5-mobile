import auth from "./services/auth";
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
    let token = await auth.getItem().then(res => (token = res));

    token !== null
      ? this.setState({ signedIn: true })
      : this.setState({ signedIn: false });

    this.setState({ checkedSignIn: true });
  };

  render() {
    const { checkedSignIn, signedIn } = this.state;

    const Layout = this.state.signedIn ? Logado : Deslogado;

    return <Layout />;
  }
}
