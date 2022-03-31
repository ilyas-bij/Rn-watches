import React, { useEffect } from 'react'
import {Image, StyleSheet, Text, View,ScrollView,TouchableHighlight} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const Item = ({Item}) => {
    const navigation = useNavigation();

    useEffect(() => {
        //require('../../assets/Imges/Wat.jpg')}
        //console.log(Item.titel);
    }, []);
    return(
      
        <View  > 
           <TouchableHighlight onPress={() => navigation.navigate('Detail',{Item:Item})}  underlayColor="white">
      <View>
            <View style={styles.Item}>
                        <Image source={ {uri: Item.img}} style={styles.image}/>
                            
                         <Text numberOfLines={2} style={styles.ItemTitel} >{Item.titel}</Text>
                        <View style={{flexDirection:"row",paddingTop:10,}}>
                            <Text style={styles.Textbrand}>Trust</Text>
                            <Text style={styles.Textprix}>{Item.prix},99$</Text>
                        </View>
                      
             </View>
              <LinearGradient colors={["black", "transparent"]} style={styles.Linea}/>

     </View>
     </TouchableHighlight>
  
     </View>
     
    )
}

export default Item;

const styles = StyleSheet.create({
    Item:{
        height:212,
        elevation:2,
        backgroundColor:"#FFF",
        marginLeft:20,
        marginTop:10,
        borderRadius:15,
        marginBottom:10,
        width:160
    },

    ItemTitel: {
        fontWeight:"bold",
        fontSize:14,
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5
    },
    Textbrand: {
        paddingHorizontal:10,
        fontWeight:"bold",
        fontSize:13,
        color:"black",
        opacity:0.2,
        position: 'absolute', 
        paddingTop:5,
        bottom: -12,
        width:"50%",
    },
    Textprix: {
        fontWeight:"bold",
        fontSize:13,
        color:"black",
       opacity:0.2,
        position: 'absolute', 
        alignItems:"flex-end",
        right: -19,
        paddingTop:5,
        bottom: -12,
        width:"50%",
    },

    image:{
        height:145,
        borderRadius:15,
        width:130,
        marginLeft:12,
        justifyContent: 'center',
        alignItems: 'center',

    },

    Linea:{
        position:"absolute",
        left:1,
        right:0,
        height:1,
        marginTop:-3,
        top:5
    }
  });