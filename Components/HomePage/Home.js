import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Nav from '../Nav/Nave'
import Item from '../Cards/Item'
import { LinearGradient } from 'expo-linear-gradient'
export default function Home() {

    return (
      
<View >
    <StatusBar style="dark" translucent = {true} />
        {/* header */}

     
     <View style={{
            backgroundColor: '#DDD',
            height:100, 
           
             }}>

<Nav/>

        </View>
        <ScrollView 
        style={{
            backgroundColor: '#DDD',
            height:"100%",
           
             }}>
         {/* Flat list */}
       
        <View style={{
            backgroundColor: '#FFF',
            paddingTop:10,
            height:270, 
           }}>

                <Item/>
              
        </View>
        
     
        </ScrollView>
  
</View>


    )
}

const styles = StyleSheet.create({})
