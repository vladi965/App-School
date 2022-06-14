import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import TopCursos from "../components/TopCursos";
import { LIST_CURSOS } from '../Data/cursos';


export default function CursosScreen() {
  return (
    <View style={styles.contentCurso}>
      <TopCursos list={LIST_CURSOS} />
    </View>
  )
}

