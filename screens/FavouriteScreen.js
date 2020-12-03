import React from 'react';
import {View,StyleSheet,StatusBar,TouchableOpacity,Image} from 'react-native';
import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { Feather, AntDesign} from '@expo/vector-icons';

const FavouriteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#FFF"/>
        <Block
        flex={false}
        margin={[20, 0]}
        style={styles.inputRow}
        style={styles.header}
      >
        <TouchableOpacity>
          <Feather
            name="arrow-left"
            size={32}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text h1 bold style={{marginHorizontal : 20}}>
          Favourite
        </Text>

        <TouchableOpacity 
                         onPress={() => navigation.navigate("DetailProductScreen",{ title : 'AI, Analytics and the New Machine Age' ,
                         uri : "https://m.media-amazon.com/images/I/51sjAdKurCL._SL320_.jpg",
                         tags: ["Artificial Intelligence", "Engineering"],
                         price : 400,
                         description : "Artificial Intelligence in Practice is a fascinating look into how companies use AI and machine learning to solve problems. Presenting 50 case studies of actual situations, this book demonstrates practical applications to issues faced by businesses around the globe. The rapidly evolving field of artificial intelligence has expanded beyond research labs and computer science departments and made its way into the mainstream business environment. Artificial intelligence and machine learning are cited as the most important modern business trends to drive success. It is used in areas ranging from banking and finance to social media and marketing. This technology continues to provide innovative solutions to businesses of all sizes, sectors, and industries. This engaging and topical book explores a wide range of cases illustrating how businesses use AI to boost performance, drive efficiency, and analyze market preferences"
                        })}
                        style={{
                            height:270,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            margin : 20,
                            borderRadius:15,
                            marginBottom:10,
                            width:500,
                            paddingHorizontal : 10
                        }}
                    >
                        <Image
                            source={{ uri : "https://m.media-amazon.com/images/I/51sjAdKurCL._SL320_.jpg",height : 190 ,  width : 500} } 
                            resizeMode='stretch'
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Ai,Analytics</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र 400</Text>
                        </View>
                        <View style={{ flexDirection : 'row', justifyContent : 'space-between'}}>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                        }}>
                            India
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

                    <TouchableOpacity 
                        onPress={() => navigation.navigate("DetailProductScreen",{ title : 'Databook' ,
                        uri : "https://m.media-amazon.com/images/I/41FsQr4APgL.jpg",
                        tags: ["Information Technology", "engineering", "DataBook"],
                        price : 200,
                        description : "Artificial Intelligence in Practice is a fascinating look into how companies use AI and machine learning to solve problems. Presenting 50 case studies of actual situations, this book demonstrates practical applications to issues faced by businesses around the globe. The rapidly evolving field of artificial intelligence has expanded beyond research labs and computer science departments and made its way into the mainstream business environment. Artificial intelligence and machine learning are cited as the most important modern business trends to drive success. It is used in areas ranging from banking and finance to social media and marketing. This technology continues to provide innovative solutions to businesses of all sizes, sectors, and industries. This engaging and topical book explores a wide range of cases illustrating how businesses use AI to boost performance, drive efficiency, and analyze market preferences"
                    })}
                        style={{
                          height:270,
                          elevation:2,
                          backgroundColor:"#FFF",
                          marginLeft:20,
                          margin : 20,
                          borderRadius:15,
                          marginBottom:10,
                          width:500,
                          paddingHorizontal : 10
                        }}
                    >
                        <Image
                           resizeMode='stretch'
                           source={{ uri : "https://m.media-amazon.com/images/I/41FsQr4APgL.jpg",height : 190 ,  width : 500} } 
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>DataBook</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र 200</Text>
                        </View>
                        <View style={{ flexDirection : 'row', justifyContent : 'space-between'}}>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                        }}>
                            India
                        </Text>
                        <View style={{flexDirection : 'row' , alignItems : 'center',paddingHorizontal : 5}}>
                        <Text style={{
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            2
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
                            Seller - Dr. Vishal
                        </Text>
                    </TouchableOpacity>

                
      </Block>

      
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
      paddingHorizontal: theme.sizes.base * 1.5,
      marginTop : theme.sizes.base * 2
    },
    inputRow: {
      alignItems: "flex-end",
      marginTop: theme.sizes.base / 2,
    },
    container : {
      flex: 1,
      backgroundColor: "white",
      marginTop : 10,
    }
});

export default FavouriteScreen;