import react from "react";
import{
    View,
    Image,
    Text,
    StyleSheet, 
    TouchableOpacity,
} from 'react-native'
const style =StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 5
    },
    logo: {
        width: 100, 
        height: 50,
        resizeMode: 'contain'
    },
    titleLogo: {
        flexDirection: 'row' 
    }
})
const Header = ({navigation}) => {
    return (
        <View style={style.container}> 
            <TouchableOpacity>
                <Image style={style.logo}
                source = {require('./../assets/instagramIcon.png')} />
            </TouchableOpacity>
            <View style ={style.titleLogo}>
                <TouchableOpacity>
                    <Image style={style.titleLogo}
                    source = {require('./../assets/letter.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.push('NewPostScreen')}>
                    <Image style={style.titleLogo}
                    source = {require('./../assets/reward.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header