import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Contacts = () => {
  return (
    <View style={styles.cotainer}>
      <Text>Contacts</Text>
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

export default Contacts;