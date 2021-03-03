import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import FlatList from '../Cards/FalteList'
import { LinearGradient } from 'expo-linear-gradient'
 function ShowByCat({cat}) {
    
    return (
        
    
   <View style={styles.Viewitem}>

    <FlatList  cat={cat}/>
  
    </View>)
};


export default function Home({route}) {
    const cat =["GUESS","Lacoste","Fossil","Swatch","Lacoste"];

    const show = cat.map((cat) =>
   <ShowByCat  cat={cat}/>
  );
    
    return (
      
<View >
    <StatusBar style="dark" translucent = {true} />

        <ScrollView 
        style={{
            
            height:"100%",
           
             }}>
         {/* Flat list */}
       
             {show}

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
