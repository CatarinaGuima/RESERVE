import {useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ProfileScreen() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [numeroMesa, setNumeroMesa] = useState('');
  const [numeroCliente, setNumeroCliente] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [reservas, setReservas] = useState([]);

  function handleAddReserva() {
    const reserva = { nome, telefone, numeroMesa, numeroCliente, data, horario };
    setReservas([...reservas, reserva]);
    setNome('');
    setTelefone('');
    setNumeroMesa('');
    setNumeroCliente('');
    setData('');
    setHorario('');
  }

  function handleDeleteReserva(index) {
    const newReservas = [...reservas];
    newReservas.splice(index, 1);
    setReservas(newReservas);
  }

  function handleEditReserva(index) {
    const reserva = reservas[index];
    setNome(reserva.nome);
    setTelefone(reserva.telefone);
    setNumeroMesa(reserva.numeroMesa);
    setNumeroCliente(reserva.numeroCliente)
    setData(reserva.data);
    setHorario(reserva.horario);
    handleDeleteReserva(index);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>The Black Angus</Text>
        <Text style={styles.subtitle}>Reservas de Mesas</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          style={styles.input}
          placeholder="Número da Mesa"
          value={numeroMesa}
          onChangeText={setNumeroMesa}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de Clientes"
          value={numeroCliente}
          onChangeText={setNumeroCliente}
        />
        <TextInput
          style={styles.input}
          placeholder="Data"
          value={data}
          onChangeText={setData}
        />
        <TextInput
          style={styles.input}
          placeholder="Horário"
          value={horario}
          onChangeText={setHorario}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddReserva}
        >
          <Text style={styles.buttonText}>Adicionar Reserva</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={reservas}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => (
          <View style={styles.reservaContainer}>
            <Text style={styles.reservaText}>{item.nome} - {item.telefone} - Mesa {item.numeroMesa} - {item.numeroCliente} Pessoas- {item.data} - {item.horario}</Text>
            <TouchableOpacity
              style={styles.reservaButton}
              onPress={() => handleEditReserva(index)}
            >
              <Ionicons
                name="create-outline"
                size={24}
                color="#FFF"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reservaButton}
              onPress={() => handleDeleteReserva(index)}
            >
              <Ionicons
                name="trash-outline"
                size={24}
                color="#FFF"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
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
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  reservaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
  },
  reservaText: {
    flex: 1,
    marginRight: 10,
  },
  reservaButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10,
  }
})
