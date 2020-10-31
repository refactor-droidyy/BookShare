import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default AuthIntroScreen = ({ navigation }) => {
  return (
    <View style={styles.cotainer}>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Text>SignUp</Text>
      <Button
        title="SignUp"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
