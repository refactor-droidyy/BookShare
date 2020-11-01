import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = ({navigation}) => {
    return(
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#A7CCE5"
                          onPress={() => navigation.push('ProductDetail')}>
        <Text style={styles.title}>Sci-Fi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#DE8D52">
        <Text style={styles.title}>Comic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#95EE65">
        <Text style={styles.title}>Novel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#EE6565">
        <Text style={styles.title}>Mystery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#D6939D">
        <Text style={styles.title}>Fantasy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#B9D693">
        <Text style={styles.title}>Fantasy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#4AB6AA">
        <Text style={styles.title}>Fantasy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#7674D6">
        <Text style={styles.title}>Action and Adventure</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} backgroundColor="#764AB6">
        <Text style={styles.title}>Horror</Text>
        </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    width : 120,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    backgroundColor: "#D6939D",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color : '#FFF',
    fontSize: 22,
    textAlign: 'center'
  }
});

export default CategoryGridTile;