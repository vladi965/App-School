import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { styles } from "../../../styles/GlobalStyles";

const img1 = require('../../../assets/algebra/img1.png');

const TeoriaScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.pt1}>Teoría de Exponentes</Text>
      <View style={styles.viewSecund}>
        <Text style={styles.pt2}>Concepto</Text>
        <Text style={styles.titleText}>Son definiciones y teoremas que estudian a los exponentes
          a través de operaciones de potenciación y radicación 
        </Text>
        <View style={styles.contentImage}>
        <Image style={styles.img1} source={img1} />
        </View>
        <Text style={styles.titleText}>b: base</Text>
        <Text style={styles.titleText}>c: base</Text>
        <Text style={styles.titleText}>a: base</Text>
        <Text style={styles.textTwo}>1. Por Extensión: Cuando sus elementos están indicados explícitamente, es decir,
        se mencionan en forma completa los elementos del conjunto.
        </Text>
      </View>
    </View>
  )
}

export default TeoriaScreen

