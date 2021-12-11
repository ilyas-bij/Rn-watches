import React from 'react'
import {Image, StyleSheet, Text, View,ScrollView,TouchableHighlight} from 'react-native'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const Item = () => {
    const navigation = useNavigation();
    return(
      
        <View  > 
           <TouchableHighlight onPress={() => navigation.navigate('Detail')}  underlayColor="white">
      <View>
            <View style={styles.Item}>
                        <Image source={require('../../assets/Imges/Wat.jpg')} style={styles.image}/>
                            
                         <Text numberOfLines={2} style={styles.ItemTitel} >titels</Text>
                        <View style={{flexDirection:"row",paddingTop:10,}}>
                            <Text style={styles.Textbrand}>Trust</Text>
                            <Text style={styles.Textprix}>40,00$</Text>
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
        height:205,
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
        height:135,
        borderRadius:15,
        width:160,
        
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