import React from 'react'
import {Image, StyleSheet, Text, View,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient'
const Item = () => {
    return(
      
        <View > 
      <View>
          
          {/*flat head*/}
         
                        <View style={{
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                           
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   backgroundColor:"#FFF",
                   paddingTop:10,
                   paddingBottom:2,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:18,
                            color:"black"
                        }}>Recommended</Text>
                      

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#DDD",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
      
             
      
         <ScrollView 
         horizontal
         showsHorizontalScrollIndicator={false}
         style={{height:230,
            backgroundColor:"#FFF",
        }}
     >

               {/*sengel item*/}
           <LinearGradient
                        colors={["#DDD", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:40,
                            marginTop:205,
                            top:0
                        }}
                    />
                  
              

<View 

                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:215,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:10,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../assets/Imges/Wat.jpg')}
                            style={{
                                height:145,
                                borderRadius:15,
                                width:160,
                                
                            }}
                        />
                         <Text numberOfLines={2} style={{
                                fontWeight:"bold",
                                fontSize:14,
                                paddingTop:5,
                                paddingLeft:5,
                                paddingRight:5
                            }}>watche titel dvzdsvsdvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</Text>

                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            
                        }}>
                           
                            
                      
                      
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            fontSize:13,
                            color:"black",
                            opacity:0.2,
                            position: 'absolute', 
                            paddingTop:5,
                            bottom: -12,
                            width:"50%",
                        }}>
                            Trust
                        </Text>
                        <Text style={{
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
                        }}>
                            40,00$
                        </Text>
                        </View>
                      
             </View>
             
             <LinearGradient
                        colors={["black", "transparent"]}
                        style={{
                            position:"absolute",
                            left:1,
                            right:0,
                            height:4,
                            marginTop:-2,
                            top:0
                        }}
                    />
     </ScrollView>

     </View>
   
  
     </View>
     
    )
}

export default Item;