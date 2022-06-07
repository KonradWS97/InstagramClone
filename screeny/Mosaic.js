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
import Images from '../componenty/Images';
// import Images from '../componenty/Images'

const amages = [
    {url: 'https://picsum.photos/200/300?random=1'},
    {url: 'https://picsum.photos/200/300?random=2'},
    {url: 'https://picsum.photos/200/300?random=3'},
    {url: 'https://picsum.photos/200/300?random=4'},
    {url: 'https://picsum.photos/200/300?random=5'},
    {url: 'https://picsum.photos/200/300?random=6'},
    {url: 'https://picsum.photos/200/300?random=7'},
    {url: 'https://picsum.photos/200/300?random=8'},
    {url: 'https://picsum.photos/200/300?random=9'},
    {url: 'https://picsum.photos/200/300?random=10'},
    {url: 'https://picsum.photos/200/300?random=11'},
    {url: 'https://picsum.photos/200/300?random=12'},
    {url: 'https://picsum.photos/200/300?random=13'},
    {url: 'https://picsum.photos/200/300?random=14'},
    {url: 'https://picsum.photos/200/300?random=15'},
    {url: 'https://picsum.photos/200/300?random=16'},
    {url: 'https://picsum.photos/200/300?random=17'},
    {url: 'https://picsum.photos/200/300?random=18'},
    {url: 'https://picsum.photos/200/300?random=19'},
    {url: 'https://picsum.photos/200/300?random=20'},
    {url: 'https://picsum.photos/200/300?random=21'},
    {url: 'https://picsum.photos/200/300?random=22'},
    {url: 'https://picsum.photos/200/300?random=23'},
    {url: 'https://picsum.photos/200/300?random=24'},
    {url: 'https://picsum.photos/200/300?random=25'},    
]

const deviceHeight = Dimensions.get('window').height;
const deviceWidht = Dimensions.get('window').width

const Mosaic=({navigation}) =>{
    
    return (
    <View style={{marginTop: 40, backgroundColor: 'black'}}>
            <TouchableOpacity
            onPress={() =>navigation.goBack()} 
            >
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
            {amages.map((stories, index) => (
                <View  >
                    <Image source ={{ uri: stories.url }} style ={{
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