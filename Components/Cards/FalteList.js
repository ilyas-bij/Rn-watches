import React from 'react'
import {Image, StyleSheet, SafeAreaView,Text, View,FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Item from '../Cards/Item'



export default function FalteList({cat}) {

    
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

      const renderItem = ({ item }) => (
        <Item />
      );
    
    return (
       <View>
                 <View>
                {/*flat head*/}
                        <View style={styles.head}>
                   <View style={{width:"50%"}}>
                        <Text style={styles.left}>{cat}</Text>
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
                
                
              
                
                <SafeAreaView >
                <FlatList
                
                horizontal={true}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                </SafeAreaView>
               
           
              

               
             
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
