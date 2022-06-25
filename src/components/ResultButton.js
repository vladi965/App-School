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
    correct: false,
  },
  {
    id: 2,
    title: "12",
    correct: false,
  },
  {
    id: 3,
    title: "3",
    correct: true,
  },
  {
    id: 4,
    title: "8",
    correct: false,
  },
  {
    id: 5,
    title: "6",
    correct: false,
  },
  {
    id: 6,
    title: "12",
    correct: false,
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const ResultButton = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const navigation = useNavigation();
  
  const onTrigger = (item, props) => {
    setSelectedId(item.id)
    props.answerCallback(item.correct)
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#7460F2" : "#ffffff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {onTrigger(item, props)} }
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
