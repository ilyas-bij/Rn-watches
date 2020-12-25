
import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Pressable,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Welcom() {
    const navigation = useNavigation();
  return (
    <View style={styles.carContainer}>
    <ImageBackground
      source={require('../../assets/Imges/Watch.jpg')}
      style={styles.image}
    />

    <View style={styles.titles}>
      <Text style={styles.title}>Watch Store</Text>
      <Text style={styles.subtitleCTA}>
      Get your wishlists ready
      
          </Text>
         
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
  );
}

const styles = StyleSheet.create({
  
  carContainer: {
    width: '100%',
    height:'100%',
   
  },
  titles: {
    marginTop: '27%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textTransform:'capitalize',
    color:'#FFF',
    
    opacity: 0.7,
    fontFamily: ""
    
  },
  subtitleCTA: {
    
    fontSize: 16,
    color: '#FFF',
    opacity: 0.6,

  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    backgroundColor:'black',
    opacity: 0.7
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '95%',
    backgroundColor:'#FFF',
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
