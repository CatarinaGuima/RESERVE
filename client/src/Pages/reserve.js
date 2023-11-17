import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Axios from 'axios';
import { AdicionarReservas } from '../Componentes/AdicionarReservas';
import { Topo } from '../Componentes/Topo';

export function ReserveScreen() {

  //CREATE
  const submeterInformacao = (texto) => {
    Axios.post("http://192.168.0.8:3001/reserva", { item: texto })
  }
  //READ
  useEffect(() => {
    Axios.get("http://192.168.0.8:3001/reserva")
  })

  //DELETE
  const deletarComentario = (key) => {
    Axios.delete(`http://192.168.0.8:3001/reserva/${key}`,)
  }

  return (
    <View style={styles.container}>
     <Topo/>
     <AdicionarReservas 
     funcao={submeterInformacao}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
 
})
