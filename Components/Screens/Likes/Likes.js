import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image,Pressable ,TouchableHighlight} from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'FirstItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'FirstItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem',
  },

];


const Item = ({ item }) => (
  <View style={styles.item}>
  <View style={styles.imgcon }>
  <Image source={require('../../../assets/Imges/Wat.jpg')}   style={styles.img }/>
  </View>
  <View style={styles.info}>
  <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
  <View style={{marginTop:4}} > 
       <View style={styles.row2}>
           <Text style={styles.Totaltitel} >brand</Text>
           
           </View>
      </View>
      <View style={styles.row2}>
           <View style={styles.Totaltitel}  >
           <Text  style={styles.Totaltitel}>200$</Text>
           </View>

           <TouchableHighlight  style={styles.Totallike} >
           
           <AntDesign name="heart" size={19} color="#b11414"  onPress={()=>{console.log(item.title)}} />
           </TouchableHighlight>
           </View>
      </View>
    
  </View>
);
const Likes = ({navigation}) => {
  const renderItem = ({ item }) => (
 
   <Item item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.header}/>
                
            
     
      <View style={{backgroundColor:'#FFF',height:'100%'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
      
      
        </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    height:25,
    backgroundColor:'#FFF'
},
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#f1F1F1',
    padding: 20,
    marginVertical: 4,
    flex: 1,
        margin:9,
     flexDirection: "row",
     height:107,
     borderRadius: 12,
  },
  title: {
    fontSize:17,
    width:"72%"
  },
  imgcon:{
    width:'25%',
    alignItems:"flex-start",
    
  },
  img:{
    marginTop:-12,
    marginLeft:-15,
    
    
    borderRadius: 12,
      width:80,
      height:90

  },
  info:{
    marginTop:-10,
    width:'100%'
  },
  footer:{
    position: 'absolute',
     left: 0, right: 0, bottom: 0,
     height:90,
     backgroundColor:"#FFF",
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     marginBottom:50
    
  },
  row2:{
    
    marginVertical: 2,
     flexDirection: "row",
  },
  Total:{
    
    
    padding: 10,
    
     flexDirection: "row",
     
  },

  Totalprix:{
    
      width:"40%",
      textAlign:'right',
      paddingRight:20
  },
  Totallike:{
      position:'absolute',
      right:'20%',
      width:30
      
         
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 10,
    width: '95%',
    backgroundColor:'#000',
    opacity: 0.3,
    borderRadius:20,
    marginLeft:'2.5%'
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textTransform:'capitalize',
    color:'black',
    
  }
});

export default Likes;