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

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-regular/48/undefined/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-filled/48/undefined/home.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/material-outlined/48/undefined/search-bar.png',
        inactive: 'https://img.icons8.com/material/48/undefined/search-bar--v1.png'
    },
    {
        name: 'reel',
        active: 'https://img.icons8.com/color/48/undefined/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/50/undefined/instagram-reel.png'
    },
]

const BottomTabs =({icons}) =>{
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}> 
            <Image source={{uri: activeTab == icon.name ? icon.active : icon.inactive}}
            style={styles.icon}/>
        </TouchableOpacity>
    )
    return (
        <View style= {styles.wrapper}>
            <Divider width={2} orientation = 'vertical'/>
            <View style={styles.container}>
                {icons.map((icon ,index)=> (
                    <Icon key = {index} icon={icon}/>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50, 
        paddingTop: 3,
        backgroundColor: '#181818'
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    }
})

export default BottomTabs