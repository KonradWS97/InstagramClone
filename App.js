// zadanie 3 
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Image,
} from 'react-native';
import { useState, useEffect } from 'react';
import Header from './componenty/Header';
import HomeScreen from './screeny/HomeScreen';
import NewPostScreen from './screeny/NewPostScreen';
import SingedInStack from './screeny/navigation';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './screeny/navigation';

// const url = 'https://jsonplaceholder.typicode.com/photos'
// async function getImg(){
//   const response = await fetch(url) 
//   return await response.json()
// }

export default function App() {
//  const [fotos, setFotos ] = useState([])
//  useEffect(( )=>{getImg().then(resFotos=> setFotos(resFotos)) },[])
  return(  
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    
      // <HomeScreen/>
      // <SingedInStack/>
    
  // <View >
  //   <FlatList keyExtractor={(item)=> item.id } data={fotos} renderItem={({item})=>
  // <View><Image source={{uri: item.thumbnailUrl }} style= {{height:100 , width: 100}} /></View> }/>
  // </View>
  )

}
















