import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/login";
import ListarConsultas from "./pages/listarConsultas";
import Perfil from "./pages/perfil";
import auth from "./services/auth";

// import {
//   createRootNavigator,
//   BottomTabNavigator,
//   AuthStack
// } from "./components/routes.js";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       signed: false,
//       signLoaded: false
//     };
//   }

//   componentWillMount() {
//     auth.isSignedIn()
//       .then(res => this.setState({ signed: res, signLoaded: true }))
//       .catch(err => alert("Erro"));
//   }

//   render() {
//     const { signLoaded, signed } = this.state;

//     if (!signLoaded) {
//       return null;
//     }

//     const Layout = createRootNavigator(signed);
//     return <Layout />;
//   }
// }
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

let token = auth.isSignedIn();

export default createAppContainer(
  createSwitchNavigator(
    {
      BottomTabNavigator,
      AuthStack
    },
    {
      // initialRouteName: "BottomTabNavigator"
      initialRouteName: token ? "BottomTabNavigator" : "AuthStack"
    }
  )
);
