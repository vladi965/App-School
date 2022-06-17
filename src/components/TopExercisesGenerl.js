import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native'

const CARD_WIDTH = 185;
const CARD_HEIGHT = 160;
const CARD_HEIGHT_SPACING = 10;

const TopExercisesGenerl = ({ list }) => {
  return (
    <View>
      <FlatList 
        data={list}
        vertical
        numColumns={2}
        snapToInterval={CARD_HEIGHT_SPACING}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => {
            return (
                <TouchableOpacity
                style={{ 
                    marginLeft: 15,
                    marginRight: 5,
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
            )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginHorizontalRight: 15,
        marginHorizontalLeft: 15,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    imageBox:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'contain'
    },
    titleBox:{
      borderRadius: 15,
      backgroundColor: '#fff',
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 15,
      marginHorizontal: 10
    },
    title:{
      marginVertical: 4,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: "#000000"
    }
})

export default TopExercisesGenerl