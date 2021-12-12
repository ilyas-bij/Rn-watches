import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//screens
import Welcome from "../Welcome/Welcom";
import Detail from "../Screens/Detail/Detail"
import Sershe from "../Screens/Sershe/SershePage"
import Cart from '../Screens/Cart/Cart'
import All from '../Screens/AllCart/All'
//tabs
import Btabs from '../BTab/Tabs'
import { enableScreens } from 'react-native-screens';
import { createStackNavigator  } from '@react-navigation/stack';


enableScreens();
const Stack = createStackNavigator ();
export default function StackNav() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Home" component={Btabs}  />
              <Stack.Screen name="Detail" component={Detail} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="All" component={All} />
              <Stack.Screen name="Sershe" component={Sershe} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
