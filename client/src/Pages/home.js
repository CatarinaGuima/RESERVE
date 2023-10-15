import { StyleSheet, View, Image} from 'react-native';

export function HomeScreen() {

  return (
    <View style={styles.top}>
      <Image
        source={require('../Images/reserve.png')}
        style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  }
});
