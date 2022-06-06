import React from "react";
import {
    View,
    Text, 
    Image,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import FormikPostUploader from "./FormikPostUploader";


const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <FormikPostUploader/>
    </View>
)

const Header = ({navigation}) => {
    return(
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() =>navigation.goBack()}>
                <Image 
                    source={{ uri: 'https://img.icons8.com/ultraviolet/80/undefined/back.png'}}
                    style= {{ width: 30, height: 30}}
                />
            </TouchableOpacity>
            <Text style = {styles.headerText}> Nowy post</Text>
            <Text></Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 50,
    },
    headerContainer: {
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerText:
    {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 27,


    }


})

export default AddNewPost