import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import GridList from "../ui/GridList";
import ButtonPrincipal from "../components/ButtonPrincipal";


export default function SelectionScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.TextSelection}>Selecciona tu Grado</Text>
        <View style={styles.boxSelection}>
          <GridList />
        </View>
        <View>
        <Text>Hola</Text>
        </View>
      </View>
      
    </SafeAreaView>
  );
}
