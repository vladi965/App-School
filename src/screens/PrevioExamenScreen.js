import React from "react";
import { View, Text, Image, lineStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import PreExamenText from "../components/PreExamenText";
import DescriptionPrevExam from "../components/DescriptionPrevExam";
import ButtonPrincipal from "../components/ButtonPrincipal";

const image = require("../assets/general/ensayo1.png")


export default function PrevioExamenScreen() {
  return (
    <SafeAreaView>
      <View>
        <Image source={image} style={styles.imgContent} />
        <Text style={styles.textH3}>Excelente, validarás todo lo aprendido</Text>
        <PreExamenText title="Curso de Aritmetica"/>
        <View style={styles.lineStyle}></View>
        <DescriptionPrevExam />
        <View style={styles.container}>
        <ButtonPrincipal title="Presentar Examen"/>
        </View>
      </View>
    </SafeAreaView>
  );
}
