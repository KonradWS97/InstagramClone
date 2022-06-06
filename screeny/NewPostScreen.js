import React from "react";
import {
    View,
    Text, 
    SafeAreaView
} from 'react-native'
import AddNewPost from "../componenty/newPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
    return(
        <SafeAreaView style = {{ backgroundColor: '#080808', flex: 1}}>
            <AddNewPost navigation={navigation} /> 
        </SafeAreaView>
    )
}
export default NewPostScreen