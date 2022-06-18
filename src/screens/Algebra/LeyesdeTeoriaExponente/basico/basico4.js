import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../../styles/GlobalStyles";
const img4 = require("../../../../assets/algebra/ejercicios/basico/img4.png");

const basico4 = () => {
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>4. ¿Cuánto le falta al resultado de?</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic4} source={img4} />
          <Text style={styles.h2Basic}>para ser igual a 25</Text>
        </View>
        <Text style={styles.h1Basic}>Solución:</Text>
      </View>
    </View>
  );
};

export default basico4;
