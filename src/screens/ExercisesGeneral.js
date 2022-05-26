import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import TopExercisesGenerl from "../components/TopExercisesGenerl";
import { EXERCISES_ESSENTIAL, EXERCISES_INTERMEDIATE, EXERCISES_AVANCED } from '../Data/ExercisesProblem';


export default function ExercisesGeneral() {

  return (
    <SafeAreaView>
        <ScrollView>
      <View>
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
        </ScrollView>
    </SafeAreaView>
  );
}
