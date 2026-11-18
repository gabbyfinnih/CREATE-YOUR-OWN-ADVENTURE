import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/fog.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
            You escape using the silver key.{"\n"}
            The train disappears into the fog, and all the passengers finally return home.{"\n"}
             As you walk away, you hear the distant sound of a train whistle, but this time, you know you're free.

            <Text style={styles.end}>{"\n\n\n\n"}GOOD ENDING: <Text style={{fontStyle: 'italic'}}>THE HERO.</Text></Text>
        </Text>
            <Link href="/" style={styles.button}>
                Try Again...?
            </Link>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#011513"
  },

  end: {
    fontSize: 20,
    color: 'chartreuse'
  },

  paragraph: {
    top: -130,
    padding: 20,
    fontFamily: 'Brush Script MT',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'rgb(171, 221, 219)'
  },

    button: {
    padding: 20,
    textAlign: 'center',
    top: -100,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
    color:'rgb(52, 136, 121)',
    textDecorationLine: 'underline',

  },

  image: {
    width: 320,
    height: 270,
    borderRadius: 10,
  },

    imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 100, default: 80 }),
    alignItems: 'center',
  },
});