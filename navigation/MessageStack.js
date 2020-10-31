import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from '../screens/MessageScreen';
const CartNavigator = createStackNavigator();

export const MessagesStack = () => {
  return (
    <CartNavigator.Navigator screenOptions={{ headerShown: false }}>
      <CartNavigator.Screen
        name="CartScreen"
        component={MessageScreen}
        options={{ title: "Message Screen" }}
      />
    </CartNavigator.Navigator>
  );
};

