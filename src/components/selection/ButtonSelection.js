import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/GlobalStyles";

export default function ButtonSelection() {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnSelection}>
        <View style={styles.contentSelection}>
          <Text style={styles.btnTextOne}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
