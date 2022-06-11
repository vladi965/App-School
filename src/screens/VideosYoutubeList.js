import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import TopYoutubePopulars from '../components/TopYoutubePopulars';
import { TOP_YOUTUBE } from '../Data/videosYoutube';


const VideosYoutubeList = () => {
  return (
    <SafeAreaView style={styles.ViewContent}>
        <TopYoutubePopulars list={ TOP_YOUTUBE } />
    </SafeAreaView>
  )
}

export default VideosYoutubeList