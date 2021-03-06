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

import api from "../services/api";
import auth from "../services/auth";
import jwtDecode from "jwt-decode";
import GerarLinhaConsulta from "../components/GerarLinhaConsulta";
import Header from "../components/Header";

export default class ListarConsultas extends Component {
  constructor() {
    super();

    this.state = {
      tipoUsuario: "",
      listaConsultas: []
    };
  }

  componentDidMount = async () => {
    let token = await auth.getItem().then(res => (token = res));

    let decode = jwtDecode(token);
    
    this.setState({ nomeUsuario: decode.nomeUsuario });
    this.setState({ tipoUsuario: decode.tipoUsuario});

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
        source={require("../assets/imgs/agenda.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  renderizaConsulta = ({ item, index }) => (
    <GerarLinhaConsulta
      item={item}
      index={index}
      tipoUsuario={this.state.tipoUsuario}
    />
  );

  render() {
    return (
      <View style={styles.main}>
       <Header />
        <View style={styles.container}>

          <Text style={styles.h1}>Minhas Consultas</Text>

          <View style={styles.listaConsultas}>
            {this.state.tipoUsuario === "Médico" ? (
              <View style={styles.tableHead}>
                <View style={styles.tableCell}>
                  <Text style={styles.tableHeadText}>Paciente</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableHeadText}>Data</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableHeadText}>Status</Text>
                </View>
              </View>
            ) : (
              <View style={styles.tableHead}>
                <View style={styles.tableCell}>
                  <Text style={styles.tableHeadText}>Médico</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableHeadText}>Data</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableHeadText}>Status</Text>
                </View>
              </View>
            )}

            <FlatList
              // contentContainerStyle={styles.table}
              data={this.state.listaConsultas}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderizaConsulta}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%"
    // justifyContent: 'center'
  },
  tabNavigatorIconHome: {
    height: 35,
    width: 35,
    tintColor: "#3981A7"
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor : "white"
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
  },
  h1: {
    color: "#262626",
    fontSize: 30,
    fontFamily: "bahnschrift_reg"
  },
  container: {
    backgroundColor: 'white',
    alignItems: "center"
  },
  listaConsultas: {
    marginTop: 20,
    width: "100%",
    height: "100%"
  },
  table: {
    width: "100%",
    height: "100%",
    backgroundColor: "blue"
  },
  tableHead: {
    width: "100%",
    backgroundColor: "#e1e1e1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  tableHeadText: {
    fontFamily: "bahnschrift_reg",
    fontSize: 25,
    color: "black",
    textAlign: "center"
  },
  tableRow: {
    width: "100%",
    height: 100,
    flexDirection: "row"
  },
  tableRowCinza: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "#ccc"
  },
  tableRowText: {
    textAlign: "center",
    color: "#757575",
    fontSize: 20
  },
  tableBorder: {
    borderColor: "#262626"
  },
  tableCell: {
    // height: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // width: 150
  }
});
