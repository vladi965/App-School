import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const CARD_HEIGHT_SPACING = 30;

const TopTemaContenido = ({ list }) => {
    const navigation = useNavigation();
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
                <TouchableOpacity onPress={() => {navigation.navigate('TeoriaStack')}}
                    style={{ 
                        marginLeft: 15,
                        marginRight: index == list.length - 1 ? 30 : 30,
                    }}
                    >
                <View style={styles.contentCard}>
                    <View style={styles.card}>
                        <View style={styles.imageBox}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
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
    contentCard:{
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: "#fff",
        marginHorizontalRight: 20,
        marginHorizontalLeft: 20,

    },
    card: {
        backgroundColor: '#fff',
        elevation: 7,
        borderRadius: 10,
        width: 167,
        height: 190, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBox:{
        width: 145,
        height: 145,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        top: -10
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    titleBox:{
        position: 'absolute',
        top: 145,
        color: '#000',
    },
    title:{
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
        
    }
})

export default TopTemaContenido