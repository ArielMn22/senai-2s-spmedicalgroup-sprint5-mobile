import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ListarConsultaStatus from "./ListarConsultaStatus";

export default class GerarLinhaConsulta extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return this.props.tipoUsuario === "Médico" ? (
      this.props.index % 2 !== 0 ? (
        <View style={styles.tableRowCinza}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>
              {this.props.item.pacienteNome}
            </Text>
          </View>

          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>
              {this.props.item.dataConsulta}
            </Text>
          </View>

          <ListarConsultaStatus status={this.props.item.status} />
        </View>
      ) : (
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>
              {this.props.item.pacienteNome}
            </Text>
          </View>

          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>
              {this.props.item.dataConsulta}
            </Text>
          </View>

          <ListarConsultaStatus status={this.props.item.status} />
        </View>
      )
    ) : this.props.index % 2 !== 0 ? (
      <View style={styles.tableRowCinza}>
        <View style={styles.tableCell}>
          <Text style={styles.tableRowText}>{this.props.item.medicoNome}</Text>
        </View>

        <View style={styles.tableCell}>
          <Text style={styles.tableRowText}>
            {this.props.item.dataConsulta}
          </Text>
        </View>

        <ListarConsultaStatus status={this.props.item.status} />
      </View>
    ) : (
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text style={styles.tableRowText}>{this.props.item.medicoNome}</Text>
        </View>

        <View style={styles.tableCell}>
          <Text style={styles.tableRowText}>
            {this.props.item.dataConsulta}
          </Text>
        </View>

        <ListarConsultaStatus status={this.props.item.status} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tableRow: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "white"
  },
  tableRowCinza: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "#FCFCFC"
  },
  tableRowText: {
    textAlign: "center",
    color: "#757575",
    fontFamily: "bahnschrift_reg",
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
