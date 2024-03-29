
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import React from 'react';
import Home from "../Screens/HomePage/Home";
import Sershe from "../Screens/Sershe/SershePage"
import Cart from '../Screens/Cart/Cart'
import All from '../Screens/AllCart/All'
import Likes from '../Screens/Likes/Likes'
import { AntDesign ,Feather ,EvilIcons    } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default  function Tabs({route}) {
  const len = route.params?.len;
  return (
    
    <Tab.Navigator
     initialRouteName="Home"
     activeColor="#b11414"
    
     inactiveColor="#262626"
     barStyle={styles.botomTab}
      screenOptions={({ route }) => ({
      
     
      showIcon: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
        
            if (route.name === 'home') {
              iconName = focused
            
              return <AntDesign name="home"    style={styles.icon}  color={color}/> ; 
            }else if (route.name === 'Likes') {
              return <AntDesign name="hearto"     style={styles.icon} color={color}/> ; 
            } else if (route.name === 'Profel') {
              return     <Feather name="user"  style={styles.icon} color={color}/>
              
            }
            else if (route.name === 'Cart') {
              return    <EvilIcons name="cart"   size={30}  color={color} />
            }
        },})}>
      <Tab.Screen name="home" component={Home}   options={{tabBarLabel: false}} />
      <Tab.Screen name="Likes" component={Likes}   options={{tabBarLabel: false}}/>
      
      <Tab.Screen name="Cart" component={Cart} options={{tabBarLabel: false}}/>
      <Tab.Screen name="Profel" component={ Sershe} options={{tabBarLabel: false}}/>
      
      
      
     
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({

  botomTab :{ 
    backgroundColor: '#FFF',
   
   position:'absolute',
   bottom:0,
   right:0,
   left:0,
   elevation:0,
   height:50,
    
   },

   icon:{
    fontSize:25,
    width:30,
    height:30,
    
   }
})