import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/1.webp');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
            You quietly approach the train.{"\n"}
            Its doors open automatically, almost as if they were expecting you.{"\n"}
            Inside, everything looks abandoned.{"\n"} 
            Dust covers the seats, and the lights flicker above you.{"\n"} 
            Suddenly, a <Text style={{fontStyle: 'italic'}}>mysterious</Text> conductor appears.{"\n"}
            "Welcome aboard. Your destination <Text style={{fontStyle: 'italic'}}>has already been decided</Text>"{"\n\n\n"}
            What do you do?
        </Text>
            <Link href="/girl" style={styles.button}>
                Sit beside the mysterious girl.
            </Link>
        <Text style={[styles.paragraph, {padding: 0}, {top: -180},]}> Or.. </Text>
            <Link href="/cabin" style={styles.button}>
                Investigate the conductor's cabin.
            </Link>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141212"
  },


  paragraph: {
    top: -150,
    padding: 20,
    fontFamily: 'Brush Script MT',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'rgb(196, 195, 175)'
  },

    button: {
    padding: 20,
    textAlign: 'center',
    top: -180,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
    color:'rgb(74, 91, 88)',
    textDecorationLine: 'underline',

  },

  image: {
    width: 320,
    height: 170,
    borderRadius: 10,
  },

    imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 100, default: 80 }),
    alignItems: 'center',
  },
});