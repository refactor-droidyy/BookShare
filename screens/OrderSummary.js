import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderSummary = () => {
  return (
    <View style={styles.cotainer}>
      <Text>OrderSummary</Text>
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

export default OrderSummary;