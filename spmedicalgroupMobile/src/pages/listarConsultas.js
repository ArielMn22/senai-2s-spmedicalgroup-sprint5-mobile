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
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell
} from "react-native-table-component";
import api from "../services/api";
import auth from "../services/auth";
import jwtDecode from "jwt-decode";
import GerarLinhaConsulta from "../components/GerarLinhaConsulta";

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
        console.warn(this.state.listaConsultas);
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
    backgroundColor: "#e1e1e1"
  },
  tableHeadText: {
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
