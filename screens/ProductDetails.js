import React from "react";
import { View, StyleSheet,TouchableOpacity,Image,KeyboardAvoidingView,StatusBar,ScrollView} from "react-native";
import { Divider, Button, Block, Text, Switch, Input } from "../components";
import {Feather,AntDesign} from '@expo/vector-icons';
import { theme } from "../constants";
import { FlatList } from "react-native";

const ProductDetails = ({route , navigation}) => {
  const { title } = route.params;
  return (
    <KeyboardAvoidingView style={styles.login} behavior="height">
    <StatusBar backgroundColor="white" />
    <Block
      style={{
        marginTop: theme.sizes.base * 3,
        marginHorizontal: theme.sizes.base * 1.1,
      }}
      padding={[0, theme.sizes.base * 1.1]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={32}
          color="black"
        />
      </TouchableOpacity>
      <Text h1 bold style={{ marginTop: theme.sizes.base }}>
        {title}
      </Text>
    </Block>
    <ScrollView style={{height : 600}}>
       <TouchableOpacity 
                         onPress={() => navigation.push("DetailProductScreen",{ title : 'AI, Analytics and the New Machine Age' ,
                         uri : "https://rukminim1.flixcart.com/image/416/416/ki4w0i80-0/book/q/b/n/dark-matter-original-imafxzubmczqshju.jpeg?q=70",
                         tags: ["Sci-Fi", "Suspense"],
                         price : 400,
                         description : "Brilliant. . . I think Blake Crouch just invented something new.' - Lee Child, author of the Jack Reacher series. From Blake Crouch, the author of the bestselling Wayward Pines trilogy, Dark Matter is a brilliantly plotted tale that is at once sweeping and intimate, mind-bendingly strange and profoundly human - a relentlessly surprising thriller about choices, paths not taken, and how far we'll go to claim the lives we dream of, perfect for fans of Stranger Things and Ready Player One. 'Are you happy in your life?' Those are the last words Jason Dessen hears before the masked abductor knocks him unconscious. Before he awakes to find himself strapped to a gurney, surrounded by strangers in hazmat suits. Before the man he's never met smiles down at him and says, 'Welcome back.' In this world he's woken up to, Jason's life is not the one he knows. His wife is not his wife. His son was never born. And Jason is not an ordinary college physics professor, but a celebrated genius who has achieved something remarkable. Something impossible. Is it this world or the other that's the dream? And even if the home he remembers is real, how can Jason possibly make it back to the family he loves? The answers lie in a journey more wondrous and horrifying than anything he could've imagined - one that will force him to confront the darkest parts of himself even as he battles a terrifying, seemingly unbeatable foe."
                         ,title : "Dark Matters"})}
                        style={{
                            height:270,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:300
                        }}
                    >
                        <Image
                            source={{ uri : "https://rukminim1.flixcart.com/image/416/416/ki4w0i80-0/book/q/b/n/dark-matter-original-imafxzubmczqshju.jpeg?q=70",height : 190 ,  width : 300} } 
                            resizeMode='stretch'
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Dark Matters</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र 700</Text>
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
                            Seller - Birju Verma
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'Agile Leadership Toolkit' ,
                        uri : "https://rukminim1.flixcart.com/image/416/416/jpinjbk0/book/8/0/2/life-3-0-original-imafbqhpjgcfd8gn.jpeg?q=70",
                        tags: ["SCi-Fi", "Suspense"],
                        price : 600,
                        title : "Life 3.0",
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
                            width:300
                        }}
                    >
                        <Image
                        resizeMode='stretch'
                            source={{ uri : "https://rukminim1.flixcart.com/image/416/416/jpinjbk0/book/8/0/2/life-3-0-original-imafbqhpjgcfd8gn.jpeg?q=70",height : 190 ,  width : 300} } 
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Life 3.0</Text>
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
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ProductDetails;