





import * as React from 'react';
import {Pressable,StyleSheet, Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../HomePage/Home";
import Detail from "../Detail/Detail";
import Sershe from "../Sershe/SershePage"
import Cart from '../Cart/Cart'
import { Ionicons,AntDesign } from '@expo/vector-icons';

 function Homeicon() {
  return (
    <View style={styles.icon}>
       <Pressable
            style={styles.search}
          onPress={() => alert("search")}>
          <Ionicons name="search" size={25} color="#000" /> 
      </Pressable>
      <Pressable
        onPress={() => alert("cart")}>
        <Ionicons name="cart" size={25} color="#000" /> 
      </Pressable>
 </View>
  )
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}  
        
        options={{ title: 'Watch Store'  
        ,headerShown:true ,
        headerStyle:{
          
          backgroundColor:"#FFF",
          
        },
         headerRight:() => (<Homeicon/>),}} />

        <Drawer.Screen name="Notifications" component={Detail}  />
        <Drawer.Screen name="searsh" component={Sershe}  />
        <Drawer.Screen name="Cart" component={Cart}    options={{ title: 'Cart'  
        ,headerShown:true ,
        
         }}   />
      </Drawer.Navigator>
    
  );
}
const styles = StyleSheet.create({
  
  icon: {
   width:100,
   flex: 1,
   top:15,           
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 10
    
  },
  search:{
    marginRight:-25
  },
  goback:{
    marginLeft:-25
  }
});
