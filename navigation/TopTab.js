import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatList from "../screens/Messaging/ChatList";
import Contacts from "../screens/Messaging/Contacts";

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatList} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="New Chats" component={ChatList} />
    </Tab.Navigator>
  );
};
