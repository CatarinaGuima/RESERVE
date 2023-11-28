import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Axios from 'axios';
import { AdicionarReservas } from '../Componentes/AdicionarReservas';
import { Topo } from '../Componentes/Topo';

export function ReserveScreen() {

  // CREATE
  const adicionarReserva = (novaReserva) => {
    Axios.post("http://192.168.0.8:3001/reserva", { ...novaReserva })
      .then(response => {
        // Atualiza o estado com a nova reserva
        setReservas([...reservas, response.data]);
      })
      .catch(error => {
        console.error('Erro ao adicionar reserva:', error.response.status);
      });
  };

  // READ
  useEffect(() => {
    Axios.get("http://192.168.0.8:3001/reservas")
      .then(response => {
        // Atualiza o estado com as reservas obtidas do servidor
        setReservas(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter reservas:', error.response.status);
      });
  }, []);

  // DELETE
  const deletarReserva = (key) => {
    Axios.delete(`http://192.168.0.8:3001/reserva/${key}`)
      .then(response => {
        // Atualiza o estado removendo a reserva excluída
        setReservas(reservas.filter(reserva => reserva.key !== key));
      })
      .catch(error => {
        console.error('Erro ao excluir reserva:', error.response.status);
      });
  };

  return (
    <View style={styles.container}>
      <Topo />
      <AdicionarReservas funcao={adicionarReserva} />
      {/* Renderiza as reservas aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
});
