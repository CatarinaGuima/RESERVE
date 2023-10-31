import React from "react"
import {StyleSheet, Text, View} from 'react-native';

export function Topo() {
    return (
        <View style={styles.Topo}>
            <Text style={styles.titulo}>Criar reserva</Text>
        </View>
    )
}

const styles=StyleSheet.create ({
    Topo:{
        height: 80,
        paddingTop: 38,
        backgroundColor: '#F781D8',
    },

    titulo: {
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:"bold",
    },
});