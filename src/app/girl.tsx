import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/key.webp');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
            The girl whispers, <Text style={{fontStyle: 'italic'}}>
            "I've been trapped here for 100 years.{"\n"}
            The conductor steals people's memories to keep this train running."{"\n"}</Text>
            She hands you a mysterious silver key and explains that it might be the only way to escape{"\n"} 
            Before you can ask another question, you hear footsteps approaching.{"\n"}

            Suddenly, the conductor notices you talking to her.{"\n\n\n"}
            What do you do?
        </Text>
            <Link href="/5" style={styles.button}>
                Trust the girl and use the key to escape.
            </Link>
        <Text style={[styles.paragraph, {padding: 0}, {top: -70},]}> Or.. </Text>
            <Link href="/cabin" style={styles.button}>
                 Give the key to the conductor.
            </Link>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c0702"
  },


  paragraph: {
    top: -50,
    padding: 20,
    fontFamily: 'Brush Script MT',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'rgb(192, 191, 182)'
  },

    button: {
    padding: 20,
    textAlign: 'center',
    top: -70,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
    color:'rgb(74, 91, 88)',
    textDecorationLine: 'underline',

  },

  image: {
    width: 320,
    height: 230,
    borderRadius: 10,
  },

    imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 100, default: 80 }),
    alignItems: 'center',
  },
});