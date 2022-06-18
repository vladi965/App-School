import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "../../../../styles/GlobalStyles";
const img3 = require('../../../../assets/algebra/ejercicios/basico/img3.png');

const basico3 = () => {
  return (
    <View style={styles.contentBasic1}>
    <View style={styles.contentBox}>
    <Text style={styles.h1Basic}>3. Determine el valor de</Text>
    <View style={styles.boxImage}>
      <Image style={styles.imgBasic1} source={img3}/>
    </View>
    <Text style={styles.h1Basic}>Solución:</Text>
    </View>
  </View>
  )
}

export default basico3