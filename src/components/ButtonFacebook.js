import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/GlobalStyles";

const facebook = require("../assets/general/facebook.png");

const ButtonFacebook = ({ title, onPress }) => {
  return (
    <TouchableOpacity>
      <View style={styles.btnContentTwo}>
        <View style={styles.contentButton}>
          <Image style={styles.imgGoogle} source={facebook} />
          <Text style={styles.btnTextOne}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFacebook;
