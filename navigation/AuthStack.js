import React from "react";
import LoginScreen from "../screens/LoginScreen";
import SignUp from "../screens/SignUp";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AuthIntroScreen from "../screens/AuthIntroScreen";


const AuthNavigation = createStackNavigator();

export const AuthStack = () => {
  return (
    <AuthNavigation.Navigator screenOptions={{ headerShown: false }}>
      <AuthNavigation.Screen name="AuthIntroScreen" component={AuthIntroScreen} />
      <AuthNavigation.Screen name="LoginScreen" component={LoginScreen} />
      <AuthNavigation.Screen name="SignUp" component={SignUp} />
      <AuthNavigation.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </AuthNavigation.Navigator>
  );
};
