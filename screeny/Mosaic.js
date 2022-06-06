import { 
    Text, 
    TouchableOpacity, 
    Image,
    Dimensions,
    View,
    ScrollView
    }
    from 'react-native'
import React from 'react'
import Images from '../componenty/Images'

const deviceHeight = Dimensions.get('window').height;
const deviceWidht = Dimensions.get('window').width

const Mosaic=({navigation}) =>{
    
    return (
    <View style={{marginTop: 40, backgroundColor: 'black'}}>
            <TouchableOpacity
            onPress={() =>navigation.goBack()}>
                <Image 
                    source={{ uri: 'https://img.icons8.com/ultraviolet/80/undefined/back.png'}}
                    style= {{ width: 30, height: 30}}
                />
            </TouchableOpacity>

        <ScrollView>
        <View style={{
                display: 'flex', 
                flexDirection: 'row',
                flexWrap: 'wrap'
                }}>
            {Images.map((imag, index) => (
                <View  >
                    <Image source ={{ uri: imag.url }} style ={{
                        height: deviceHeight/3,
                        width: deviceWidht/3 - 6,
                        margin: 2 ,
                    }}
                    />
                </View> 
            ))}
        </View>
        </ScrollView>
    </View>
    )
}
export default Mosaic