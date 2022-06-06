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

// const url = 'https://jsonplaceholder.typicode.com/photos'
// async function getImg(){
//   const response = await fetch(url) 
//   return await response.json()
// }

export default function App() {
//  const [fotos, setFotos ] = useState([])
//  useEffect(( )=>{getImg().then(resFotos=> setFotos(resFotos)) },[])
  return(  
    
      // <HomeScreen/>
      <SingedInStack/>
    
  // <View >
  //   <FlatList keyExtractor={(item)=> item.id } data={fotos} renderItem={({item})=>
  // <View><Image source={{uri: item.thumbnailUrl }} style= {{height:100 , width: 100}} /></View> }/>
  // </View>
  )

}














// zadanie 2 
// import {View, Text, StyleSheet, Alert, TouchableWithoutFeedback, Image, ScrollView, FlatList} from 'react-native';
// import {AntDesign} from "@expo/vector-icons";
// import Svg, {Circle, Rect} from 'react-native-svg';

// import AdaptiveIcon from './assets/adaptive-icon.png'


// const styles = StyleSheet.create({
//     container: {
//         display: 'flex', alignItems: 'center', height: '100%', paddingTop: 20
//     }
// })


// export default function App() {

//     const CITIES = [
//         {
//             id: "0",
//             city: "Warsaw",
//             img: 'https://www.google.com/search?q=warszawa&sxsrf=ALiCzsYJoIp1599060R66QYLdszg1VI65A:1651917555360&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiCkNe4kM33AhXwpIsKHRNgC14Q_AUoAnoECAIQBA&biw=1229&bih=577&dpr=1.56#imgrc=PUU8i5QNuosuSM'
//         },
//         {
//             id: "1",
//             city: "Lublin",
//             img: 'https://www.google.com/search?q=lublin+&tbm=isch&ved=2ahUKEwijiuy5kM33AhXNwSoKHQJABjoQ2-cCegQIABAA&oq=lublin+&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ7wMQJzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgoIABCxAxCDARBDOggIABCxAxCDAToHCAAQsQMQQzoFCAAQsQNQvQdYhBFgwRNoAHAAeACAAWGIAbUFkgEBOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=9UJ2YuO7MM2DqwGCgJnQAw&bih=577&biw=1229#imgrc=6g1bwpAWShFqyM'
//         },
//         {
//             id: "2",
//             city: "Manila",
//             img: 'https://www.google.com/search?q=lublin+&tbm=isch&ved=2ahUKEwijiuy5kM33AhXNwSoKHQJABjoQ2-cCegQIABAA&oq=lublin+&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ7wMQJzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgoIABCxAxCDARBDOggIABCxAxCDAToHCAAQsQMQQzoFCAAQsQNQvQdYhBFgwRNoAHAAeACAAWGIAbUFkgEBOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=9UJ2YuO7MM2DqwGCgJnQAw&bih=577&biw=1229#imgrc=6g1bwpAWShFqyM'
//         },
//         {
//             id: "3",
//             city: "Lviv",
//             img: 'https://www.google.com/search?q=lublin+&tbm=isch&ved=2ahUKEwijiuy5kM33AhXNwSoKHQJABjoQ2-cCegQIABAA&oq=lublin+&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ7wMQJzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgoIABCxAxCDARBDOggIABCxAxCDAToHCAAQsQMQQzoFCAAQsQNQvQdYhBFgwRNoAHAAeACAAWGIAbUFkgEBOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=9UJ2YuO7MM2DqwGCgJnQAw&bih=577&biw=1229#imgrc=6g1bwpAWShFqyM'
//         }
//     ];

//     const CityItem = ({id, city, img}) => {
//         return <View>
//           <Image source={{uri: img}} style = {{width: 50, height: 50}}/>
//             <Text>{city}</Text>
//         </View>
//     }

//     return (
//         <View style={styles.container}>
//             <Text>Nasza lista</Text>
//             <FlatList data={CITIES} renderItem={({item}) => <CityItem {...item}/>}
//                       keyExtractor={item => item.id}
//             />

//         </View>
//     );
// }

















// zadanie 1 
// import { StatusBar } from 'expo-status-bar';
// import { AntDesign } from "@expo/vector-icons";
// import { StyleSheet, Text, View, Image } from 'react-native';
// import AdaptiveIcon from './assets/adaptive-icon.png'

// const style = StyleSheet.create({
//   container:{
//     display: 'flex', alignItems: 'center' , justifyContent: 'center', height: '100%'
//   }, 
//   name:{
//     fontSize: 24 , color: 'blue'
//   }, 
//   surname:{
//     color: 'red', fontWeight: "bold" 
//   }
// })

// export default function App() {
//   return (
//     <View style={style.container}>
//       <View style={{ width: 10, height: 10, backgroundColor: 'red'}}/>
//       <View style={{ width: 10, height: 10, backgroundColor: 'blue'}}/>
//       <Text style={style.name}>Konrad<Text style={style.surname}> Buckowski</Text></Text>
//       <Image source={{uri: 'https://pngimg.com/uploads/pinterest/pinterest_PNG63.png'}} style={{height: 20, width: 20}}/>
//       <AntDesign name="linkedin-square" size={24} color="black" />

//     </View>
//   );
// }