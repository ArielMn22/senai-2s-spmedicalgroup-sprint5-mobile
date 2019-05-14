import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default class ListarConsultas extends Component {
  constructor() {
    super();

    this.state = {
      listaConsultas: [
        {
          id: 1,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "Morreu",
          dataConsulta: "20/01/2019 15:00:00",
          preco: "0",
          status: "Confirmada"
        },
        {
          id: 6,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "Sem observações",
          dataConsulta: "08/02/2019 15:00:00",
          preco: "0",
          status: "Agendada"
        },
        {
          id: 8,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "NOVA3",
          dataConsulta: "20/01/2019 15:31:00",
          preco: "0",
          status: "Adiada"
        },
        {
          id: 13,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "NOVA3",
          dataConsulta: "20/02/2019 15:00:00",
          preco: "0",
          status: "Adiada"
        },
        {
          id: 14,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "NOVA",
          dataConsulta: "20/01/2015 15:31:31",
          preco: "0",
          status: "Adiada"
        },
        {
          id: 15,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "NOVA",
          dataConsulta: "20/01/2012 15:31:31",
          preco: "333",
          status: "Adiada"
        },
        {
          id: 16,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "NOVA",
          dataConsulta: "12/06/2005 12:35:00",
          preco: "333",
          status: "Adiada"
        },
        {
          id: 17,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "NOVA",
          dataConsulta: "12/06/2002 12:35:00",
          preco: "333",
          status: "Adiada"
        },
        {
          id: 18,
          pacienteNome: "Mariana",
          pacienteEmail: "mariana@outlook.com",
          medicoNome: "Helena Strada",
          medicoEmail: "helena.strada@spmedicalgroup.com.br",
          especialidade: "Pediatria",
          descricao: "NOVA",
          dataConsulta: "12/06/2001 12:35:00",
          preco: "333",
          status: "Adiada"
        }
      ],
      listaConsultasHead: [
        "id",
        "pacienteNome",
        "pacienteEmail",
        "medicoNome",
        "medicoEmail",
        "especialidade",
        "descricao",
        "dataConsulta",
        "preco",
        "status"
      ]
    };
  }
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
          {/* borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }} */}
            <Table>
              <Row
                style={styles.tableHead}
                data={this.state.listaConsultasHead}
              />
              {/* {this.state.listaConsultas.map(consulta => {
                return (
                  <View>
                    <Row style={styles.tableHead} data={consulta} />;
                  </View>
                );
              })} */}
              
              {this.state.listaConsultas.map((rowData, index) => {
                let a = Object.values(rowData)
                return (
                  <View>
                    <Row key={index} data={a} style={styles.tableHead} />
                  </View>
                );
              })}
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
    width: "100%"
  },
  tableHead: {
    // width: 600
    width: "100%"
  }
});
