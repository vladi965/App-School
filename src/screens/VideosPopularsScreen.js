import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import TopYoutubePopulars from '../components/TopYoutubePopulars';
import { TOP_YOUTUBE } from '../Data/videosYoutube';

export default function VideosPopularsScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <TopYoutubePopulars list={TOP_YOUTUBE} />
         </ScrollView>
      </View>
    </SafeAreaView>
  );
}
