import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../../../styles/GlobalStyles";
import ResultButton from "../../../../components/ResultButton";
import ButtonPrincipal from "../../../../components/ButtonPrincipal";
import { useNavigation } from "@react-navigation/native";
import AlertMessage from "../../../../components/AlertMessage";

const img1 = require("../../../../assets/algebra/ejercicios/basico/img1.png");

const basico1 = () => {
  const navigation = useNavigation();

  const [answer, setAnswer] = useState('');

  const handleCallback = (newAnswer) => {
    setAnswer(newAnswer);
    console.log(newAnswer)
  }

  return (
    <View style={styles.contentBasic1}>
      <View style={styles.contentBox}>
        <Text style={styles.h1Basic}>1. Simplifica</Text>
        <View>
          <Image style={styles.imgBasic} source={img1} />
        </View>
        <Text style={styles.h1Basic}>Respuesta</Text>
        <View style={styles.contentResult}>
          <ResultButton answerCallback={handleCallback}/>
        </View>
        <View style={styles.opContent1}>
          <AlertMessage answer={answer}/>
        </View>
        <View style={styles.opContent}>
          <ButtonPrincipal
            title="Siguiente"
            onPress={() => navigation.navigate("basico2")}
          />
        </View>
      </View>
    </View>
  );
};

export default basico1;
