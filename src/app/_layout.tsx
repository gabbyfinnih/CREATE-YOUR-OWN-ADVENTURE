import { Stack } from 'expo-router';
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'THE MIDNIGHT TRAIN', headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="main" options={{ title: 'THE START...', headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="2" options={{ title: 'ALL ABOARD', headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="5" options={{ title: 'FREEDOM AT LAST', headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="girl" options={{ title: 'THE GIRL IN SILVER', headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="4" options={{ title: 'THE LUCKY ESCAPE', headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="cabin" options={{ title: "THE CONDUCTOR'S SECRET", headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="6" options={{ title: "THE TIME LOOP", headerTitleStyle: { color: 'white' },}} />
      <Stack.Screen name="7" options={{ title: 'THE NEW CONDUCTOR', headerTitleStyle: { color: 'white' },}} />


    </Stack>
  );
}


const styles = StyleSheet.create({
title: {
  color: 'white',
}
})
