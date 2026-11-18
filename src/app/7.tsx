import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/guy.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
            You agree to replace the conductor.{"\n"}  
            He disappears, leaving you with his uniform and pocket watch.{"\n"}  You look out the window and see another person approaching the train with a golden ticket in their hand.
            {"\n\n"}You realize the cycle is about to begin again.

            <Text style={styles.end}>{"\n\n\n\n"}BAD ENDING: <Text style={{fontStyle: 'italic'}}>{"\n"}THE CYCLE CONTINUES.</Text></Text>
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
    backgroundColor: "#0a191a"
  },

  end: {
    fontSize: 20,
    color: 'red'
  },

  paragraph: {
    top: -90,
    padding: 20,
    fontFamily: 'Brush Script MT',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'rgb(136, 155, 153)='
  },

    button: {
    padding: 20,
    textAlign: 'center',
    top: -100,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
    color:'rgb(141, 186, 186)',
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