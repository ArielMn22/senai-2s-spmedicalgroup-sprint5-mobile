import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

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
    height: "50%",
    width: "100%",
    alignItems: "center",
    padding: 40
  },
  upperLogoTextText: {
    color: "#81DF99",
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
    alignItems: "center",
    padding: 25
  },
  loginh1: {
    fontSize: 35,
    color: "#262626"
  },
  inputEmail: {
    width: 250,
    fontSize: 20,
    backgroundColor: "#ccc",
    borderRadius: 5
  }
});
