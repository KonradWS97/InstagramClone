import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native'
import Header from './Header'
import Storie from './Storie'
import Post from './Post'
import { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/photos'
async function getData(){
  const response = await fetch(url) 
  return await response.json()
}

const HomeScreen = () => {
    const [data, setData ] = useState([])
    useEffect(( )=>{getData().then(resData=> setData(resData)) },[])

    return <SafeAreaView style={style.container} >
        <Header />
        <Storie />
        <ScrollView>
            {data.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </ScrollView>
    </SafeAreaView>
}

const style = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: 'black',
        flex: 1, 
    },
})

export default HomeScreen