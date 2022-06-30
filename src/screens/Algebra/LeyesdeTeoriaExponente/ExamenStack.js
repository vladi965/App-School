import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from "../../../styles/GlobalStyles";
import Countdown from '../../../components/Countdown';
import CheckBox from '@react-native-community/checkbox';

//-----Images-----//
const img1 = require("../../../assets/algebra/ejercicios/basico/img1.png");
const img2 = require("../../../assets/algebra/ejercicios/basico/img2.png");
const img3 = require("../../../assets/algebra/ejercicios/basico/img3.png");
const img4 = require("../../../assets/algebra/ejercicios/basico/img4.png");
const img5 = require("../../../assets/algebra/ejercicios/basico/img5.png");
const img6 = require("../../../assets/algebra/ejercicios/basico/img6.png");


const ExamenScreen = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.containerTwo}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentCount}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Tiempo</Text>
        <Countdown />
      </View>
      <View style={styles.tomp1}>
          <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: 'bold' }}>1. Simplifica</Text>
        <View>
          <Image style={styles.imgBasic} source={img1} />
        </View>
        <View style={styles.checkboxContainer}>
            <CheckBox 
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>25</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}
export default ExamenScreen