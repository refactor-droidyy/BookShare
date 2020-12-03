import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform ,TouchableOpacity,StyleSheet,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

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

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.gridItem} 
                          onPress={pickImage}>
        <Text style={styles.title}>Pick Image</Text>
        </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,margin: 15, height: 50,
    width : 120,
    borderRadius: 30,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    backgroundColor:'#0AC4BA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color : '#FFF',
    fontSize: 16,
    textAlign: 'center'
  }
});