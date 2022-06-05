import React from "react";
import {
    View,
    Text,
    Image, 
    StyleSheet,
    FlatList, 
    TouchableOpacity
} from "react-native";
import { Divider } from "react-native-elements";
import { useState, useEffect } from 'react';




const Post = ({post}) =>{
    
    return(
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation ='vertical' />
            <PostHeader post = {post}  />
            <PostImage post= {post} />
            <PostFooter post = {post}/>
        </View>
    )
}

const PostHeader =({post})=> {

    return(
    <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
        }}>
        <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: post.thumbnailUrl }} style={styles.story} /> 
                <Text style ={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>user.{post.id}
                </Text>   
            </View>    
        </View>

        <Text style={{ color: 'white', fontWeight: '900'}}>...</Text>
    </View>
)}

const PostImage = ({post}) => {
    
    return(
    <View 
    style={{
        width: '100%',
        height: 450,
    }}
    >
        <Image
        source={{ uri: post.url}}
        style={{height: '100%', resizeMode: 'cover'}}/>
    </View>    
)}

const PostFooter = ({post}) =>(
    <View>
        <Text style ={{ color: 'white', marginLeft: 5, fontWeight: '500' }}>Tytuł: {post.title}
        </Text>   

        <TouchableOpacity>
            <Image style={{  
            marginLeft: 5,     
            width: 40, 
            height: 40,
            resizeMode: 'contain'}}
            source = {require('../assets/heart.png')} />
        </TouchableOpacity>
        

    </View>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 13,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: 'orange'
    }
})


export default Post