// import React from "react";
// import { View, StyleSheet,TouchableOpacity,Image,KeyboardAvoidingView,StatusBar } from "react-native";
// import { Divider, Button, Block, Text, Switch, Input } from "../components";
// import {Feather} from '@expo/vector-icons';
// import { theme } from "../constants";
// import { FlatList } from "react-native";

// export default DetailsProductScreen = ({title}) => {
//   return (
//     <KeyboardAvoidingView style={styles.login} behavior="height">
//     <StatusBar backgroundColor="#1D6BA0" />
//     <Block
//       style={{
//         marginTop: theme.sizes.base * 3,
//         marginHorizontal: theme.sizes.base * 1.1,
//       }}
//       padding={[0, theme.sizes.base * 1.1]}
//     >
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Feather
//           name="arrow-left"
//           size={32}
//           color="black"
//         />
//       </TouchableOpacity>
//       <Text h1 bold style={{ marginTop: theme.sizes.base }}>
//         Details Screen{title}
//       </Text>
//     </Block>
//     <FlatList/>
//   </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   login: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "white",
//   },
//   input: {
//     borderRadius: 0,
//     borderWidth: 0,
//     borderBottomColor: theme.colors.gray2,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });



// import React, { Component } from "react";
// import {
//   Animated,
//   Dimensions,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from "react-native";
// import * as Icon from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// import { Button, Input, Block, Text } from "../components";
// import { theme, mocks } from "../constants";

// const { width, height } = Dimensions.get("window");

// class Explore extends Component {
//   state = {
//     searchFocus: new Animated.Value(0.6),
//     searchString: null
//   };

//   handleSearchFocus(status) {
//     Animated.timing(this.state.searchFocus, {
//       toValue: status ? 0.8 : 0.6, // status === true, increase flex size
//       duration: 150 // ms
//     }).start();
//   }

//   renderSearch() {
//     const { searchString, searchFocus } = this.state;
//     const isEditing = searchFocus && searchString;

//     return (
//       <Block animated middle flex={searchFocus} style={styles.search}>
//         <Input
//           placeholder="Search"
//           placeholderTextColor={theme.colors.gray2}
//           style={styles.searchInput}
//           onFocus={() => this.handleSearchFocus(true)}
//           onBlur={() => this.handleSearchFocus(false)}
//           onChangeText={text => this.setState({ searchString: text })}
//           value={searchString}
//           onRightPress={() =>
//             isEditing ? this.setState({ searchString: null }) : null
//           }
//           rightStyle={styles.searchRight}
//           rightLabel={
//             <Icon.FontAwesome
//               name={isEditing ? "close" : "search"}
//               size={theme.sizes.base / 1.6}
//               color={theme.colors.gray2}
//               style={styles.searchIcon}
//             />
//           }
//         />
//       </Block>
//     );
//   }

//   renderImage(img, index) {
//     const { navigation } = this.props;
//     const sizes = Image.resolveAssetSource(img);
//     const fullWidth = width - theme.sizes.padding * 2.5;
//     const resize = (sizes.width * 100) / fullWidth;
//     const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;

//     return (
//       <TouchableOpacity
//         key={`img-${index}`}
//         onPress={() => navigation.navigate("Product")}
//       >
//         <Image
//           source={img}
//           style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]}
//         />
//       </TouchableOpacity>
//     );
//   }

//   renderExplore() {
//     const { images, navigation } = this.props;
//     const mainImage = images[0];

//     return (
//       <Block style={{ marginBottom: height / 3 }}>
//         <TouchableOpacity
//           style={[styles.image, styles.mainImage]}
//           onPress={() => navigation.navigate("Product")}
//         >
//           <Image source={mainImage} style={[styles.image, styles.mainImage]} />
//         </TouchableOpacity>
//         <Block row space="between" wrap>
//           {images.slice(1).map((img, index) => this.renderImage(img, index))}
//         </Block>
//       </Block>
//     );
//   }

//   renderFooter() {
//     return (
//       <LinearGradient
//         locations={[0.5, 1]}
//         style={styles.footer}
//         colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.6)"]}
//       >
//         <Button gradient style={{ width: width / 2.678 }}>
//           <Text bold white center>
//             Filter
//           </Text>
//         </Button>
//       </LinearGradient>
//     );
//   }

//   render() {
//     return (
//       <Block>
//         <Block flex={false} row center space="between" style={styles.header}>
//           <Text h1 bold>
//             Explore
//           </Text>
//           {this.renderSearch()}
//         </Block>

//         <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
//           {this.renderExplore()}
//         </ScrollView>

//         {this.renderFooter()}
//       </Block>
//     );
//   }
// }

// Explore.defaultProps = {
//   images: mocks.explore
// };

// export default Explore;

// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: theme.sizes.base * 2,
//     paddingBottom: theme.sizes.base * 2
//   },
//   search: {
//     height: theme.sizes.base * 2,
//     width: width - theme.sizes.base * 2
//   },
//   searchInput: {
//     fontSize: theme.sizes.caption,
//     height: theme.sizes.base * 2,
//     backgroundColor: "rgba(142, 142, 147, 0.06)",
//     borderColor: "rgba(142, 142, 147, 0.06)",
//     paddingLeft: theme.sizes.base / 1.333,
//     paddingRight: theme.sizes.base * 1.5
//   },
//   searchRight: {
//     top: 0,
//     marginVertical: 0,
//     backgroundColor: "transparent"
//   },
//   searchIcon: {
//     position: "absolute",
//     right: theme.sizes.base / 1.333,
//     top: theme.sizes.base / 1.6
//   },
//   explore: {
//     marginHorizontal: theme.sizes.padding * 1.25
//   },
//   image: {
//     minHeight: 100,
//     maxHeight: 130,
//     maxWidth: width - theme.sizes.padding * 2.5,
//     marginBottom: theme.sizes.base,
//     borderRadius: 4
//   },
//   mainImage: {
//     minWidth: width - theme.sizes.padding * 2.5,
//     minHeight: width - theme.sizes.padding * 2.5
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     left: 0,
//     overflow: "visible",
//     alignItems: "center",
//     justifyContent: "center",
//     height: height * 0.1,
//     width,
//     paddingBottom: theme.sizes.base * 4
//   }
// });


import React, { Component } from "react";
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import {Feather} from "@expo/vector-icons";

import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Feather.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      )
    };
  };

  renderGallery() {
    const  product = mocks.products[0];
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }

  render() {
     const { product } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar  backgroundColor="#FFF"/>
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
        <Text h1 bold center>
          Product Name
        </Text>
      </Block>

        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
            Product Description
          </Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={22}>
            Very Good One "\n"
            {product.description}
          </Text>

          <Divider margin={[theme.sizes.padding * 0.9, 0]} />

          <Block>
            <Text semibold>Gallery</Text>
            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              {product.images.slice(1, 3).map((image, index) => (
                <Image
                  key={`gallery-${index}`}
                  source={image}
                  style={styles.image}
                />
              ))}
              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197,204,214,0.20)"
                style={styles.more}
              >
                <Text gray>+{product.images.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

Product.defaultProps = {
  product: mocks.products[0]
};

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  },
  header: {
    paddingHorizontal: theme.sizes.base * 1.5,
    marginTop : theme.sizes.base * 2,
    
  },
  avatar: {
    height: theme.sizes.base * 2,
    width: theme.sizes.base * 2,
  },
  input: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
    padding: theme.sizes.base,
    marginHorizontal: theme.sizes.base / 2,
  },
  inputRow: {
    alignItems: "flex-end",
    marginTop: theme.sizes.base / 2,
    justifyContent : 'center'
  },
});