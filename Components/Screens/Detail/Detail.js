import React from 'react'
import { StyleSheet, Text, View ,ScrollView,Image,Pressable,Button} from 'react-native'
import { Ionicons,AntDesign } from '@expo/vector-icons';


const Imges =()=>{
  return (
    <View>
      
    
  <Image
  style={styles.imge}
  source={require('../../../assets/Imges/wat2.jpg')}
/>
          
</View>
)

}

const Detail = ({navigation}) => {
  return (
    <View>
      <ScrollView>
  
      
      <View style={styles.sweper}>
      
        <Imges/>
        <View >
                    <View style={styles.head}>
                    <View style={{width:"50%",alignItems:"flex-start"}}>
                              <Pressable
                                      onPress={() => navigation.goBack()}>
                                  <View style={styles.rigth}>
                                  <Ionicons name="arrow-back" size={22} color="black" />
                                  </View>
                        </Pressable>
                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <Pressable
                        
                          onPress={() => alert("cart")} >
                                  <View style={styles.rigth}>
                                  <AntDesign name="heart" size={19} color="black"  style={{marginLeft:2,opacity:0.5}}/>
                                  
                                  </View>
                        </Pressable>
                   </View>
               </View>
               </View>
      </View>
      <View style={styles.dec}>
      <Text style={styles.Pprix}>
         prix : $200 - 500 
        </Text>
        <Text style={styles.Ptitel}>
        thes is tite thes is tite thes is tite
        thes is tite
        </Text>
    
        <Text style={styles.Ptitel}>
          description
        </Text>
        <Text style={styles.Pdec}>
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
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.text}>Add to cart</Text>
      </Pressable>
     
      
    </View>
      
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({

  //titel styles
  Ptitel:{
    marginHorizontal:10,
    marginVertical:5,
    fontWeight: '700',
    fontSize:25
  },

  Pprix:{
    marginLeft:25,
    marginRight:9,
    marginVertical:2,
    marginTop:10,
    fontSize:20,
    fontWeight: '500',
  },
  Pdec:{
    textAlign:'center',
    marginHorizontal:5,
    marginRight:9,
    
    
    fontSize:18
  },
  dec:{
    backgroundColor:"#FFF",
    
    
    marginBottom:80
    },

  // all

  header:{
      
  },
  sweper:{
    width:'100%',
    
    height:420,
    borderBottomLeftRadius:60
    
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
    
    paddingHorizontal:9,
    paddingVertical:5,
    borderRadius:50,
    width:42
},


})
