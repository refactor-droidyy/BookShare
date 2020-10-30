import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import CategoryScreen from "../screens/CategoryScreen";

const HomeNavigator = createStackNavigator();

export const HomeStack = () => {
  return (
    <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <HomeNavigator.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ title: "Home" }}
      />
      <HomeNavigator.Screen
        name="ProductDetail"
        component={ProductDetails}
        options={{ title: "Home" }}
      />
    </HomeNavigator.Navigator>
  );
};
