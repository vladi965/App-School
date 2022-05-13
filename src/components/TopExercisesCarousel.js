import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'

const CARD_WIDTH = 180;
const CARD_HEIGHT = 130;
const CARD_WIDTH_SPACING = 150;

const TopExercisesCarousel = ({ list }) => {
    return (
        <FlatList 
            data={list}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate = 'fast'
            showsHorizontalScrollIndicator={false}
            keyExtractor={(i) => i.id}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity 
                        style={{ 
                            marginRight: index == list.length - 1 ? 30 : 25,
                        }} 
                    >
                        <View style={(styles.card)}>
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
    )
}

const styles = StyleSheet.create({
    card:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
    },
    titleBox:{
        position: 'absolute',
        top: CARD_HEIGHT - 90,
        color: '#000',
        marginHorizontal: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})


export default TopExercisesCarousel;