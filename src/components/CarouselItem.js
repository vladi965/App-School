import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.image}/>
      <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardView:{
        flex: 1,
        width: WIDTH - 20,
        height: HEIGHT / 3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5},
        shadowOpacity: 0.5, 
        shadowRadius: 3,
        elevation: 5
    },
    textView:{
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5
    },
    image:{
        width: WIDTH - 20,
        height: HEIGHT / 3,
        borderRadius: 15
    },
    itemTitle:{
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription:{
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }

})


export default CarouselItem;