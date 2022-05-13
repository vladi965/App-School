import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from "../styles/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function SearchContent() {
  return (
    <View style={styles.contentSearch}>
        <TextInput
        style={styles.search} 
        placeholder="Buscar...."
        placeholderTextColor="#7460F2"
        >
        <Icon name="search" color="#7460F2" size={20} />
        </TextInput>
    </View>
  )
}