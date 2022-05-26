import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import GridList from "../ui/GridList";

export default function SelectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.TextSelection}>Seleccione tu Grado</Text>
        <View style={styles.boxSelection}>
          <GridList />
        </View>
      </View>
    </SafeAreaView>
  );
}
