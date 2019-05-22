import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
  TouchableOpacity
} from "react-native";

import api from "../services/api";
import auth from "../services/auth";
import jwtDecode from "jwt-decode";
import GerarLinhaConsulta from "../components/GerarLinhaConsulta";
import Header from "../components/Header";

export default class ListarConsultas extends Component {
  constructor() {
    super();

    this.state = {
      emailUsuario: "",
      nomeUsuario: "",
      tipoUsuario: "",
    };
  }

  componentDidMount = async () => {
    let token = await auth.getItem().then(res => (token = res));

    let decode = jwtDecode(token);

    this.setState({ emailUsuario: decode.email });
    this.setState({ nomeUsuario: decode.nomeUsuario });
    this.setState({ tipoUsuario: decode.tipoUsuario });

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      }
    };

    await api
      .get("/consultas/listarporusuariologado", config)
      .then(response => {
        this.setState({ listaConsultas: response.data });
        // console.warn(this.state.listaConsultas);
      })
      .catch(erro => console.warn(erro));
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/imgs/man-user.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  render() {
    return (
      <View style={styles.main}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.h1}>Meu Perfil</Text>
          <View style={styles.userImage}>
            <Image
              source={require("../assets/imgs/man-user.png")}
              style={styles.userImageImg}
            />
          </View>

          <View styles={styles.dadosUsuario}>
            <Text style={styles.dadosUsuarioText}>
              {this.state.nomeUsuario}
            </Text>
            <Text style={styles.dadosUsuarioText}>
              {this.state.emailUsuario}
            </Text>
            <Text style={styles.dadosUsuarioText}>
              {this.state.tipoUsuario}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.sairBtn}
            onPress={() => {
              auth.removeItem();
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.sairBtnText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%"
    // justifyContent: 'space-between'
  },
  tabNavigatorIconHome: {
    height: 35,
    width: 35,
    tintColor: "#3981A7"
  },
  h1: {
    color: "#262626",
    fontSize: 30,
    fontFamily: "bahnschrift_reg"
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around"
  },
  userImage: {
    // marginTop: 20,
    // marginBottom: 20,
    height: 250,
    width: 250,
    backgroundColor: "#f6f6f6",
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center"
  },
  userImageImg: {
    height: 200,
    width: 200
  },
  dadosUsuario: {
    width: "80%"
  },
  dadosUsuarioText: {
    width: 300,
    marginTop: 10,
    fontSize: 25,
    color: "#262626",
    fontFamily: "bahnschrift_reg"
  },
  sairBtn: {
    height: 50,
    width: 150,
    // marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  sairBtnText: {
    fontSize: 20,
    fontFamily: "bahnschrift_reg",
    color: "#262626"
  }
});
