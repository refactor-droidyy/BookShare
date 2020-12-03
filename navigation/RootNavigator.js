import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, Block, Button } from "expo-ui-kit";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { HomeStack } from "./HomeStack";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { AuthStack } from "./AuthStack";
import { SettingStack } from "./SettingStack";
import { CartStack } from "./CartStack";
import { FavouriteStack } from "./FavouriteStack";
import { PostStack } from "./PostStack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
  const option = {
    headerTransparent: true,
    headerTitle: null,
  };

  return (
    <Animated.View style={[{ overflow: "hidden", flex: 1 }, style]}>
      <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={HomeStack} options={option} />
        <Stack.Screen name="CartStack" component={CartStack}  options={{ headerShown: false }} />
       
        <Stack.Screen
          name="SettingStack"
          component={SettingStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PostStack"
          component={PostStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AuthStack" component={AuthStack}   options={{ headerShown: false }} />
        <Stack.Screen name="FavouriteStack" component={FavouriteStack}   options={{ headerShown: false }}/>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Block>
        <Block flex={0.4} margin={20} bottom>
          <Image
            source={require('../assets/icons/avatar.png')}
            resizeMode="center"
            style={{ height:200,width:200 ,borderRadius: 500 }}
          />
          <Text numberOfLines={1} ellipsizeMode="tail" white>
            Rohit Verma
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" white size={16}>
            rohitlucknow14@gmail.com
          </Text>
        </Block>
        <DrawerItem
          labelStyle={{ color: "white", marginLeft: -16 }}
          label="Home"
          onPress={() => props.navigation.navigate("HomeStack")}
          icon={() => <Feather name="home" size={18} color="white" />}
        />
        <DrawerItem
          labelStyle={{ color: "white", marginLeft: -16 }}
          label="Cart"
          onPress={() => props.navigation.navigate("CartStack")}
          icon={() => <Feather name="shopping-cart" size={18} color="white" />}
        />
        <DrawerItem
          labelStyle={{ color: "white", marginLeft: -16 }}
          label="Upload"
          onPress={() => props.navigation.navigate("PostStack")}
          icon={() => <Feather name="message-square" size={18} color="white" />}
        />
         <DrawerItem
          labelStyle={{ color: "white", marginLeft: -16 }}
          label="Favourite"
          onPress={() => props.navigation.navigate("FavouriteStack")}
          icon={() => (
            <Feather name="heart" color="red" size={18} color="white" />
          )}
        />
        <DrawerItem
          labelStyle={{ color: "white", marginLeft: -16 }}
          label="Settings"
          onPress={() => props.navigation.navigate("SettingStack")}
          icon={() => (
            <Feather name="sliders" color="red" size={18} color="white" />
          )}
        />

      </Block>
    </DrawerContentScrollView>
  );
};

export const RootStack = (props) => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  //create Animation scale
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  //animate  the border radius
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  // adding some gradient we need to wrap the Drawer.Navigatior inside a View

  const screenStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient style={{ flex: 1 }} colors={["red ", "blue"]}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="HomeScreen"
        drawerStyle={{ width: "55%", backgroundColor: "transparent" }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "green",
          inactiveTintColor: "green",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={screenStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
