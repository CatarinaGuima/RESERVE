import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function AdicionarReservas({ funcao }) {

    const [texto, setTexto] = useState('');

    const pegarMudanca = (val) => {
        setTexto(val);
    }

    return (
        <View style={styles.Topo}>
            <TextInput
                style={styles.input}
                placeholder='Nova Reserva'
                onChangeText={pegarMudanca}
            />
            <Button
                onPress={() => funcao(texto)}
                title='Adicionar uma nova reserva'
                color='#F781f1'

            />
            <Ionicons name="md-add" size={38} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottonWidth: 1,
    },
});