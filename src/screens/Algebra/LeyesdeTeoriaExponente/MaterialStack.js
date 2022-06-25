import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from "../../../styles/GlobalStyles";

const MaterialScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Descarga tus recursos de estudio para practicar más!</Text>
      <View>
        <View>
          <Image />
          <h1></h1>
        </View>
      </View>
    </View>
  )
}

export default MaterialScreen