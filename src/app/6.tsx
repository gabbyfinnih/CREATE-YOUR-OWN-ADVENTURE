import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/clock.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
            You smash the mysterious clock.{"\n"} 
            Everything goes dark. When you open your eyes, you're back in your bedroom at exactly 11:47 PM.{"\n"} 
            You look outside and see the train waiting again, but this time, there's a familiar face in the conductor's window.

            <Text style={styles.end}>{"\n\n\n\n"}TWIST ENDING: <Text style={{fontStyle: 'italic'}}>{"\n"}THE TIME LOOP.</Text></Text>
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
    backgroundColor: "#161515"
  },

  end: {
    fontSize: 20,
    color: '#897c09'
  },

  paragraph: {
    top: -90,
    padding: 20,
    fontFamily: 'Brush Script MT',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'rgb(155, 136, 136)'
  },

    button: {
    padding: 20,
    textAlign: 'center',
    top: -100,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
    color:'rgb(114, 60, 60)',
    textDecorationLine: 'underline',

  },

  image: {
    width: 320,
    height: 250,
    borderRadius: 10,
  },

    imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 100, default: 80 }),
    alignItems: 'center',
  },
});