import React, { useState } from "react";
import {
  StyleSheet,
  Dimension,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Text, Block, Button, Input } from "../components";
import { theme } from "../constants";
import { Feather } from "@expo/vector-icons";
const VALID_EMAIL = "rohitlucknow14@gmail.com";
const VALID_PASSWORD = "rohit@123";

const SignUp = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const handleLogin = () => {
    Keyboard.dismiss();
    setLoading(true);

    const arr = [];
    if (email !== VALID_EMAIL) {
      arr.push("email");
    } else if (password != VALID_PASSWORD) {
      arr.push("password");
    }
    setLoading(false);
    setError(arr);
    if (!error.length) {
      navigation.navigate("Browser");
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const hasError = (key) => (error.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior="height">
      <StatusBar backgroundColor="blue" />
      <Block
        style={{
          marginTop: theme.sizes.base * 1.8,
          marginHorizontal: theme.sizes.base,
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
          SignUp
        </Text>
        <Block middle>
          <Input
            label="Name or Username"
            error={hasError("email")}
            style={[styles.input, hasError("email")]}
            defaultValue="Rohit Verma"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Input
            label="Email"
            error={hasError("email")}
            style={[styles.input, hasError("email")]}
            defaultValue={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Input
            label="Phone Number"
            error={hasError("email")}
            style={[styles.input, hasError("email")]}
            defaultValue="+91 70007220338"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Input
            label="Password"
            secure
            error={hasError("password")}
            style={[styles.input, hasError("password")]}
            defaultValue={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Button
            gradient
            onPress={() => {
              handleLogin();
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                SignUp
              </Text>
            )}
          </Button>
          <Button
            onPress={() => {
              handleForgotPassword();
            }}
          >
            <Text
              caption
              gray
              center
              style={{ textDecorationLine: "underline" }}
            >
              Forgot your Password ?
            </Text>
          </Button>
        </Block>
      </Block>
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
  hasErrors: {
    borderBottomColor: theme.colors.accent,
    borderBottomWidth: 1,
  },
});

export default SignUp;
