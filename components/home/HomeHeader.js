import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
export default HomeHeader = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#0AC4BA",
            height:"28%",
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal:20
        }}>
            <TouchableOpacity onPress={ () => navigation.openDrawer()}>
            <Image
                 source={require('../../assets/images/1.png')}
                 style={{
                     height:10,
                     width:20,
                     marginTop:50
                 }}
                 
            />
            </TouchableOpacity>
           
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
                     }}>Hi, Rohit </Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                     <Image
                         source={require('../../assets/icons/avatar.png')}
                         style={{height:60,width:60 ,borderRadius: 500, margin: 5}}
                         
                     />
                </View>
            </View>
        </View>
    );
}