import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/GlobalStyles";
import TopListContent from "../../components/Aritmetica/TopListContent";
import { LIST_PRIMERA_UNIDAD } from "../../Data/Algebra/Temas";
import { LIST_SEGUNDA_UNIDAD } from "../../Data/Algebra/Temas";
import { LIST_TERCERA_UNIDAD } from "../../Data/Algebra/Temas";
import { LIST_CUARTA_UNIDAD } from "../../Data/Algebra/Temas";

const TemasScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Text style={styles.temaStyle}>Primera Unidad</Text>
        <View>
          <TopListContent list={LIST_PRIMERA_UNIDAD} />
        </View>
        <Text style={styles.temaStyle}>Segunda Unidad</Text>
        <View>
          <TopListContent list={LIST_SEGUNDA_UNIDAD} />
        </View>
        <Text style={styles.temaStyle}>Tercera Unidad</Text>
        <View>
          <TopListContent list={LIST_TERCERA_UNIDAD} />
        </View>
        <Text style={styles.temaStyle}>Cuarta Unidad</Text>
        <View>
          <TopListContent list={LIST_CUARTA_UNIDAD} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default TemasScreen;
