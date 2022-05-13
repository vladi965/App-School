import React from 'react'
import { View, Text, FlatList, StyleSheet, VirtualizedList } from 'react-native';
import Video from 'react-native-video';

const CARD_WIDTH = 800;
const CARD_HEIGHT = 400;
const CARD_HEIGHT_SPACING = 80;


const TopYoutubePopulars = ({ list }) => {
  return (
      <FlatList
        data={list}
        vertical
        snapToInterval={CARD_HEIGHT_SPACING}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => {
          return (
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                <View>
                  <Video
                    height={400}
                    source={{uri: item.name}}
                    autoplay={false}
                    defaultMuted={true}
                  />
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
  }
})

export default TopYoutubePopulars