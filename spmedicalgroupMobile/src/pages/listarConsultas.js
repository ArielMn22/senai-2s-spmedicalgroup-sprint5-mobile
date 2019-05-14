import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

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
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <Image
              style={styles.headerImageImg}
              source={require("../assets/imgs/SPMedicalGroup-logo.png")}
            />
          </View>
          <View style={styles.headerUserSettings}>
            <Text style={styles.headerUserSettingsText}>Dona Neuza</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.h1}>Minhas Consultas</Text>

          <View style={styles.listaConsultas}>
            <Table>
              <Rows data={this.state.listaConsultasHead} />
              <Rows data={this.state.listaConsultas} />
            </Table>
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
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerImageImg: {
    height: 53,
    width: 50
  },
  headerUserSettings: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerUserSettingsText: {
    color: "#262626",
    fontSize: 20
  },
  h1: {
    color: "#262626",
    fontSize: 30
  },
  container: {
    alignItems: "center"
  }
});
