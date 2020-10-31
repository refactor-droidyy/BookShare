import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
export default HomeHeader = () => {
    return(
        <View style={{
            backgroundColor:"#1D6BA0",
            height:"28%",
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal:20
        }}>
            <Image
                 source={require('../../assets/images/1.png')}
                 style={{
                     height:10,
                     width:20,
                     marginTop:50
                 }}
            />
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginTop:25,
                width:"100%"
            }}>
                <View style={{width:"50%"}}>
                     <Text style={{
                         fontSize:28,
                         color:"#FFF",
                         fontWeight:"bold"
                     }}>Hi Vishal</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                     <Image
                         source={require('../../assets/images/avatar.png')}
                         style={{height:60,width:60}}
                     />
                </View>
            </View>
        </View>
    );
}