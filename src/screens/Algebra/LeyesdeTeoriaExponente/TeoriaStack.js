import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "../../../styles/GlobalStyles";

const img1 = require("../../../assets/teoria/img1.png");
const img2 = require("../../../assets/teoria/img2.png");
const img3 = require("../../../assets/teoria/img3.png");
const img4 = require("../../../assets/teoria/img4.png");
const img5 = require("../../../assets/teoria/img5.png");

const TeoriaScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.pt1}>Leyes de la Teoría de Exponentes I</Text>
      <View style={styles.viewSecund}>
        <Text style={styles.pt2}>Definición</Text>
        <Text style={styles.titleText}>
          Son aquellas definiciones y teoremas que estudian a los exponentes a
          través de las operaciones de potenciación y radiación.
        </Text>
        <Text style={styles.pt2}>Concepto de Potenciación</Text>
        <Text style={styles.titleText}>
          Operación matematica que consiste en hallar un número llamado potencia
          a partir de otros dos llamados base y exponente, según:
        </Text>
        <View style={styles.contentImage}>
          <Image source={img1} />
        </View>
        <View>
          <Image source={img2} />
        </View>
        <View>
          <Text style={styles.pt2}>Propiedades de los Exponentes</Text>
          <Text style={{ fontWeight: "bold"}}>1. De la expresión exponencial: a^n</Text>
          <Text style={styles.titleText}>Si el exponente (n) es un entero positivo <Image source={img3} /> puedes 
            escribir la expresión en forma expandida.
          </Text>
          <Text style={{ fontSize: 15, marginTop: 15 }}>Ejemplos:</Text>
          <View>
            <Image source={img4} />
            <Image source={img5} />
          </View>
          <Text style={{ fontWeight: "bold"}}>2. Producto de bases iguales: suma los exponentes</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default TeoriaScreen;
