import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View ,ScrollView,Image,Pressable,Button} from 'react-native'
import { Ionicons,AntDesign } from '@expo/vector-icons';



const Imges =({Img})=>{
  return (
    <View style={{backgroundColor:'#FFF'}}>
      
    
  <Image
  style={styles.imge}
  source={ {uri: Img}}
/>
          
</View>
)

}

const Detail = ({navigation,route}) => {
  const { Item } = route.params;
  
  const [item, setitem] = useState(Item);
  useEffect(() => {
    console.log(Item.titel);
    
}, [Item]);
  return (
    <View>
      <ScrollView>
  
      
      <View style={styles.sweper}>
      
        <Imges Img={item.img}/>
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
                                  <AntDesign name="heart" size={19} color="#b11414"  style={{marginLeft:2,opacity:0.5}}/>
                                  
                                  </View>
                        </Pressable>
                   </View>
               </View>
               </View>
      </View>
      <View style={styles.dec}>
      <Text style={styles.Pprix}>
         prix : {item.prix},99 $
        </Text>
        <Text style={styles.Ptitel}> {Item.titel}</Text>
    
        <Text style={styles.Pdecone}>
          description
        </Text>
        <Text style={styles.Pdec}>
        {Item.des}
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
    fontSize:25,
    marginLeft:22
  },
  Pdecone:{
    marginHorizontal:10,
    marginVertical:5,
    fontWeight: '700',
    fontSize:25,
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
    
    marginHorizontal:5,
    marginRight:9,
    marginLeft:20,
    
    
    fontSize:18
  },
  dec:{
    backgroundColor:"#FFF",
    
    
    marginBottom:100
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
    width:'80%',
    height:'100%',
    resizeMode:"cover",
    marginLeft:'10%'
    

  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 2,
    width: '95%',
    backgroundColor:'#b11414',
    
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
    color:'#fff',
    
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
