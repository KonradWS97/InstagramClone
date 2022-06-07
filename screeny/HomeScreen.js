import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    ScrollView,
} from 'react-native'
import Header from '../componenty/Header'
import Storie from '../componenty/Storie'
import Post from '../componenty/Post' 
import BottomTabs, { bottomTabIcons } from '../componenty/BottomTabs'
import { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
async function getData(){
  const response = await fetch(url) 
  return await response.json()
}

const HomeScreen = ({navigation}) => {
    const [data, setData ] = useState([])
    useEffect(( )=>{getData().then(resData=> {setData(resData); console.log(resData)}) },[])

    return <SafeAreaView style={style.container} >
        <Header  navigation={navigation}/>
        <Storie />

        {/* {data.length> 0 && <View >
            <FlatList
            keyExtractor={(post)=> post.id } data={data} renderItem={({post})=>
                <View>
                <Post post={post}  /></View> }
            />
        </View> } */}

            <ScrollView>
            {data.map((post, index) => (
                <Post post={post} key={index} />
            ))}
            </ScrollView>
        {/* <BottomTabs icons={bottomTabIcons} />  */}
    </SafeAreaView>
}

const style = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: '#080808',
        flex: 1, 
    },
})

export default HomeScreen