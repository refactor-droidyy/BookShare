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
                            width:160
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
                            width:160
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

                    <TouchableOpacity 
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'Pro Angular 6' ,
                        uri : "https://images-eu.ssl-images-amazon.com/images/I/41scLTPFbbL._AC_SX184_.jpg",
                        tags: ["Development", "Engineering"],
                        price : 500,
                        description : "Angular in your projects, starting from the nuts and bolts and building up to the most advanced and sophisticated features, going in-depth to give you the knowledge you need. Chapters include common problems and how to avoid them"
                    })}
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
                        resizeMode='stretch'
                            source={{ uri : "https://images-eu.ssl-images-amazon.com/images/I/41scLTPFbbL._AC_SX184_.jpg",height : 190 ,  width : 200} } 
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Angular 6</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र 500</Text>
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
                            Seller - Abhijai Singh
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'The Essential of Vedic Mathematics....' ,
                        uri : "https://m.media-amazon.com/images/I/81W1o0jBU5L._AC_UY218_.jpg",
                        tags: ["Mathematics", "Engineering"],
                        price : 300,
                        description : "The author has attempted to codify several useful results embedded in the ancient lore, in a form which is easily accessible to the children learning mathematics. Many of the chapters deal with computations using simple techniques which will shorten the effort involved in the conventional approach. The price one pays, of course, is that one has to learn the tricks, memorize them and use the appropriate one for each problem. While one might think that this takes away the generality of the modern approach,"
                    })}
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
                        resizeMode='stretch'
                            source={{ uri : "https://m.media-amazon.com/images/I/81W1o0jBU5L._AC_UY218_.jpg",height : 190 ,  width : 200} } 
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Vedic Mat</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र 300</Text>
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
                            4
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
                            Seller - Ankur Singh
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
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'Modern Recording Technique ....' ,
                        uri : "https://m.media-amazon.com/images/I/51WRQ1c-FWL.jpg",
                        tags: ["Aritificial Intelligence", "Engineering"],
                        price : 300,
                        description : "Modern Recording Techniques is the bestselling, authoritative guide to sound and music recording. Whether you're just starting out or are looking for a step-up in the industry, Modern Recording Techniques provides an in-depth read on the art and technologies of music production. It's a must-have reference for all audio bookshelves. Using its familiar and accessible writing style, this ninth edition has been fully updated, presenting the latest production technologies and includes an in-depth coverage of the DAW, networked audio, MIDI, signal processing and much more. A robust companion website features video tutorials, web-links, an online glossary, flashcards, and a link to the author's blog. Instructor resources include a test bank and an instructor's manual. The ninth edition includes: Updated tips, tricks and insights for getting the best out of your studio An introduction to the Apple iOS in music production Introductions to new technologies and important retro studio techniques The latest advancements in DAW systems, signal processing, mixing and mastering"
                    })}
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
                           resizeMode='stretch'
                           source={{ uri : "https://m.media-amazon.com/images/I/51WRQ1c-FWL.jpg",height : 190 ,  width : 200} } 
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Modern Rec</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र300</Text>
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
                            Seller - Dr. Mary
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                       onPress={() => navigation.push("DetailProductScreen",{ title : 'Element of Chemical Reaction ....' ,
                       uri : "https://m.media-amazon.com/images/I/511LKFRBu7L.jpg",
                       tags: ["Chemical Engineering", "engineering"],
                       price : 500,
                       description : "The fourth edition of Elements of Chemical Reaction Engineering is a completely revised version of the worldwide best-selling book. It combines authoritative coverage of the principles of chemical reaction engineering with an unsurpassed focus on critical thinking and creative problem solving, employing open-ended questions and stressing the Socratic method. Clear and superbly organized, it integrates text, visuals, and computer simulations to help readers solve even the most challenging problems through reasoning, rather than by memorizing equations.Thorough coverage of the fundamentals of chemical reaction engineering forms the backbone of this trusted text. To enhance the transfer of core skills to real-life settings, three styles of problems are included for each subject"
                   })}
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
                           resizeMode='stretch'
                           source={{ uri : "https://m.media-amazon.com/images/I/511LKFRBu7L.jpg",height : 190 ,  width : 200} } 
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Element of...</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>र500</Text>
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
                            Seller - Dr. Mary
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.push("DetailProductScreen",{ title : 'Databook' ,
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
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                           resizeMode='stretch'
                           source={{ uri : "https://m.media-amazon.com/images/I/41FsQr4APgL.jpg",height : 190 ,  width : 200} } 
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
                            }}>र200</Text>
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