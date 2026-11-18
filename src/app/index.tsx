import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const PlaceholderImage = require('@/assets/images/midnight.png');


export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
            <Link href="/main" style={styles.button}>
            Start Your Journey
          </Link>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061425',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 100, default: 100 }),
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 550,
    borderRadius: 10,
  },

    button: {
    color: 'rgb(165, 137, 35)',
    padding: 20,
    textAlign: 'center',
    top: 20,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',

  },
});
