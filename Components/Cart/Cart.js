import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image,Pressable } from 'react-native';
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
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869dzs4a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694addd0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3xxddzdza1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869dzs4a0xxf-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694addd0xxf-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-xx-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const Item = ({ item }) => (
  <View style={styles.item}>
  <View style={styles.imgcon }>
  <Image source={require('../../assets/Imges/Wat.jpg')}   style={styles.img }/>
  </View>
  <View style={styles.info}>
  <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
  <View style={{marginTop:4}} > 
       <View style={styles.row2}>
           <Text style={styles.Totaltitel} >brand</Text>
           <Text  style={styles.Totalprix}>200$</Text>
           </View>
      </View>
      <View style={styles.row2}>
           <View style={styles.Totaltitel}  >
              
           </View>

           <Text  style={styles.Totalprix}>
           <Ionicons name="trash" size={19} color="red" />
           </Text>
           </View>
      </View>
    
  </View>
);
const Cart = ({navigation}) => {
  const renderItem = ({ item }) => (
 
   <Item item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
     
      <View style={{paddingBottom:92}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
      </View>
        <View style={styles.footer}>
        <View style={styles.Total}>
           
        <Text style={{width:'50%',paddingLeft:20}}>Total prix</Text>
        <Text  style={styles.Totalprix}>200$</Text>
        </View>
        
        
    <View style={styles.buttonsContainer}>
    
    <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.text}>get started</Text>
      </Pressable>
     
      
    </View>
        </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
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
  },
  row2:{
    
    marginVertical: 2,
     flexDirection: "row",
  },
  Total:{
    
    
    padding: 10,
    
     flexDirection: "row",
     
  },
  Totaltitel:{
    width:'30%',
    
  },
  Totalprix:{
    
      width:"50%",
      textAlign:'right',
      paddingRight:20
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
    height: 45,
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

export default Cart;