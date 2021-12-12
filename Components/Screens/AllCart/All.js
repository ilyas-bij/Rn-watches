import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image,Pressable } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Catigo from '../Cards/Item2'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'FirstItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem',
  },


];


/*const Item = ({ item }) => (
  <View style={styles.item}>
  <View style={styles.imgcon }>
  <Image source={require('../../assets/Imges/Wat.jpg')}   style={styles.img }/>
  </View>
  <View style={styles.info}>
  <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
  
    
  </View></View>
);*/
const Cart = () => {
  const renderItem = ({ item }) => (
 
   <Catigo item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
     
      <View style={{}}>
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
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    
    marginVertical: 4,
    flex: 1,
    padding: 20,
    margin: 15,
     flexDirection: "row",
     height:100,
     borderRadius: 12,

  },
 
 
});

export default Cart;