import React,{useState , useEffect} from 'react';
import {View,StyleSheet,StatusBar,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Button, Divider, Input, Block, Text } from "../components";
import { Feather } from "@expo/vector-icons";
import { theme, mocks } from "../constants";
const VALID_EMAIL = "rohitlucknow14@gmail.com";
const VALID_PASSWORD = "rohit@123";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default PostScreen = ({navigation}) => {

  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [image, setImage] = useState(require('../assets/icons/select.png'));

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const hasError = (key) => (error.includes(key) ? styles.hasErrors : null);

    return(
        <View style={styles.login} behavior="height">
        <StatusBar backgroundColor="#FFF" />
        <Block
          style={{
            marginTop: theme.sizes.base * 2.5,
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
            Upload A Product
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
          <Block center style={{marginTop : 50}}>
          <Button onPress={pickImage}>
          <Image source={image} style={{width: 150,height: 150,resizeMode: 'cover' ,borderRadius : 10}} />
        </Button>

      </Block>
          <Block middle style={{marginTop : 50}}>
            <Input
              label="Product Name"
              error={hasError("email")}
              style={[styles.input, hasError("email")]}
              defaultValue={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            <Input
              label="Description"
              error={hasError("email")}
              style={[styles.input, hasError("email")]}
              defaultValue={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            <Input
              label="Expected Selling Price"
              error={hasError("email")}
              style={[styles.input, hasError("email")]}
              defaultValue={email}
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
              label="Password"
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
                
              }}
            >
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Upload
                </Text>
              )}
            </Button>
            <Button
              onPress={() => {
              }}
            >
            </Button>
          </Block>
          </ScrollView>
        </Block>
      </View>
    );
}

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

