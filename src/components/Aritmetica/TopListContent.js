import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const TopListContent = ({ list }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={list}
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TemaContenidoScreen')}
              style={{
                marginLeft: 15,
                marginRight: index == list.length - 1 ? 15 : 10,
              }}
            >
              <View style={styles.content}>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
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
  content: {
    width: 350,
    height: 65,
  },
  imageBox: {
    width: 150,
    height: 100,
    overflow: "hidden",
  },
  image:{
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  titleBox:{
    position: 'absolute',
    top: 0,
    marginHorizontal: 50
  },
  title:{
    fontSize: 14,
    color: '#000'
  },
  subtitle:{
    fontSize: 12,
    color: '#727272'
  }

});

export default TopListContent;
