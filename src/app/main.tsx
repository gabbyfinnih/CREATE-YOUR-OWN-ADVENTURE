import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const PlaceholderImage = require('@/assets/images/images.jpeg');

export default function Index() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
        </View>
        </SafeAreaView>
        <Text style={styles.paragraph}>
        It's 11:47 PM. You're sitting in your bedroom when you hear three knocks on your window.{"\n"}
        You look outside and see an old-fashioned train sitting on the railroad tracks behind your house.{"\n"}
        That's strange because those tracks haven't been used in over 30 years.{"\n"}
        A small envelope appears on your windowsill. Inside is a golden ticket with your name written on it.{"\n"}
        On the back, there's a message:{"\n"}
        You have <Text style={{fontStyle: 'italic'}}>one</Text> chance to discover what happened to the passengers of the Midnight Train.{"\n"}
        But choose carefully. <Text style={{fontStyle: 'italic'}}>Not everyone who boards gets off.</Text>{"\n\n"}
        You have two choices:
      </Text>
      <Link href="/4" style={styles.button}>
        Ignore the ticket and go back to sleep.
      </Link>
      <Text style={[styles.paragraph, {padding: 0}, {top: -40},]}> Or.. </Text>
      <Link href="/2" style={styles.button}>
        Sneak outside and board the train.
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#253139"
  },


  paragraph: {
    top: -20,
    padding: 20,
    fontFamily: 'Brush Script MT',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'slategrey'
  },

    button: {
    padding: 20,
    textAlign: 'center',
    top: -40,
    fontFamily: 'Sans Serif',
    fontWeight: 'bold',
    fontSize: 15,
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