import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../../styles/GlobalStyles";
import ResultButton from "../../../../components/ResultButton";
import ButtonPrincipal from "../../../../components/ButtonPrincipal";
import { useNavigation } from "@react-navigation/native";
import AlertMessage from "../../../../components/AlertMessage";

const img3 = require("../../../../assets/algebra/ejercicios/basico/img3.png");

const basico3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>3. Determine el valor de</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic1} source={img3} />
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
            onPress={() => navigation.navigate("basico4")}
          />
        </View>
      </View>
    </View>
  );
};

export default basico3;
