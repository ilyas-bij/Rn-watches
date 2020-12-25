import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Components/HomePage/Home";
import Welcome from "./Components/Welcome/Welcom";
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator  } from '@react-navigation/stack';

enableScreens();
const Stack = createStackNavigator ();

export default function App() {
  return (
  
    <NavigationContainer >
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />

          </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  
});
