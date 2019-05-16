import React, { Component } from "react";
import { View, Text, Image, StyleSheet, AsyncStorage } from "react-native";
import { Table, Row, Rows, TableWrapper, Cell } from "react-native-table-component";
import api from "../services/api";
import auth from "../services/auth";
import jwtDecode from "jwt-decode";

export default class ListarConsultas extends Component {
  constructor() {
    super();

    this.state = {
      listaConsultas: [],
      listaConsultasHead: [
        // "id",
        // "pacienteNome",
        // "pacienteEmail",
        // "medicoNome",
        // "medicoEmail",
        // "especialidade",
        // "descricao",
        // "dataConsulta",
        // "preco",
        // "status"
      ],
      listaConsultasFiltrada: []
    };
  }

  _filtrarConsultas(token) {
    let decode = jwtDecode(token);
    // console.warn(decode);

    if (decode.tipoUsuario == "Médico") {
      this.setState({
        listaConsultasHead: [
          // "ID",
          "Paciente",
          // "Descrição",
          "Data da Consulta",
          // "Preço",
          "Status"
        ]
      });

      let novaLista = [];

      this.state.listaConsultas.map(consulta => {
        let novaConsulta = {
          // id: consulta.id,
          paciente: consulta.pacienteNome,
          // descricao: consulta.descricao,
          dataConsulta: consulta.dataConsulta,
          // preco: consulta.preco,
          status: consulta.status
        };

        novaLista.push(novaConsulta);
      });

      this.setState({ listaConsultasFiltrada: novaLista });
    } else if (decode.tipoUsuario == "Paciente") {
      this.setState({
        listaConsultasHead: [
          // "ID",
          "Médico",
          // "Descrição",
          "Data da Consulta",
          // "Preço",
          "Status"
        ]
      });

      let novaLista = [];

      this.state.listaConsultas.map(consulta => {
        let novaConsulta = {
          // id: consulta.id,
          medico: consulta.medicoNome,
          // descricao: consulta.descricao,
          dataConsulta: consulta.dataConsulta,
          // preco: consulta.preco,
          status: consulta.status
        };

        novaLista.push(novaConsulta);
      });

      this.setState({ listaConsultasFiltrada: novaLista });
    }
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
      })
      .catch(erro => console.warn(erro));

    this._filtrarConsultas(token);
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
            {/* borderStyle={{ borderWidth: 1, borderColor: "red" }} */}
            <Table>
              <Row
                style={styles.tableHead}
                textStyle={styles.tableHeadText}
                data={this.state.listaConsultasHead}
              />

              {this.state.listaConsultasFiltrada.map(aquelaConsultaBraba => {
                return (
                  <View>
                    <TableWrapper>
                      {aquelaConsultaBraba.map(celulas => {
                        <Cell data={aquelaConsultaBraba}></Cell>
                      })}
                    </TableWrapper>
                  </View>
                )
              })}
             
              {/* {this.state.listaConsultasFiltrada.map((rowData, index) => {
                let a = Object.values(rowData);
                return (
                  <View>
                    {(rowData.status == "Confirmada") ? ()}
                    <Row
                      key={index}
                      data={a}
                      textStyle={styles.tableRowText}
                      style={styles.tableRow}
                    />
                  </View>
                );
              })} */}
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
  },
  listaConsultas: {
    marginTop: 20,
    width: "100%"
  },
  tableHead: {
    // width: 600
    width: "100%",
    // border: "none",
    backgroundColor: "#e1e1e1"
  },
  tableHeadText: {
    fontSize: 25,
    color: "black",
    textAlign: "center"
  },
  tableRow: {
    // alignItems: "center",
    // justifyContent: "center"
  },
  tableRowText: {
    textAlign: "center",
    color: "#757575",
    fontSize: 20
  },
  tableBorder: {
    borderColor: "#262626"
  }
});
