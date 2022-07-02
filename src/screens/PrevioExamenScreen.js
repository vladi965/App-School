import React from "react";
import { View, Text, Image, lineStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import PreExamenText from "../components/PreExamenText";
import DescriptionPrevExam from "../components/DescriptionPrevExam";
import ButtonPrincipal from "../components/ButtonPrincipal";
import { useNavigation } from '@react-navigation/native';

const image = require("../assets/general/ensayo1.png")

export default function PrevioExamenScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.contentPrevio}>
      <View>
        <Image source={image} style={styles.imgContent} />
        <Text style={styles.textH3}>Excelente, validarás todo lo aprendido</Text>
        <PreExamenText title="Curso de Algebra"/>
        <View style={styles.lineStyle}></View>
        <DescriptionPrevExam />
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <ButtonPrincipal title="Presentar Examen" onPress={() => navigation.navigate('ExamenStack')}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
