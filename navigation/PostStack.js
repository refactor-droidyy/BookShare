import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from '../screens/PostScreen';
import PostList from '../screens/PostList';
const PostStackNavigator = createStackNavigator();

export const PostStack = () => {
  return (
    <PostStackNavigator.Navigator screenOptions={{ headerShown: false }}>

       <PostStackNavigator.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ title: "PostScreen" }}
      />
       <PostStackNavigator.Screen
        name="PostList"
        component={PostList}
        options={{ title: "PostList" }}
      />
       
    
    </PostStackNavigator.Navigator>
  );
};