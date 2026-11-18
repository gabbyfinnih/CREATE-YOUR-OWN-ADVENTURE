import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/cabin.jpeg');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
        You enter the conductor's cabin and discover hundreds of photographs of missing passengers.{"\n"} 
        Some of them look strangely familiar.{"\n"}
        In the center of the room is a large clock spinning backward.{"\n"}
        You realize it must be connected to the train's mysterious power.{"\n"}
        The conductor appears behind you.{"\n"}
        <Text style={{fontStyle: 'italic'}}>
            "Now that you know my secret, you can never leave."</Text>{"\n"}{"\n"}

            What do you do?
        </Text>
            <Link href="/6" style={styles.button}>
                Smash the clock.
            </Link>
        <Text style={[styles.paragraph, {padding: 0}, {top: -70},]}> Or.. </Text>
            <Link href="/7" style={styles.button}>
                 Agree to become the new conductor.
            </Link>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c0e11"
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
    color:'rgb(74, 79, 91)',
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