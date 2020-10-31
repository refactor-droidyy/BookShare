import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import HomeHeader from '../components/home/HomeHeader';
import Grad from '../components/home/Grad';
import Head from '../components/home/Head';
import Item from '../components/home/Item'

export default HomeScreen = ({navigation}) => {
    return(
        <View style={{backgroundColor:"#FFF",flex:1}}>
            <HomeHeader/>
            <Grad/>  
            <ScrollView>
            <Head tit="Category"/>
            <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:10}}
                >
                    <Image
                        source={require("../assets/images/18.png")}
                        style={{marginTop:20,marginHorizontal:20, borderRadius : 10 ,width : 100 , height : 100}}
                    />
                    <View style={{marginTop:20,marginHorizontal:20,justifyContent : 'center', borderRadius : 10 ,width : 100 , height : 100}}>
                        <Text style={{fontSize : 20 }}>Comic</Text>
                    </View>
                     <Image
                        source={require("../assets/images/19.png")}
                        style={{marginTop:20,marginHorizontal:10, borderRadius : 10 ,width : 100 , height : 100}}
                    />
                     <Image
                        source={require("../assets/images/19.png")}
                        style={{marginTop:20,marginHorizontal:10, borderRadius : 10 ,width : 100 , height : 100}}
                    />
                     <Image
                        source={require("../assets/images/19.png")}
                        style={{marginTop:20,marginHorizontal:10, borderRadius : 10 ,width : 100 , height : 100}}
                    />
                     <Image
                        source={require("../assets/images/19.png")}
                        style={{marginTop:20,marginHorizontal:10, borderRadius : 10 ,width : 100 , height : 100}}
                    />
                </ScrollView>
            <Head tit="Recommended"/>
            <Item/>
            <Head tit="Previously Visited"/>
            <Item/>
            </ScrollView>
            
        </View>
    )
}

// #1D6BA0