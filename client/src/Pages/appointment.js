import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Image, Text, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

export function ApointmentScreen() {
    const [selected, setSelected] = useState('');
    return (
        <>
            <View style={styles.header}>
                <View style={styles.perfil}>
                    <Image
                        style={styles.image}
                        source={require('../Images/perfil.jpg')} />
                </View>
                <View style={styles.description}>
                    <Text style={styles.name}>Olá</Text>
                    <Text style={styles.type}>Funcionário(a)</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <Foundation name="list" size={42} color="#FFFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#FFFF' }}>
                <Calendar
                    style={styles.data}
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }} />
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    data: {
        paddingTop: 150,
        borderWidth: 1,
        borderColor: 'gray',
        height: 625,
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#E33488',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#E33488',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000'
    },
    perfil: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20
    },
    description: {
        marginTop: 100,
        marginLeft: -40,
    },
    image: {
        display: 'flex',
        marginTop: 50,
        borderRadius: 125 / 2,
        alignItems: 'flex-start',
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: '#E6E6FA',
    },
    name: {
        textAlign: 'center',
        color: '#FFFF',
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        left: 70,
    },
    type: {
        fontSize: 16,
        color: '#FFFF',
        justifyContent: 'center',
        left: 70,
    },
    icon: {
        justifyContent: 'flex-end',
        left: 120,
        paddingBottom: 65
    }
});


