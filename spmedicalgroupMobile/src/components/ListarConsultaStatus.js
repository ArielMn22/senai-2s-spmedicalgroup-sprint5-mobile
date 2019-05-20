import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';

export default class ListarConsultaStatus extends Component {
    render()
    {
        return (
            this.props.status == "Confirmada" || this.props.status == "Realizada" ? (
                <View style={styles.tableCell}>
                    <Text style={[styles.tableRowText, styles.green]}>{this.props.status}</Text>
                </View>
                ) : (
                    this.props.status == "Cancelada" || this.props.status == "Recusada" ? (
                <View style={styles.tableCell}>
                    <Text style={[styles.tableRowText, styles.red]}>{this.props.status}</Text>
                </View>
                    ) : (
                        this.props.status == "Adiada" ? (
                <View style={styles.tableCell}>
                    <Text style={[styles.tableRowText, styles.yellow]}>{this.props.status}</Text>
                </View>
                        ) : (
                <View style={styles.tableCell}>
                    <Text style={[styles.tableRowText, styles.blue]}>{this.props.status}</Text>
                </View>
                        )
                    )
                )
        );
    }
}

const styles = StyleSheet.create({
    tableRowText: {
      textAlign: "center",
      fontSize: 20
    },
    tableCell: {
        // height: 70,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        // width: 150
      },
    red: {
        color: "red"
    },
    yellow : {
        color : "yellow"
    },
    blue : {
        color: "blue",
    },
    green : {
        color: "green"
    }
  });
  