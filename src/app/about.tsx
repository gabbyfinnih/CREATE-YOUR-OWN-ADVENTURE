import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gabby's Super Cool App</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff29b9"
  },
    text: {
    fontSize: 20,
    color: '#80FF00',
  },

  button: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: 'purple',
  },



});