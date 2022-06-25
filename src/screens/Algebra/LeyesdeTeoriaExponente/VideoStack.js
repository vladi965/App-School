import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListVideoYoutube from '../../../components/ListVideoYoutube';

const VideoStack = () => {
  return (
    <View style={styles.container}>
      <ListVideoYoutube />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15
  },
})

export default VideoStack