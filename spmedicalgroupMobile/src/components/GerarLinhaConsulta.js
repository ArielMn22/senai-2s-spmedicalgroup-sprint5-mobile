import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import ListarConsultaStatus from "./ListarConsultaStatus";

export default class GerarLinhaConsulta extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      this.props.tipoUsuario === "Médico" ? (
        this.props.index % 2 !== 0 ? (
          <View style={styles.tableRowCinza}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{this.props.item.pacienteNome}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{this.props.item.dataConsulta}</Text>
          </View>
  
          <ListarConsultaStatus status={this.props.item.status} />
        </View>
          ) : (
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableRowText}>{this.props.item.pacienteNome}</Text>
            </View>
    
            <View style={styles.tableCell}>
              <Text style={styles.tableRowText}>{this.props.item.dataConsulta}</Text>
            </View>
    
            <ListarConsultaStatus status={this.props.item.status} />
          </View>
          )
      ) : (
        this.props.index % 2 !== 0 ? (
        <View style={styles.tableRowCinza}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{this.props.item.medicoNome}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{this.props.item.dataConsulta}</Text>
          </View>
  
          <ListarConsultaStatus status={this.props.item.status} />
        </View>
      ) : (
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{this.props.item.medicoNome}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{this.props.item.dataConsulta}</Text>
          </View>
  
          <ListarConsultaStatus status={this.props.item.status} />
        </View>
      )
      )
    )
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
