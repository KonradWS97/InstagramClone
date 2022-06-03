import React from "react";
import {
    View,
    Text,
    Image, 
    StyleSheet,
    FlatList
} from "react-native";
import { Divider } from "react-native-elements";
import { useState, useEffect } from 'react';




const Post = ({post}) =>{
    
    return(
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation ='vertical' />
            <PostHeader post = {post}  />
            <PostImage post= {post} />
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
            <View >
                <Image source={{uri: post.thumbnailUrl }} style={styles.story} /> 
                <Text style ={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.id}
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
        source={{ uri: post.thumbnailUrl}}
        style={{height: '100%', resizeMode: 'cover'}}/>
    </View>    
)}
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