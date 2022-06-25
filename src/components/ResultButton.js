import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// DATA
const DATA = [
  {
    id: 1,
    title: "25",
  },
  {
    id: 2,
    title: "12",
  },
  {
    id: 3,
    title: "3",
  },
  {
    id: 4,
    title: "8",
  },
  {
    id: 5,
    title: "6",
  },
  {
    id: 6,
    title: "12",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const ResultButton = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#7460F2" : "#ffffff";
    const color = item.id === selectedId ? "white" : "black";

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
    <View>
     <FlatList 
        data={DATA}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
     />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    item: {
      height: 60,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "#7460F2",
      marginVertical: 8,
      marginHorizontal: 15,
    },
    title: {
      fontSize: 18,
      color: "#000",
    },
  });



export default ResultButton;
