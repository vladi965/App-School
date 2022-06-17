import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../../../styles/GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import TopExercisesGenerl from "../../../components/TopExercisesGenerl";
import {
  EXERCISES_ESSENTIAL,
  EXERCISES_INTERMEDIATE,
  EXERCISES_AVANCED,
} from "../../../Data/ExercisesProblem";

const EjerciciosScreen = () => {
  return (
    <ScrollView style={styles.pqContent}>
      <SafeAreaView>
        <View style={styles.rtContentBasic}>
          <View>
            <Text style={styles.textH2}>Básico</Text>
            <TopExercisesGenerl list={EXERCISES_ESSENTIAL} />
          </View>
          <View>
            <Text style={styles.textH2}>Intermedio</Text>
            <TopExercisesGenerl list={EXERCISES_INTERMEDIATE} />
          </View>
          <View>
            <Text style={styles.textH2}>Avanzado</Text>
            <TopExercisesGenerl list={EXERCISES_AVANCED} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default EjerciciosScreen;
