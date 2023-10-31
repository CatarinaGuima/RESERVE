import { StyleSheet, Text, View } from 'react-native';

export function HistoricScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={styles.post}>
            Catarina Guimarães{'\n'}
            (81)99183-5021{'\n'}
            10 pessoas / Mesa 06{'\n'}
            15/10/2023 ás 13:00 
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.post}>
            Filipe Alves{'\n'}
            (81)99969-5123{'\n'}
            15 pessoas / Mesa 08 e 09{'\n'}
            15/10/2023 ás 12:35 
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.post}>
            Pollyanna Botelho{'\n'}
            (81)98909-4515{'\n'}
            08 pessoas / Mesa 02{'\n'}
            15/10/2023 ás 12:30 
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.post}>
            Amanda Valente{'\n'}
            (81)98978-7373{'\n'}
            03 pessoas / Mesa 01{'\n'}
            15/10/2023 ás 11:30 
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.post}>
            Larissa Cunha{'\n'}
            ....
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',

  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,

  },
  perfil: {
    marginLeft: -40,
  },
  description: {
    marginTop: 100,
    marginLeft: -40,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: -20,
    backgroundColor: '#DDD3',
    borderRadius: 100 / 8,
    padding: 20,
    width: 360,
    height: 140
  },
  post: {
    fontSize: 16,
    textAlign: 'justify',
    width: 450 / 2,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 30,
  },
  image: {
    display: 'flex',
    marginTop: 50,
    borderRadius: 125 / 2,
    alignItems: 'flex-start',
    width: 125,
    height: 125,
    borderWidth: 5,
    borderColor: '#DDD3',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    left: 60,
  },
  type: {
    fontSize: 12,
    justifyContent: 'flex-end',
    left: 60,
  }
});