import React,{useContext,useEffect,useState} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import FlatList from '../../Cards/FalteList'
import { LinearGradient } from 'expo-linear-gradient'

import {ThemeContext} from '../../../Context/AppCon'


 function ShowByCat({cat,Data}) {
    return (
     <View style={styles.Viewitem}>
             <FlatList  cat={cat} Data={Data} />
     </View>)
};


export default function Home({route}) {

    const context = useContext(ThemeContext);
    const [categor, setCat] = useState();
   

    useEffect(() => {
        const cate = context.Data.map(i => i.cat)
        
        var catego = cate.filter((item,index) => cate.indexOf(item) === index);
        setCat(catego)
    }, [context.Data]);

    
    return (
        
          
                <View >
                    <StatusBar style="auto" translucent = {true} />
                    <View style={styles.headerone}/>
                        <ScrollView style={{height:"100%"}}>
                        <View style={styles.header}>
                            <Text style={styles.Titel}>Whatches App</Text>
                        </View>
                        <View style={styles.body}>
                        {
                           categor && categor.map((i,index)=>{
                               var x = context.Data && context.Data.filter(j => j.cat === i ? j : null);
                                return(
                                    <View key={index} >
                                    <ShowByCat cat={i} Data={x}/>
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
        height:45,
        backgroundColor:'#b11414',
        
    },
    headerone:{
        height:25,
        backgroundColor:'#b11414'
    },
    body:{
        paddingBottom:85
    },
    Titel:{
        fontSize:18,
        marginTop:'3%',
        marginLeft:'5%',
        fontWeight:'700',
        color:'#fff'
    }
})
