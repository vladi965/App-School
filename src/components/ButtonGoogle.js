import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/GlobalStyles";

const google = require("../assets/general/google.png");

const ButtonGoogle = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 15 }}>
      <View style={styles.btnContentTwo}>
        <View style={styles.contentButton}>
          <Image style={styles.imgGoogle} source={google} />
          <Text style={styles.btnTextOne}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonGoogle;
