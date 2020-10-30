import React, { useState } from "react";
import {
  StyleSheet,
  Dimension,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Text, Block, Button, Input } from "../components";
import { Feather } from "@expo/vector-icons";

import { theme } from "../constants";

const VALID_EMAIL = "rohitlucknow14@gmail.com";

const ForgotPasswordScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState(VALID_EMAIL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const handleForgot = () => {
    Keyboard.dismiss();
    setLoading(true);

    const arr = [];
    if (email !== VALID_EMAIL) {
      arr.push("email");
    }
    setLoading(false);
    setError(arr);
    if (!error.length) {
      Alert.alert(
        "Password Sent",
        "Please Check Your Email",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Error",
        "Please Check Your Email Address Again",
        [
          {
            text: "Try Again",
          },
        ],
        { cancelable: true }
      );
    }
  };

  const hasError = (key) => (error.includes(key) ? styles.hasErrors : null);
  return (
    <KeyboardAvoidingView style={styles.forgot}>
      <Block
        style={{
          marginTop: theme.sizes.base * 1.8,
          marginHorizontal: theme.sizes.base * 1.2,
        }}
        padding={[0, theme.sizes.base * 1.2]}
      >
        <TouchableOpacity>
          <Feather
            name="arrow-left"
            size={32}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text h1 bold style={{ marginTop: theme.sizes.base }}>
          ForgotPasswordScreen ?
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasError("email")}
            style={[styles.input, hasError("email")]}
            defaultValue={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Button
            gradient
            onPress={() => {
              handleForgot();
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Get Password By Email
              </Text>
            )}
          </Button>
          <Button onPress={() => navigation.goBack()}>
            <Text
              caption
              gray
              center
              style={{ textDecorationLine: "underline" }}
            >
              Back to login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
    borderBottomWidth: 1,
  },
});

export default ForgotPasswordScreen;
