import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'

const CARD_WIDTH = 150;
const CARD_HEIGHT = 150;
const CARD_WIDTH_SPACING = 60;

const TopExercisesPopulars = ({ list }) => {
  return (
    <View>
        <FlatList scrollEnabled={false}
            data={list}
            vertical
            numColumns={2}
            snapToInterval={CARD_WIDTH_SPACING}
            showsVerticalScrollIndicator={false} 
            keyExtractor={(i) => i.id}
            renderItem={({item, index}) => { 
                return (
                    <TouchableOpacity
                        style={{ 
                            marginLeft: 15,
                            marginRight: index == list.length -1 ? 25 : 25,
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
    card:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageBox:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'contain'
    },
    titleBox:{
        position: 'absolute',
        top: 50,
        marginHorizontal: 10,
    },
    title:{
        marginVertical: 4,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000000"
    }
})

export default TopExercisesPopulars