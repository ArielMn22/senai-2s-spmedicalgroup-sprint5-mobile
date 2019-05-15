import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

import api from "../services/api";
import Axios from "axios";
import auth from "../services/auth"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: ""
    };
  }

  logar = async () => {
    // console.warn("I'm in!");
    // Alert.alert("I'm in!");

    let login = {
      email: this.state.email,
      senha: this.state.senha
    };

    // console.warn(login)

    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // console.warn(config)

    // await Axios.post("http://localhost:5000/api/login", {login}).then(
    //   response => {
    //     Alert.alert("Login efetuado com sucesso!");
    //     AsyncStorage.setItem("spmedicalgroup-token", response.data);
    //   }
    // );

    await api.post("/login", login, config).then(response => {
      Alert.alert("Login efetuado com sucesso!");

      let token = response.data.token;

      // console.warn(response.data.token)
      auth.setItem(token); // Atribui o token para AsyncStorage

      // AsyncStorage.setItem("spmedicalgroup-token", response.data);

      this.props.navigation.navigate("ListarConsultas");
    });
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/imgs/login.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.upperLogoText}>
          <View style={styles.upperLogoTextImage}>
            <Image
              source={require("../assets/imgs/SPMedicalGroup-logo.png")}
              style={styles.upperLogoTextImageImg}
            />
          </View>
          <Text style={styles.upperLogoTextText}>SP Medical Group</Text>
        </View>
        <View style={styles.loginForm}>
          <Text style={styles.loginh1}>Login</Text>
          <View>
            {/* <Icon></Icon> */}
            <TextInput
              style={styles.inputEmail}
              defaultValue="mariana@outlook.com"
              placeholder="Insira seu e-mail"
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View>
            {/* <Icon></Icon> */}
            <TextInput
              style={styles.inputSenha}
              defaultValue="Mariana"
              placeholder="Insira sua senha"
              onChangeText={senha => this.setState({ senha })}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.btnLogin} onPress={this.logar}>
              <Text style={styles.btnLoginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {},
  tabNavigatorIconHome: {
    height: 35,
    width: 35,
    tintColor: "#262626"
  },
  upperLogoText: {
    // height: "50%",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
    // padding: 40
  },
  upperLogoTextText: {
    color: "#262626",
    fontSize: 40,
    fontFamily: "Bahnschrift"
  },
  upperLogoTextImage: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 20
  },
  upperLogoTextImageImg: {
    height: 100,
    width: 93
  },
  loginForm: {
    width: "100%",
    height: "50%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loginh1: {
    fontSize: 35,
    color: "#262626"
  },
  inputEmail: {
    width: 300,
    fontSize: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1
  },
  inputSenha: {
    width: 300,
    fontSize: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1
  },
  btnLogin: {
    width: 120,
    height: 60,
    backgroundColor: "#81DF99",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  btnLoginText: {
    fontSize: 20,
    color: "black"
  }
});
