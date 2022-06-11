import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const CARD_WIDTH = 400;
const CARD_HEIGHT = 125;
const CARD_HEIGHT_SPACING = 35;

const TopCursos = ({ list }) => {
  const navigation = useNavigation();
  
  return (
    <View>
      <FlatList
        data={list}
        vertical
        snapToInterval={CARD_HEIGHT_SPACING}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TemasScreen')}
              style={{
                marginTop: 15,
                marginRight: index == list.length - 1 ? 30 : 30,
              }}
            >
              <View style={styles.card}>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 6,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "contain",
  },
  titleBox: {
    position: "absolute",
    top: 40,
    right: 70,
    marginHorizontal: 10,
  },
  title: {
    marginVertical: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default TopCursos;
