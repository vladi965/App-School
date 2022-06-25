import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "../../../../styles/GlobalStyles";
import ResultButton from "../../../../components/ResultButton";
import ButtonPrincipal from "../../../../components/ButtonPrincipal";
import { useNavigation } from "@react-navigation/native";
import AlertMessage from "../../../../components/AlertMessage";

const img5 = require("../../../../assets/algebra/ejercicios/basico/img5.png");

const basico5 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>5. Simplifica</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic5} source={img5} />
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

export default basico5