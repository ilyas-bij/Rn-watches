import React from 'react'
import { StyleSheet, Text, View ,ScrollView,Image,Pressable,Button} from 'react-native'



const Imges =()=>{
  return (
    <View>
      
    
  <Image
  style={styles.imge}
  source={require('../../assets/Imges/wat2.jpg')}
/>
          
</View>
)

}

const Detail = () => {
  return (
    <View>
      <ScrollView>
  
      
      <View style={styles.sweper}>
      
        <Imges/>
        <View >
                        <View style={styles.head}>
                   <View style={{width:"50%",alignItems:"flex-start"}}>
                        <View style={styles.rigth}>
                            <Text style={ styles.text }>M</Text>
                        </View>
                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={styles.rigth}>
                            <Text style={ styles.text }>M</Text>
                        </View>
                   </View>
               </View>
               </View>
      </View>
      <View style={styles.dec}>
        <Text>
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </Text>
        <Text>
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </Text>
        <Text>
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </Text>
        <Text>
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </Text>
      </View>
      </ScrollView>

      
      <View style={styles.buttonsContainer}>
    
    <Pressable
        style={styles.button}
        //onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.text}>Add to cart</Text>
      </Pressable>
     
      
    </View>
      
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({

  header:{
      
  },
  sweper:{
    width:'100%',
    height:420,
    borderBottomLeftRadius:60
    
  },
  dec:{
  marginLeft:10,
  justifyContent: 'center',
  alignItems: 'center',
  },
  
  imge:{
    width:'100%',
    height:'100%',
    resizeMode:"cover",
    

  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 2,
    width: '95%',
    backgroundColor:'#DDD',
    
    borderRadius:20,
    marginLeft:'2.5%'
  },
  button: {
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textTransform:'capitalize',
    color:'black',
    
  },

  head:{
    
    flexDirection:"row",
    paddingHorizontal:20,
    width:"100%",
    bottom:350,
    position:'absolute',
    paddingBottom:2,
},
left:{
    fontWeight:"bold",
    fontSize:25,
    color:"black"
},
rigth:{
    backgroundColor:"#DDD",
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:100
},


})
