import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { styles } from "../../../styles/GlobalStyles";


const img1 = require('../../../assets/aritmetica/diagrama-1.png');

const TeoriaScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.pt1}>Teoría de Conjunto</Text>
      <View style={styles.viewSecund}>
        <Text style={styles.pt2}>Concepto</Text>
        <Text style={styles.titleText}>La teoría de conjuntos es una rama de las matemáticas que se dedica a estudiar
        las características de los conjuntos y las operaciones que pueden efectuarse entre ellos.
        Es decir, la teoría de conjuntos es un área de estudio enfocada en los conjuntos. Por tanto,
        se encarga de analizar tanto los atributos que poseen, como las relaciones que pueden establecerse
        entre ellos. Es decir, su unión, intersección, complemento u otro. 
        </Text>
        <View style={styles.contentImage}>
        <Image style={styles.img1} source={img1} />
        </View>
        <Text style={styles.pt2}>Determinación de Conjuntos</Text>
        <Text style={styles.titleText}>Se dice que un conjunto está determinado cuando se sabe con precisión que elementos
          pertenecen al conjunto y que elementos no pertenecen al conjunto, existen 2 formas
          principales para determinar conjuntos.
        </Text>
        <Text style={styles.textTwo}>1. Por Extensión: Cuando sus elementos están indicados explícitamente, es decir,
        se mencionan en forma completa los elementos del conjunto.
        </Text>
        
      </View>
      
    </View>
  )
}

export default TeoriaScreen

