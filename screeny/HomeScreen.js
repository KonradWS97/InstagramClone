import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native'
import Header from '../componenty/Header'
import Storie from '../componenty/Storie'
import Post from '../componenty/Post' 
import BottomTabs, { bottomTabIcons } from '../componenty/BottomTabs'
import { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/photos'
async function getData(){
  const response = await fetch(url) 
  return await response.json()
}

const HomeScreen = ({navigation}) => {
    const [data, setData ] = useState([])
    useEffect(( )=>{getData().then(resData=> setData(resData)) },[])

    return <SafeAreaView style={style.container} >
        <Header  navigation={navigation}/>
        <Storie />
        <ScrollView>
            {data.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} /> 
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