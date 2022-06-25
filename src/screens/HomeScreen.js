import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import TopExercisesCarousel from "../components/TopExercisesCarousel";
import SectionHeader from "../components/SectionHeader";
import SectionHeaderTwo from "../components/SectionHeaderTwo";
import Youtube from "../api/Youtube";
import Search from "../components/Search";
import { TOP_EXERCISES } from "../Data/exercises";
import Carousel from "../components/Carousel";
import { CAROUSEL } from "../Data/carousel_Home";
import SimpleEmoji from "simple-react-native-emoji";
import useAuth from "../hooks/useAuth";

export default function HomeScreen() {
  const {auth, logout} = useAuth();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentHome}>
            <View style={styles.contentTitle}>
              <Text style={styles.textHome}>Hola, {`${auth.firstName}`}</Text>
              <SimpleEmoji style={styles.emoji} shortName={"hand"} />
            </View>
            <Search />
            <View>
              <Carousel data={CAROUSEL} />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <SectionHeader title="Ejercicios Populares" />
              <TopExercisesCarousel list={TOP_EXERCISES} />
              <SectionHeaderTwo title="Videos Populares" />
              <Youtube />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
