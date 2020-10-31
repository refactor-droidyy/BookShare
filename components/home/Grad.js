import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default Grad = () => {
    return(
        <LinearGradient
        colors={["rgba(29, 107, 160 ,0.4)", "transparent"]}
        style={{
            left:0,
            right:0,
            height:90,
            marginTop:-45
        }}
       >
           <View style={{
               backgroundColor:"#FFF",
               paddingVertical:8,
               paddingHorizontal:20,
               marginHorizontal:20,
               borderRadius:15,
               marginTop:25,
               flexDirection:"row",
               alignItems:"center"
           }}>
               <TextInput
                    placeholder="Search"
                    placeholderTextColor="gray"
                    style={{
                        fontWeight:"bold",
                        fontSize:18,
                        width:260
                    }}
               />
               <Image
                source={require('../../assets/images/3.png')}
                style={{height:20,width:20}}
               />
           </View>
        </LinearGradient>
    )
}