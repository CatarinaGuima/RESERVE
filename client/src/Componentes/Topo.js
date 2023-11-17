import React from "react"
import { StyleSheet, Text, View } from 'react-native';

export function Topo() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>The Black Angus</Text>
            <Text style={styles.subtitle}>Reservas de Mesas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        padding: 10,
        marginBottom: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
      },
});