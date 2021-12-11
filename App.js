import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppContext from './Context/AppCon'
import { NavigationContainer } from '@react-navigation/native';
import Stack from "./Components/StackNavigator/StackNav"





export default function App() {
  return (
  <AppContext>
      <NavigationContainer >
          <Stack/>
       </NavigationContainer>
  </AppContext>
  
   
  );
}

