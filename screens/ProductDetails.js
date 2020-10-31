import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDetails = () => {
  return (
    <View style={styles.cotainer}>
      <Text>ProductDetails</Text>
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

export default ProductDetails;