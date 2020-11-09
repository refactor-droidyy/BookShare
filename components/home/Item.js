import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import {Feather,AntDesign} from '@expo/vector-icons';

export default Item = ({prodname,price,hand,star,sellerName,navigation}) => {
    return(
        <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:300}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:80,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("DetailsProductScreen")}
                        style={{
                            height:270,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../assets/images/4.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <View style={{ flexDirection : 'row', justifyContent : 'space-between'}}>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                        }}>
                            RUSSIA
                        </Text>
                        <View style={{flexDirection : 'row' , alignItems : 'center',paddingHorizontal : 5}}>
                        <Text style={{
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            3
                        </Text>
                        <AntDesign name="star" color="yellow" size={20}/>
                        </View>
                        
                        </View>
                        <Text style={{
                            marginHorizontal : 10,
                            fontWeight:"300",
                            color:"gray",
                            paddingTop:3
                        }}>
                            Seller - Rohit Verma
                        </Text>
                    </TouchableOpacity>
                </ScrollView>    
    )
}