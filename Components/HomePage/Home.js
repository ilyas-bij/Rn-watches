import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Nav from '../Nav/Nave'
import Item from '../Cards/Item'
import FlatList from '../Cards/FalteList'
import { LinearGradient } from 'expo-linear-gradient'
export default function Home() {

    return (
      
<View >
    <StatusBar style="dark" translucent = {true} />
        {/* header */}

     
   
        <ScrollView 
        style={{
            backgroundColor: 'blue',
            height:"100%",
           
             }}>
         {/* Flat list */}
    
        
             <View style={styles.Viewitem}>

                <FlatList/>
              
             </View>
             <View style={styles.Viewitem}>

                <FlatList/>

                </View>
        </ScrollView>
  
</View>


    )
}

const styles = StyleSheet.create({
    Viewitem:{

        backgroundColor: '#FFF',
        paddingTop:2,
        marginTop:10,
        height:255, 
    }
})
