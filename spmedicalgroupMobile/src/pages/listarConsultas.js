import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class ListarConsultas extends Component {
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
      <View>
        <Text>Listar Consultas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabNavigatorIconHome: {
    height: 35,
    width: 35,
    tintColor: "#262626"
  }
});
