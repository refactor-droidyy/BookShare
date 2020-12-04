import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./navigation/RootNavigator";
import { AuthStack } from "./navigation/AuthStack";
export default function App() {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  return (
    <NavigationContainer>
      {loading ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// fv ai databook
// cart ai agile