import React, { useState } from "react";
import {
  StyleSheet,
  Dimension,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  View,
  StatusBar,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Text, Block, Button, Input } from "../components";
import { theme } from "../constants";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";
const VALID_EMAIL = "rohitlucknow14@gmail.com";
const VALID_PASSWORD = "rohit@123";

const SignUp = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone,setPhone] = useState();
  const [name,setName] = useState();
  const [pincode,setPincode] = useState();
  const [address,setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const handleLogin = () => {
    Keyboard.dismiss();
    setLoading(true);

    const arr = [];
    
    setLoading(false);
    setError(arr);
    if (!error.length) {
      Alert.alert(
        "Successfully Account Created",
        "Please Login",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate('LoginScreen');
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const hasError = (key) => (error.includes(key) ? styles.hasErrors : null);

  return (
    <View style={styles.login} >
      <StatusBar backgroundColor="#FFF" />
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

        <ScrollView showsVerticalScrollIndicator={false}>
        <Block middle>
          <Input
            label="Name or Username"
            error={hasError("email")}
            style={[styles.input, hasError("email")]}
            defaultValue=""
            onChangeText={(text) => {
              setName(text);
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
            defaultValue="+91 "
            onChangeText={(text) => {
              setPhone(text);
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
          <Input
            label="Adress"
            error={hasError("password")}
            style={[styles.input, hasError("password")]}
            defaultValue={address}
            onChangeText={(text) => {
              setAddress(text);
            }}
          />
          <Input
            label="Pincode"
            error={hasError("password")}
            style={[styles.input, hasError("password")]}
            defaultValue={pincode}
            onChangeText={(text) => {
              setPincode(text);
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
        </ScrollView>
      </Block>
    </View>
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
