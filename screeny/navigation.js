import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import Mosaic from "./Mosaic";
import {
    View,
    Text,
    Image, 
    StyleSheet,
    FlatList, 
    TouchableOpacity
} from "react-native";


const Tab = createBottomTabNavigator();

const Tabs =()=> {
return(
    <Tab.Navigator 
    tabBarOptions={{
        showLabel: false,
        style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: 'red',
            borderRadius: 15,
            height: 40,
            ...styles.shadow
        }
    }}
    >
        <Tab.Screen name="HomeScreeen" component={HomeScreen}
        options ={{ tabBarIcon: ({focused}) =>(
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 1}}>
                <Image 
                source={{uri: 'https://img.icons8.com/fluency-systems-regular/48/undefined/home.png'}}
                resizeMode='contain'
                style={{width: 25, height: 25, color: 'black'}}/>
            </View>

        ),}}
            />
        <Tab.Screen name='NewPostScreen' component={NewPostScreen}
                options ={{ tabBarIcon: ({focused}) =>(
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 1}}>
                        <Image 
                        source={{uri: 'https://img.icons8.com/material-outlined/48/undefined/search-bar.png'}}
                        resizeMode='contain'
                        style={{width: 25, height: 25, color: 'black'}}/>
                    </View>
        
                ),}}
                    />
        <Tab.Screen name='Mosaic' component={Mosaic}
            options ={{ tabBarIcon: ({focused}) =>(
                <View style={{ alignItems: 'center', justifyContent: 'center', top: 1}}>
                    <Image 
                    source={{uri: 'https://img.icons8.com/color/48/undefined/instagram-reel.png'}}
                    resizeMode='contain'
                    style={{width: 25, height: 25, color: 'black'}}/>
                </View>
    
            ),}}        
        />
    </Tab.Navigator>

)
}

const styles = StyleSheet.create ({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    }
})



export default Tabs













// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import 'react-native-gesture-handler'
// import React from "react";
// import {
//     View,
//     Text, 
//     Image,
// } from 'react-native'
// import { StackRouter } from "react-navigation";
// import HomeScreen from "./HomeScreen";
// import NewPostScreen from "./NewPostScreen";
// import Mosaic from "./Mosaic";

// const Stack = 
// createStackNavigator()

// const screenOptions = {
//     headerShown: false,
// }

// const SingedInStack = () => (
//     <NavigationContainer>
//         <Stack.Navigator
//             initialRouteName = 'HomeScreen'
//             screenOptions={screenOptions}>
//             <Stack.Screen name='HomeScreen' component={HomeScreen}/>
//             <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
//             <Stack.Screen name='Mosaic' component={Mosaic}/>
//         </Stack.Navigator>
//     </NavigationContainer>

// )


// export default SingedInStack
