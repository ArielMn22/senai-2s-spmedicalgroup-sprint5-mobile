import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Login extends Component {
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
              placeholder="Insira seu e-mail"
            />
          </View>
          <View>
            {/* <Icon></Icon> */}
            <TextInput
              textContentType="password"
              style={styles.inputSenha}
              placeholder="Insira sua senha"
            />
          </View>
          <View>
            {/* <Icon></Icon> */}
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={this._realizarLogin}
            >
              {/* <Icon name="send" size={20} color="#000" /> */}
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
