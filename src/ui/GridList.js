import React, { useState } from "react";
import {View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonPrincipal from "../components/ButtonPrincipal";
import { useNavigation } from '@react-navigation/native';


const DATA = [
  {
    id: "1",
    title: "1° Sec",
  },
  {
    id: "2",
    title: "2° Sec",
  },
  {
    id: "3",
    title: "3° Sec",
  },
  {
    id: "4",
    title: "4° Sec",
  },
  {
    id: "5",
    title: "5° Sec",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const GridList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#7460F2" : "#ffffff";
    const color = item.id === selectedId ? 'white' : 'black';
    
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
      <View style={styles.container}>
        <ButtonPrincipal title="Ingresar" onPress={() => navigation.navigate('TabNavigator')}/>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 80,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7460F2',
    marginVertical: 8,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    color: '#000'
  },
  
});

export default GridList;

