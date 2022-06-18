import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "../../../../styles/GlobalStyles";
import ResultButton from '../../../../components/ResultButton';
import ButtonPrincipal from "../../../../components/ButtonPrincipal";

const img1 = require('../../../../assets/algebra/ejercicios/basico/img1.png');

const basico1 = () => {
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
      <Text style={styles.h1Basic}>1. Simplifica</Text>
      <View>
        <Image style={styles.imgBasic} source={img1}/>
      </View>
      <Text style={styles.h1Basic}>Respuesta</Text>
      <View style={styles.contentResult}>
        <ResultButton />
      </View>
      <View style={styles.opContent}>
        <ButtonPrincipal title="Enviar" />
      </View>
      </View>
    </View> 
  )
}

export default basico1




