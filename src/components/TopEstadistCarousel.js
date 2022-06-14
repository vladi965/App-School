import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CARD_WIDTH = 60;
const CARD_HEIGHT = 60;
const CARD_WIDTH_SPACING = 20;

const TopEstadistCarousel = ({ list }) => {
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
          style={{ 
            marginLeft: 15,
            marginRight: index == list.length - 1 ? 30 : 5,
        }}
          >
            <View style={styles.contentCard}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  contentCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: '#7460F2', 
    borderRadius: 10,
  },
  titleBox: {
    position: "absolute",
    top: CARD_HEIGHT - 55,
    textAlign: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
});

export default TopEstadistCarousel;
