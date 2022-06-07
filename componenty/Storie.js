import React from 'react'
import { View , 
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { ScrollView } from 'react-native'
import { USERS } from '../assets/users'


const Stories = () => {
  return (
    <View style={{ marginBottom: 10}}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator ={false}>
            {USERS.map((story, index) => (
                <View key = {story.user}>
                    <Image source ={{ uri: story.image }} style ={styles.story}/>
                    <Text style={styles.storyTitle}>{story.user}</Text>
                </View> 
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 13,
        marginTop: 10,
        borderWidth: 7,
    }, 
    storyTitle: {
        marginLeft: 23,
        borderWidth: 7,
        color: 'orange'
    }
    
})

export default Stories