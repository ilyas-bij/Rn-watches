import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from "../HomePage/Home";
import Welcome from "../Welcome/Welcom";
import Detail from "../Detail/Detail"

import DrawerNav from "../DrawerNavigator/DrawerNav"
import { enableScreens } from 'react-native-screens';
import { createStackNavigator  } from '@react-navigation/stack';


enableScreens();
const Stack = createStackNavigator ();
export default function StackNav() {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={DrawerNav}   />
          <Stack.Screen name="Detail" component={Detail} />
          
          

          </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
