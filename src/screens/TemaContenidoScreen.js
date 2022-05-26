import React from "react";
import { View, Text } from "react-native";
import TopTemaContenido from "../components/TopTemaContenido";
import { TOP_TEMA_CONTENIDO } from "../Data/temaContenido";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";

export default function TemaContenido() {
  return (
    <SafeAreaView>
      <View style={styles.ViewContent}>
        <TopTemaContenido list={TOP_TEMA_CONTENIDO} />
      </View>
    </SafeAreaView>
  );
}
