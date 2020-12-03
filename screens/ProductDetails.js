import React from "react";
import { View, StyleSheet,TouchableOpacity,Image,KeyboardAvoidingView,StatusBar } from "react-native";
import { Divider, Button, Block, Text, Switch, Input } from "../components";
import {Feather} from '@expo/vector-icons';
import { theme } from "../constants";
import { FlatList } from "react-native";

const ProductDetails = ({route , navigation}) => {
  const { title } = route.params;
  return (
    <KeyboardAvoidingView style={styles.login} behavior="height">
    <StatusBar backgroundColor="white" />
    <Block
      style={{
        marginTop: theme.sizes.base * 3,
        marginHorizontal: theme.sizes.base * 1.1,
      }}
      padding={[0, theme.sizes.base * 1.1]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={32}
          color="black"
        />
      </TouchableOpacity>
      <Text h1 bold style={{ marginTop: theme.sizes.base }}>
        {title}
      </Text>
    </Block>
    <FlatList/>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ProductDetails;