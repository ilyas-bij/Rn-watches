import React, { useEffect ,useContext, useState} from 'react'
import {Image, StyleSheet, SafeAreaView,Text, View,FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Item from '../Cards/Item'
import {ThemeContext} from '../../Context/AppCon'


export default function FalteList({cat,Data}) {

    const context = useContext(ThemeContext);
    const [items, setitems] = useState();
    
    useEffect(() => {
        //const Data = context.Data.map(i => i.cat===cat ? i : null)
        
    }, []);
    
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
          
        <Item Item={item} />
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
                
                
              
                
                <SafeAreaView  >
                <FlatList
                
                horizontal={true}
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}

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
        color:"black",
    },
    rigth:{
        backgroundColor:"#b11414",
        opacity:0.8,
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
