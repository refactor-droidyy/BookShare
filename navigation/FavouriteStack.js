import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavouriteScreen from "../screens/FavouriteScreen";
const Favourite = createStackNavigator();

export const FavouriteStack = () => {
  return (
    <Favourite.Navigator screenOptions={{ headerShown: false }}>
      <Favourite.Screen
        name="CartScreen"
        component={FavouriteScreen}
        options={{ title: "Shopping Cart" }}
      />
    </Favourite.Navigator>
  );
};
