import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/GlobalStyles";
import TopListContent from "../../components/Aritmetica/TopListContent";
import {LIST_TEMAS_ARITMETICA} from '../../Data/Aritmetica/Temas';

const TemasScreen = () => {
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.temaStyle}>Temas</Text>
      <View>
       <TopListContent list={LIST_TEMAS_ARITMETICA} />
      </View>
    </View>
    </SafeAreaView>
  )
}

export default TemasScreen;