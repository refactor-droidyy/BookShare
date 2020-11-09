import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import DetailProductScreen from "../screens/DetailProductScreen";

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
        name="DetailProductScreen"
        component={DetailProductScreen}
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
