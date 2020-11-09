import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default Head = ({tit , show}) => {
    return(
        <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>{tit}</Text>

                   </View>
                   {show && (<View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#0AC4BA",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:50
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>)}
               </View>
    )
}