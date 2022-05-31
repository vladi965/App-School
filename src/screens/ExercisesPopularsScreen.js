import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import Search from "../components/Search";
import TopExercisesPopulars from "../components/TopExercisesPopulars";
import { TOP_EXERCISES_POPULARS } from "../Data/exercisesPopular";

export default function ExercisesPopularsScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.contentSearch}>
          <Search />
          <View style={styles.topexercises}>
            <TopExercisesPopulars list={TOP_EXERCISES_POPULARS} />
          </View>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
