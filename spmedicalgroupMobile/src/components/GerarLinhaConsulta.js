import React, { Component } from "react";

export default class GerarLinhaConsulta extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      this.props.tipoUsuario === "Médico" ? (
        this.props.index % 2 === 0 ? (
          <View style={styles.tableRowCinza}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.pacienteNome}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.dataConsulta}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.status}</Text>
          </View>
        </View>
          ) : (
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableRowText}>{item.pacienteNome}</Text>
            </View>
    
            <View style={styles.tableCell}>
              <Text style={styles.tableRowText}>{item.dataConsulta}</Text>
            </View>
    
            <View style={styles.tableCell}>
              <Text style={styles.tableRowText}>{item.status}</Text>
            </View>
          </View>
          )
      ) : (
        this.props.index % 2 == 0 ? (
        <View style={styles.tableRowCinza}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.medicoNome}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.dataConsulta}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.status}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.medicoNome}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.dataConsulta}</Text>
          </View>
  
          <View style={styles.tableCell}>
            <Text style={styles.tableRowText}>{item.status}</Text>
          </View>
        </View>
      )
      )
  }
}
