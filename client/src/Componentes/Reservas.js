import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Reservas({props, funcao}) {
    return (
        <TouchableOpacity onPress={() => funcao(props.key)}>
            <View style={styles.postagem}>
            <AntDesign name="delete" size={18} color="black" />
                <Text style={styles.itemTexto}>{props.texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postagem: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection: 'row',
    },
    itemTexto:{
        marginLeft:30,
    },
});