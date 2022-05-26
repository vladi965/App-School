import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/GlobalStyles";

const image = require("../assets/img1.png");

export default function PreExamenText({ title }) {
  return (
    <View>
      <View style={styles.ViewExamPrev}>
        <Image source={image} style={styles.imgEx} />
        <Text style={styles.extitle}>{title}</Text>
      </View>
    </View>
  );
}
