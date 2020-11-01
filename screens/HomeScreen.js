import React from 'react'
import {View, Text, Image, ImageBackground,StyleSheet,Platform} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import HomeHeader from '../components/home/HomeHeader';
import Grad from '../components/home/Grad';
import Head from '../components/home/Head';
import Item from '../components/home/Item'
import { StatusBar } from 'expo-status-bar';
import CategoryGrid from '../components/CategoryGrid';

export default HomeScreen = ({navigation}) => {
    return(
        <View style={{backgroundColor:"#FFF",flex:1}}>
            <StatusBar backgroundColor="#1D6BA0"/>
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
            <Item/>
            <Head tit="Recently Visited"show={true}/>
            <Item/>
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
      backgroundColor:'#1D7CB2',
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