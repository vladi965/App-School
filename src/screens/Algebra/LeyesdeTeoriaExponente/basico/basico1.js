import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "../../../../styles/GlobalStyles";
const img1 = require('../../../../assets/algebra/ejercicios/basico/img1.png');

const basico1 = () => {
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
      <Text style={styles.h1Basic}>1. Simplifica</Text>
      <View>
        <Image style={styles.imgBasic} source={img1}/>
      </View>
      <Text style={styles.h1Basic}>Solución:</Text>
      </View>
    </View> 
  )
}

export default basico1




