import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Axios from 'axios';
import { AdicionarReservas } from '../Componentes/AdicionarReservas';
import { Topo } from '../Componentes/Topo';

export function ReserveScreen() {
  // CREATE
  const adicionarReserva = (novaReserva) => {
    Axios.post("http://192.168.0.8:3001/reserva", {...novaReserva})
      .then(response => {
        // Lógica para lidar com a resposta bem-sucedida
        console.log(response.data);
      })
      .catch(error => {
        // Lógica para lidar com o erro
        console.error('Erro ao adicionar reserva:', error.response.status);
      });

  };

  // READ
  useEffect(() => {
    Axios.get("http://192.168.0.8:3001/reservas")
      .then(response => {
        // Lógica para lidar com a resposta bem-sucedida
        console.log(response.data);
      })
      .catch(error => {
        // Lógica para lidar com o erro
        console.error('Erro ao obter reservas:', error.response.status);
      });
  }, []);

  // DELETE
  const deletarReserva = (key) => {
    Axios.delete(`http://192.168.0.8:3001/reserva/${key}`)
      .then(response => {
        // Lógica para lidar com a resposta bem-sucedida
        console.log(response.data);
      })
      .catch(error => {
        // Lógica para lidar com o erro
        console.error('Erro ao excluir reserva:', error.response.status);
      });
  };

  return (
    <View style={styles.container}>
      <Topo />
      <AdicionarReservas
        funcao={adicionarReserva} />
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
