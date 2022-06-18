import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../../styles/GlobalStyles";
const img2 = require("../../../../assets/algebra/ejercicios/basico/img2.png");

const basico2 = () => {
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>2. Calcular el valor de la Operación</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic1} source={img2} />
        </View>
        <Text style={styles.h1Basic}>Solución:</Text>
      </View>
    </View>
  );
};

export default basico2;
