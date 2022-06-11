import React from 'react'
import { View, Text, FlatList, StyleSheet, VirtualizedList, Image } from 'react-native';
import YouTube from 'react-native-youtube';

const CARD_WIDTH = 800;
const CARD_HEIGHT = 400;
const CARD_HEIGHT_SPACING = 80;


const TopYoutubePopulars = ({ list }) => {
  return (
      <FlatList scrollEnabled={false}
        data={list}
        vertical
        snapToInterval={CARD_HEIGHT_SPACING}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => {
          return (
                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>
                <View>
                  <View>
                    <YouTube 
                      videoId={"EO-2A9NNM30"}
                      play
                      style={{ alignSelf: 'stretch', height: 400}}
                     />
                  </View>
                </View>
                </View>
              
            
          )
        }}
      />
  )
}

const styles = StyleSheet.create({
  titleBox: {
    color: "#000",
    marginTop: 25,
    marginHorizontal: 10
  },
  title:{
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})

export default TopYoutubePopulars