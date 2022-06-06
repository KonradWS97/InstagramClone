import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler'
import React from "react";
import {
    View,
    Text, 
    Image,
} from 'react-native'
import { StackRouter } from "react-navigation";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import Mosaic from "./Mosaic";

const Stack =createStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SingedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName = 'HomeScreen'
            screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
            <Stack.Screen name='Mosaic' component={Mosaic}/>
        </Stack.Navigator>
    </NavigationContainer>

)


export default SingedInStack
