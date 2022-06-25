import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "../../../../styles/GlobalStyles";
import ResultButton from "../../../../components/ResultButton";
import ButtonPrincipal from "../../../../components/ButtonPrincipal";
import { useNavigation } from "@react-navigation/native";
import AlertMessage from "../../../../components/AlertMessage";

const img6 = require("../../../../assets/algebra/ejercicios/basico/img6.png");

const basico6 = () => {
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h3Basic}>6. Calculo el exceso de 40 sobre el resultado de la operación</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic5} source={img6} />
        </View>
        <Text style={styles.h1Basic}>Respuesta:</Text>
        <View style={styles.contentResult}>
          <ResultButton />
        </View>
        <View style={styles.opContent1}>
          <AlertMessage />
        </View>
        <View style={styles.opContent}>
          <ButtonPrincipal
            title="Siguiente"
            onPress={() => navigation.navigate("basico6")}
          />
        </View>
      </View>
    </View>
  )
}

export default basico6