import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const handleSave = () => {
  Alert.alert('Reserva Concluída!');
};

export function ProfileScreen() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.addPhotoContainer}>
          <Text style={styles.addPhotoText}>Crie uma nova reserva</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.formField}>
            <Icon name="user" size={20} style={styles.infoIcon} />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.infoTextInput}
                multiline
                placeholder="Nome Completo"
                onChangeText={text => setFullName(text)}
              />
            </View>
          </View>
          <View style={styles.formField}>
            <Icon name="phone" size={20} style={styles.infoIcon} />
            <View style={[styles.inputContainer]}>
              <TextInput
                style={styles.infoTextInput}
                multiline
                placeholder="(__)_____-____"
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.formField}>
            <TextInput
              style={styles.infobox}
              keyboardType='numeric'
              placeholder="Qtd de Pessoas"
              onChangeText={text => setCity(text)}
            />
          </View>
          <View style={styles.formField}>
            <TextInput
              style={styles.infobox}
              keyboardType='numeric'
              placeholder="Mesa"
              onChangeText={text => setCity(text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.title}>Horário:</Text>
            <TextInput
              style={styles.infobox}
              keyboardType='numeric'
              placeholder="__:__"
              onChangeText={text => setCity(text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.title}>Data:</Text>
            <TextInput
              style={styles.infobox}
              keyboardType='numeric'
              placeholder="DD/MM/AAAA"
              onChangeText={text => setCity(text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.title}>Observações:</Text>
            <TextInput
              style={[styles.infobox, styles.obs]}
              multiline
              keyboardType='default'
              placeholder=""
              onChangeText={text => setCity(text)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Confirmar Reserva</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', //cor do plano de fundo geral
    paddingHorizontal: 20,
    paddingTop: 50
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  },
  profileContainer: {
    alignItems: 'center'
  },
  circleContainer: {
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 100,
    padding: 10,
    marginBottom: 20
  },
  circleIcon: {
    color: '#000'
  },
  addPhotoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  addPhotoButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addPhotoIcon: {
    marginRight: 10
  },
  addPhotoText: {
    fontSize: 24,
    color: '#000'
  },
  infoContainer: {
    alignItems: 'flex-start'
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  infoIcon: {
    marginRight: 10
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#FFF', // Cor mais clara de dentro do container
    marginRight: 10
  },
  infoTextInput: {
    fontSize: 18,
    color: '#000',
    paddingHorizontal: 10
  },
  infobox: {
    fontSize: 18,
    height: 50,
    color: '#000',
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  obs: {
   width: 260,
   height: 210
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    display: 'flex',
    borderRadius: 50,
    marginBottom: 20,
    alignItems: 'flex-end',
    marginLeft: 20,
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: '#E6E6FA',
  },
});