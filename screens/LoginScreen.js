import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  Alert,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Text, Block, Button, Input } from "../components";
import { theme } from "../constants";
import { Feather } from "@expo/vector-icons";
const VALID_EMAIL = "rohitlucknow14@gmail.com";
const VALID_PASSWORD = "rohit@1234";

const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const handleLogin = () => {
    Keyboard.dismiss();
    setLoading(true);

    const arr = [];
    if (email !== VALID_EMAIL) {
      arr.push("email");
    }else if(email != VALID_EMAIL && password != VALID_PASSWORD){
      Alert.alert("invalid username and password")
    } else if(email == VALID_EMAIL && password != VALID_PASSWORD){
      Alert.alert("invalid user")
    }else if(email == VALID_EMAIL && password == VALID_PASSWORD){
      const timer = setTimeout(() => {
        setLoading(true);
       }, 1000);
    }
    setLoading(false);
    setError(arr);
    let timer;
    if (!error.length) {
      timer = setTimeout(() => {
       setLoading(true);
      }, 1000);
     
    }
    clearTimeout(timer)
    setLoading(false);
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const hasError = (key) => (error.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior="height">
      <StatusBar backgroundColor="#FFF" />
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
          Login
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
                Login
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

export default Login;
