import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "../../../../styles/GlobalStyles";
const img5 = require("../../../../assets/algebra/ejercicios/basico/img5.png");

const basico5 = () => {
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>5. Simplifica</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic5} source={img5} />
        </View>
        <Text style={styles.h1Basic}>Solución:</Text>
      </View>
    </View>
  )
}

export default basico5