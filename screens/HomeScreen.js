import React from 'react'
import {View, Text, Image, ImageBackground,StyleSheet,Platform} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import HomeHeader from '../components/home/HomeHeader';
import Grad from '../components/home/Grad';
import Head from '../components/home/Head';
import { StatusBar } from 'expo-status-bar';
import { Feather, AntDesign} from '@expo/vector-icons';

export default HomeScreen = ({navigation}) => {
    return(
        <View style={{backgroundColor:"#FFF",flex:1}}>
            <StatusBar backgroundColor="#0AC4BA"/>
            <HomeHeader/>
            <Grad />  
            <ScrollView  showsVerticalScrollIndicator={false}>
            <Head tit="Category" show={false}/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.gridItem} 
                          onPress={() => navigation.push('ProductDetail',{title : 'Sci-Fi'})}>
        <Text style={styles.title}>Sci-Fi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#DE8D52"
                          onPress={() => navigation.push('ProductDetail',{title : 'Comic'})}>
        <Text style={styles.title}>Comic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#95EE65"
                              onPress={() => navigation.push('ProductDetail',{title : 'Novel'})}>
        <Text style={styles.title}>Novel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#EE6565"
                                onPress={() => navigation.push('ProductDetail',{title : 'Mystery'})}>
        <Text style={styles.title}>Mystery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#D6939D"
                           onPress={() => navigation.push('ProductDetail',{title : 'Fantasy'})}>
        <Text style={styles.title}>Fantasy</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.gridItem} backgroundColor="#7674D6"
                           onPress={() => navigation.push('ProductDetail',{title : 'Action'})}>
        <Text style={styles.title}>Action</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#764AB6"
                           onPress={() => navigation.push('ProductDetail',{title : 'Horror'})}>
        <Text style={styles.title}>Horror</Text>
        </TouchableOpacity>

    </ScrollView>
            
            <Head tit="Recommended" show={true}/>

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
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'DetailProduct'})}
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
                            source={require('../assets/images/4.png')}
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

            <Head tit="Recently Visited"show={true}/>

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
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'DetailProduct'})}
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
                            source={require('../assets/images/4.png')}
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


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,margin: 15, height: 50,
width : 120,
      borderRadius: 30,
      overflow:
        Platform.OS === 'android' && Platform.Version >= 21
          ? 'hidden'
          : 'visible',
      elevation: 5,
      backgroundColor:'#0AC4BA',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color : '#FFF',
      fontSize: 16,
      textAlign: 'center'
    }
  });
// #1D6BA0