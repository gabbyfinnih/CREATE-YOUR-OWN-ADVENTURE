import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/bed.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
          You decide the mysterious ticket isn't worth the risk and return to bed.{"\n"}
          The next morning, the train tracks are completely empty.{"\n"} 
          You convince yourself it was all a dream until you notice a tiny golden symbol on your wrist.

            <Text style={styles.end}>{"\n\n\n\n"}SECRET ENDING: <Text style={{fontStyle: 'italic'}}>{"\n"}YOU ESCAPED...?</Text></Text>
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
    backgroundColor: "#151714"
  },

  end: {
    fontSize: 20,
    color: 'grey'
  },

  paragraph: {
    top: -80,
    padding: 25,
    fontFamily: 'Brush Script MT',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'rgb(209, 209, 211)'
  },

    button: {
    padding: 20,
    textAlign: 'center',
    top: -100,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
    color:'rgb(136, 55, 52)',
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