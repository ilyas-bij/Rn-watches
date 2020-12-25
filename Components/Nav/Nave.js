import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import { Container,Right, Header,Left,Body,Title, Item, Input, Icon, Button, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient'
export default function Nave() {
    
    return (
    
      
< Container transparent style={{
                   marginTop:10,
                  height:70,
                  flexDirection:"row",
                  alignItems:"center"
               }}  > 
    
    <Icon type="FontAwesome" name="bars" style={{
           
           marginTop:15,
           marginHorizontal:10,
          
}
       
    } />
       
        <Body>
       
<Item style={{
                   backgroundColor:"#DDD",
                   paddingVertical:9,
                   paddingHorizontal:20,
                   marginHorizontal:-7,
                   borderRadius:20,
                   
                   marginTop:10,
                  
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#000"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:200
                        }}
                        
                   />
                   <Icon name="ios-search" />
               </Item>
                  
          </Body>
          <Icon type="FontAwesome" name="shopping-cart" style={{
           
           marginTop:10,
           
           paddingHorizontal:15,
}
       
    } />

<LinearGradient
                        colors={["rgba(0,164,109,0.4)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:205,
                            top:0
                        }}
                    />
 </Container>

     
    )
}


