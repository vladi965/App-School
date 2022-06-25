import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../../styles/GlobalStyles";
import ResultButton from "../../../../components/ResultButton";
import ButtonPrincipal from "../../../../components/ButtonPrincipal";
import { useNavigation } from "@react-navigation/native";
import AlertMessage from "../../../../components/AlertMessage";

const img4 = require("../../../../assets/algebra/ejercicios/basico/img4.png");

const basico4 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>4. ¿Cuánto le falta al resultado de?</Text>
        <View style={styles.boxImage}>
          <Image style={styles.imgBasic4} source={img4} />
          <Text style={styles.h2Basic}>para ser igual a 25</Text>
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
            onPress={() => navigation.navigate("basico5")}
          />
        </View>
      </View>
    </View>
  );
};

export default basico4;
