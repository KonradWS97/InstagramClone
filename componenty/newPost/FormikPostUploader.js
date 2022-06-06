import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import React, {useState} from 'react'
import {  Divider } from 'react-native-elements'
import {
    View,
    Text, 
    Image,
    Button,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity, 
    TextInput,
} from 'react-native'


const PLACEHOLDER_IMG = 'https://www.cgsusa.org/wp-content/uploads/cropped-placeholder.jpg' 

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the charakter limit.')
})

const FormikPostUploader = () => {
    const [ thumbnailUrl , setThumbnailUrl] = useState('PLACEHOLDER_IMG')
return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values)=> console.log(values)}
    validationSchema ={uploadPostSchema}   
    validateOnMount ={true}
    >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid,
        })=>(
            <>
                <View style= {{
                    margin: 20, 
                    justifyContent: 'space-between',
                    flexDirection: 'row'}}>
                    <Image 
                    source={{ uri: thumbnailUrl ? thumbnailUrl:PLACEHOLDER_IMG}} 
                    style={{width: 100, height: 100}}
                    />
                    
                <View style={{flex: 1 , marginLeft: 15}}>
                    <TextInput
                    style= {{ color: 'white', fontSize: 20 }}
                    placeholder ='Write'
                    placeholderTextColor='grey'
                    multiline={true}
                    onChangeText={handleChange('caption')}
                    onBlur= {handleBlur('caption')}
                    value={values.caption}
                    />
                </View>
                </View>               
                <Divider width={2} orientation='vertical'/>              
                <TextInput
                onChange={(e) =>setThumbnailUrl(e.nativeEvent.text)}
                    style={{color: 'white', fontSize: 20}}
                    placeholder ='hello'
                    placeholderTextColor='grey'
                    onChangeText={handleChange('imageUrl')}
                    onBlur= {handleBlur('imageUrl')}
                    value={values.imageUrl} 
                />
                {errors.imageUrl && (
                    <Text style={{fontSize: 10, color:'red'}}>
                        {errors.imageUrl}
                    </Text>
                )}
                <Button  onPress={handleSubmit} title='Share' disabled ={!isValid}/>
            </>
        )}
        
    </Formik>
)
}
export default FormikPostUploader