import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import TopExercisesCarousel from '../components/TopExercisesCarousel';
import SectionHeader from '../components/SectionHeader';
import SectionHeaderTwo from '../components/SectionHeaderTwo';
import Youtube from "../api/Youtube";
import Search from '../components/Search';
import { TOP_EXERCISES } from '../Data/exercises';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentHome}>
          <Text style={styles.textHome}>Hola, Eduardo!</Text>
          <Search />
          <ScrollView showsHorizontalScrollIndicator={false}>
            <SectionHeader 
              title="Ejercicios Populares"
              />
            <TopExercisesCarousel list={TOP_EXERCISES} />
            <SectionHeaderTwo 
              title="Videos Populares"
              />
            <Youtube />
          </ScrollView>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
