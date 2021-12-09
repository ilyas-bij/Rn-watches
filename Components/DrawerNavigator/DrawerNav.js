





import * as React from 'react';
import {Pressable,StyleSheet, Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Home from "../HomePage/Home";
import Detail from "../Detail/Detail";
import Sershe from "../Sershe/SershePage"
import Cart from '../Cart/Cart'
import All from '../AllCart/All'
import { Ionicons,AntDesign } from '@expo/vector-icons';


 function Homeicon() {
  const navigation = useNavigation();
  return (
    <View style={styles.icon}>
       <Pressable
            style={styles.search}
            onPress={() => navigation.navigate('searsh')}>
          <Ionicons name="search" size={25} color="#000" /> 
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Cart')}>
        <Ionicons name="cart" size={25} color="#000" /> 
      </Pressable>
 </View>
  )
}

function Carticon() {
  const navigation = useNavigation();
  return (
    <View style={styles.iconBack}>
       <Pressable
            style={styles.search}
            onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back" size={25} color="black" />

          {/*<Ionicons name="md-arrow-round-back" size={25} color="#000" /> */}
      </Pressable>
 </View>
  )
}


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}  
        initialParams={{ post: 42 }}
        options={{ title: 'Watch Store'  
        ,headerShown:true ,
        headerStyle:{
          
          backgroundColor:"#FFF",
          
        },
         headerRight:() => (<Homeicon/>),}} />

        <Drawer.Screen name="Detail" component={Detail}  />
        <Drawer.Screen name="searsh" component={Sershe} options={{ title: 'searsh'  
        ,headerShown:false , 
        headerLeft:() => (<Carticon/>),}} />
        <Drawer.Screen name="Cart" component={Cart}    options={{ title: 'Cart'  
        ,headerShown:true , 
        headerLeft:() => (<Carticon/>),}} />
      
         <Drawer.Screen name="All" component={All}    options={{ title: 'ALL'  
        ,headerShown:true ,
        headerLeft:() => (<Carticon/>),}} />
         
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
  iconBack: {
    width:50,
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
