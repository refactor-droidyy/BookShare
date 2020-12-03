import React from 'react';
import {View,StyleSheet,StatusBar,TouchableOpacity,Image,Alert} from 'react-native';
import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { Feather, AntDesign} from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default Comic = ({navigation}) => {
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
          Comic
        </Text>

       <ScrollView style={{height : 600}}>
       <TouchableOpacity 
                         onPress={() => navigation.push("DetailProductScreen",{ title : 'AI, Analytics and the New Machine Age' ,
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
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:200
                        }}
                    >
                        <Image
                            source={{ uri : "https://m.media-amazon.com/images/I/51sjAdKurCL._SL320_.jpg",height : 190 ,  width : 200} } 
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
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'Agile Leadership Toolkit' ,
                        uri : "https://images-eu.ssl-images-amazon.com/images/I/41fqsGcuBxL._AC_SX184_.jpg",
                        tags: ["Software Development", "Engineering"],
                        price : 600,
                        description : "Designing, developing, testing and managing software programs and systems encompass the field of software engineering. Due to its susceptibility to changes, the field is making advancements every now and then. The book, now in its Fifth Edition, has been restructured and revised completely to study the latest trends and developments in the field. It illustrates various emerging frameworks of software testing and designs in traditional, structured and unstructured environments. Several worked-out examples and practice problems have been included in each chapter. NEW TO THIS EDITION In almost every chapter, several sections have been completely rewritten to increase readability. Several new topics on latest development have been included in almost every chapter, such as agile development using SCRUM, MC/DC testing, quality models, etc. A large number of additional multiple choice questions and review questions have been added in all the chapters to help students understand the concepts readily."

                    })}
                        style={{
                            height:270,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:200
                        }}
                    >
                        <Image
                        resizeMode='stretch'
                            source={{ uri : "https://images-eu.ssl-images-amazon.com/images/I/41fqsGcuBxL._AC_SX184_.jpg",height : 190 ,  width : 200} } 
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Agile Meth.</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र 600</Text>
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
                            Seller - Vishal Mishra
                        </Text> 
                    </TouchableOpacity>
       </ScrollView>

       <Block row>
          <TouchableOpacity style={styles.gridItem} backgroundColor="#95EE65"
                              onPress={() => Alert.alert(
                                "You Have Succesfully Placed The Order",
                                "",
                                [
                                  {
                                    text: "Okay",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                  },
                                  
                                ],
                                { cancelable: false }
                              )}>
                                <Text style={styles.title}>Total Payble Amount र 1000</Text>
          </TouchableOpacity>
        
          </Block>
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
    },
    gridItem: {
      flex: 1,margin: 15, height: 50,
      width : 120,
      borderRadius: 30,
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

