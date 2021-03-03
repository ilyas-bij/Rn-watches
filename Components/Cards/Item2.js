import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const Item2 = ({ item }) => {
    return (
        <View style={styles.item}>
        <View style={styles.imgcon }>
        <Image source={require('../../assets/Imges/Wat.jpg')}   style={styles.img }/>
        </View>
        <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        
          
        </View>
        </View>
    )
}

export default Item2

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    item: {
      backgroundColor: '#f9c2ff',
      
      marginVertical: 4,
      flex: 1,
      padding: 20,
      margin: 15,
       flexDirection: "row",
       height:100,
       borderRadius: 12,
  
    },
    title: {
      fontSize:17,
      width:"75%"
    },
    imgcon:{
      width:'25%'
      
    },
    img:{
      marginTop:-17,
      marginLeft:-15,
      borderRadius: 12,
        width:80,
        height:90
          
    },
    info:{
      
      width:'100%'
    },
   
  });
