import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'

const Likes = () => {
    return (
        <View >
        

            <ScrollView style={{height:"100%"}}>
            <View style={styles.header}>
                <Text style={styles.Titel}>wish List</Text>
            </View>
            <View style={styles.body}>
                    <Text>Likes</Text>
              </View>
            </ScrollView>

    </View>
    )
}

export default Likes

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
