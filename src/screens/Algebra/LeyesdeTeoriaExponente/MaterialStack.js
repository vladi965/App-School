import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from "../../../styles/GlobalStyles";
import ButtonDowloand from '../../../components/ButtonDowloand';
// Imagen 
const img1 = require('../../../assets/material/m1.png');
const img2 = require('../../../assets/material/m2.png');
const img3 = require('../../../assets/material/m3.png');
const img4 = require('../../../assets/material/m4.png');
const img5 = require('../../../assets/material/m5.png');
const img6 = require('../../../assets/material/m6.png');
const img7 = require('../../../assets/material/m7.png');

const MaterialScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textM1}>Descarga tus recursos de estudio para practicar más!</Text>
      <View style={styles.viewContent}>
        <View style={styles.contentMater}>
          <Image source={img1} />
          <Text style={{ marginLeft: 7 }}>Definición de Conjuntos</Text>
          <ButtonDowloand title="Descargar" />
        </View>
        <View style={styles.contentMater}>
          <Image source={img1} />
          <Text style={{ marginLeft: 7 }}>Definición de Conjuntos</Text>
          <ButtonDowloand title="Descargar" />
        </View>
        <View style={styles.contentMater}>
          <Image source={img1} />
          <Text style={{ marginLeft: 7 }}>Definición de Conjuntos</Text>
          <ButtonDowloand title="Descargar" />
        </View>
        <View style={styles.contentMater}>
          <Image source={img1} />
          <Text style={{ marginLeft: 7 }}>Definición de Conjuntos</Text>
          <ButtonDowloand title="Descargar" />
        </View>
        <View style={styles.contentMater}>
          <Image source={img1} />
          <Text style={{ marginLeft: 7 }}>Definición de Conjuntos</Text>
          <ButtonDowloand title="Descargar" />
        </View>
        <View style={styles.contentMater}>
          <Image source={img1} />
          <Text style={{ marginLeft: 7 }}>Definición de Conjuntos</Text>
          <ButtonDowloand title="Descargar" />
        </View>
      </View>
    </View>
  )
}

export default MaterialScreen