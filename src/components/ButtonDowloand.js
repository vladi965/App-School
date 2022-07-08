import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from '../styles/GlobalStyles';
import Icon from "react-native-vector-icons/FontAwesome5";

const ButtonDowloand = () => {
  return (
    <TouchableOpacity>
      <View style={styles.btnContentDowloand}>
        <View style={styles.contentButtonTwo}>
          <Text style={styles.btnTextOne}>Descargar</Text>
          <Icon name="download" color='#fff' size={25} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonDowloand