import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView
} from "react-native";
import jwtDecode from 'jwt-decode';
import auth from "../services/auth";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeUsuario: "",
      emailUsuario: "",
      tipoUsuario: ""
    };
  }

  componentDidMount = async () => {
    let token = await auth.getItem().then(res => (token = res));

    let decode = jwtDecode(token);

    this.setState({ nomeUsuario: decode.nomeUsuario });
  };

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <Image
            style={styles.headerImageImg}
            source={require("../assets/imgs/SPMedicalGroup-logo.png")}
          />
        </View>
        <View style={styles.headerUserSettings}>
          <Text style={styles.headerUserSettingsText}>
            {this.state.nomeUsuario}
          </Text>
          {/* <Image
              source={require("../assets/imgs/angle-arrow-down.png")}
              style={styles.headerUserSettingsImg}
            /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  headerImageImg: {
    height: 53,
    width: 50
  },
  headerUserSettings: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  headerUserSettingsText: {
    color: "#262626",
    fontSize: 20,
    fontFamily: "bahnschrift_reg"
  },
  headerUserSettingsImg: {
    height: 20,
    width: 20,
    marginLeft: 5
  }
});
