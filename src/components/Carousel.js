import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Image
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Carousel = ({ data }) => {
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={data}
        style={styles.flatlist}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cardView}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    cardView:{
        flex: 1,
        width: WIDTH - 40,
        height: HEIGHT / 4,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5},
        shadowOpacity: 0.5, 
        shadowRadius: 5,
        elevation: 5
    },
    textView:{
        position: 'absolute',
        bottom: 55,
        margin: 10,
        right: 2
    },
    image:{
        width: WIDTH - 40,
        height: HEIGHT / 4,
        borderRadius: 15
    },
    itemTitle:{
        color: '#000',
        fontSize: 18,
        shadowColor: '#fff',
        shadowOffset: { width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription:{
        color: '#000',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
});

export default Carousel;
