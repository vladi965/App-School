import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function DescriptionPrevExam() {
  return (
    <View style={styles.contentPrevi}>
      <View style={styles.ViewText}>
        <Icon name="asterisk" color="#7460F2" size={10} style={{ position: "relative", alignSelf: "center" }} />
        <Text style={styles.TextH4}>Puedes repetir el examen varias veces.</Text>
      </View>
      <View style={styles.ViewText}>
        <Icon name="asterisk" color="#7460F2" size={10} style={{ position: "relative", alignSelf: "center" }} />
        <Text style={styles.TextH4}>El examen consta de 20 preguntas.</Text>
      </View>
      <View style={styles.ViewText}>
        <Icon name="asterisk" color="#7460F2" size={10} style={{ position: "relative", alignSelf: "center" }} />
        <Text style={styles.TextH4}>Tienes 30 minutos para presentarlo.</Text>
      </View>
      <View style={styles.ViewText}>
        <Icon name="asterisk" color="#7460F2" size={10} style={{ position: "relative", alignSelf: "center" }} />
        <Text style={styles.TextH4}>Necesitas 18 respuestas correctas para aprobarlo</Text>
      </View>
    </View>
  );
}
