import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from '../screens/CartScreen';
const CartNavigator = createStackNavigator();

export const CartStack = () => {
  return (
    <CartNavigator.Navigator screenOptions={{ headerShown: false }}>
      <CartNavigator.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ title: "Shopping Cart" }}
      />
    </CartNavigator.Navigator>
  );
};
