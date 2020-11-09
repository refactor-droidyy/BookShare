import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/SettingScreen";
import PhotChange from "../screens/PhotoChange";
const SettingNavigator = createStackNavigator();

export const SettingStack = () => {
  return (
    <SettingNavigator.Navigator screenOptions={{ headerShown: false }}>
      <SettingNavigator.Screen
        name="Settings"
        component={SettingScreen}
        options={{ title: "Settings" }}
      />
      <SettingNavigator.Screen
        name="Avatar"
        component={PhotChange}
        options={{ title: "Change Avatar" }}
      />
    </SettingNavigator.Navigator>
  );
};


