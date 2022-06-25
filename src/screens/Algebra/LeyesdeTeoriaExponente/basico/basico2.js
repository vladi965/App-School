import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../../styles/GlobalStyles";
import ResultButton from "../../../../components/ResultButton";
import ButtonPrincipal from "../../../../components/ButtonPrincipal";
import { useNavigation } from "@react-navigation/native";
import AlertMessage from "../../../../components/AlertMessage";

const img2 = require("../../../../assets/algebra/ejercicios/basico/img2.png");

const basico2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>2. Calcular el valor de la Operación</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic1} source={img2} />
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
            onPress={() => navigation.navigate("basico3")}
          />
        </View>
      </View>
    </View>
  );
};

export default basico2;
