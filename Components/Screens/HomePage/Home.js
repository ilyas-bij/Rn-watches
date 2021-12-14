import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import FlatList from '../../Cards/FalteList'
import { LinearGradient } from 'expo-linear-gradient'
 function ShowByCat({cat}) {
    return (
     <View style={styles.Viewitem}>
             <FlatList  cat={cat}/>
     </View>)
};


export default function Home({route}) {
    const cat =["GUESS","Lacoste","Fossil","Swatch"];

    
    return (
        
          
                <View >
                    <StatusBar style="dark" translucent = {true} />

                        <ScrollView style={{height:"100%"}}>
                        <View style={styles.header}>
                            <Text style={styles.Titel}>Whatches App</Text>
                        </View>
                        <View style={styles.body}>
                        {
                            cat.map((i)=>{
                                return(
                                    <View key={i} >
                                    <ShowByCat cat={i}/>
                                    </View>
                                )}
                            )
                        }
                          </View>
                        </ScrollView>

                </View>
            
         )
}

const styles = StyleSheet.create({
    Viewitem:{
        backgroundColor: 'transparent',
        paddingTop:2,
        marginTop:10,
        height:255, 
    },
    header:{
        height:70,
        backgroundColor:'#FFF'
    },
    body:{
        paddingBottom:60
    },
    Titel:{
        fontSize:18,
        marginTop:'10%',
        marginLeft:'5%',
        fontWeight:'700'
    }
})
