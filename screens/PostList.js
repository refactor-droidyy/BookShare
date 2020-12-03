import React from 'react';
import {View,StyleSheet,StatusBar,TouchableOpacity,Image} from 'react-native';
import { Button, Divider, Input, Block, Text } from "../components";
import { Feather } from "@expo/vector-icons";
import { theme, mocks } from "../constants";

export default PostList = ({navigation}) => {
    return(
        <View style={styles.container}>
        <StatusBar backgroundColor="#FFF"/>
        <Block
        flex={false}
        margin={[20, 0]}
        style={styles.inputRow}
        style={styles.header}
      >
        <TouchableOpacity>
          <Feather
            name="arrow-left"
            size={32}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text h1 bold style={{marginHorizontal : 20}}>
          Your Uploads
        </Text>
      </Block>

      
  </View>
    );
}

const styles = StyleSheet.create({
  header: {
      paddingHorizontal: theme.sizes.base * 1.5,
      marginTop : theme.sizes.base * 2
    },
    inputRow: {
      alignItems: "flex-end",
      marginTop: theme.sizes.base / 2,
    },
    container : {
      flex: 1,
      backgroundColor: "white",
      marginTop : 10,
    }
});