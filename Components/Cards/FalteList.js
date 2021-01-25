import React from 'react'
import {Image, StyleSheet, Text, View,FlatList} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Item from '../Cards/Item'

export default function FalteList() {
    return (
       <View>
                 <View>
                {/*flat head*/}
                        <View style={styles.head}>
                   <View style={{width:"50%"}}>
                        <Text style={styles.left}>Recommended</Text>
                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={styles.rigth}>
                            <Text style={ styles.text }>More</Text>
                        </View>
                   </View>
               </View>
      
         
            <View>
            <LinearGradient
                        colors={["#DDD", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:20,
                            marginTop:205,
                            top:0
                        }}
                    />
                <Item/>
              
             
            </View>
        
     </View>
   
  
       </View>
    )
}

const styles = StyleSheet.create({
    head:{
    
        flexDirection:"row",
        paddingHorizontal:20,
        width:"100%",
        
        backgroundColor:"red",
        
        paddingBottom:2,
    },
    left:{
        fontWeight:"bold",
        fontSize:18,
        color:"black"
    },
    rigth:{
        backgroundColor:"#DDD",
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:15
    },
    text:{
        fontWeight:"bold",
        fontSize:13,
        color:"#FFF"
    }

})
