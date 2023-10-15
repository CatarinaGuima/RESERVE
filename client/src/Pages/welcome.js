import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export function WelcomeScreen({ navigation }) {



    return (
        <View
            backgroundColor="black"
            style={styles.layout}
        >
            <View >
                <Text style={styles.title}> RESERVE </Text>
            </View>
            <View style={styles.input}>
                <View style={styles.icon}>
                    <MaterialIcons
                        name="email"
                        size={14}
                        color="black"
                    />
                </View>
                <View style={styles.email}>
                    <TextInput
                        multiline
                        keyboardType='email-address'
                        placeholder='Enter your email'
                    />
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.icon}>
                    <FontAwesome5
                        name="key"
                        size={12}
                        color="black" />
                </View>
                <View style={styles.password}>
                    <TextInput
                        keyboardType='numeric'
                        placeholder='Enter your password'
                        contextMenuHidden={true}
                    />
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    title='ENTRAR'
                    color='#000'
                    onPress={() => navigation.navigate('Menu')}
                >
                </Button>
                <View style={styles.legend}></View>
                <Button
                    title='Criar Conta'
                    color='#000'
                    onPress={() => navigation.navigate('Menu')}
                >
                </Button>
                <Text style={styles.legend}>Or login with Social Media</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#000',

    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#FFFF',
        fontSize: 32,
        marginBottom: 100
    },
    login: {
        marginTop: 0,
        marginBottom: 10,
        color: '#FFFF',
        fontSize: 32,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#FFF'
    },
    input: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        width: '85%',
        borderWidth: 1,
        color: 'gray',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    icon: {
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    password: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 100,
        marginTop: 40,
    },
    legend: {
        color: 'silver',
        fontSize: 12,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40,

    },
});
