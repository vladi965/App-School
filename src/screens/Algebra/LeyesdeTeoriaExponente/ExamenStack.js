import React from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { styles } from "../../../styles/GlobalStyles";
import Countdown from "../../../components/Countdown"; 
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import { useNavigation } from '@react-navigation/native';
import ExamenView from "../../../components/ExamenView";

//-----Images-----//
const img1 = require("../../../assets/algebra/ejercicios/basico/img1.png");
const img2 = require("../../../assets/algebra/ejercicios/basico/img2.png");
const img3 = require("../../../assets/algebra/ejercicios/basico/img3.png");
const img4 = require("../../../assets/algebra/ejercicios/intermedio/img1.jpeg");
const img5 = require("../../../assets/algebra/ejercicios/intermedio/img2.jpeg");
const img6 = require("../../../assets/algebra/ejercicios/intermedio/img3.jpeg");

const ExamenScreen = () => {
  const navigation = useNavigation();

  const createTwoButtonAlert = () =>
    Alert.alert('Evaluación Terminada', '¿Usted desea terminar su Examen?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Si', onPress: () => navigation.navigate('HomeScreen') },
    ]);

  return (
    <View style={styles.containerTwo}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentCount}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Tiempo</Text>
          <Countdown />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>1. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>2. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>3. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>4. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>5. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>6. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>7. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>8. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>9. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>10. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>11. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>12. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>13. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>14. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25, marginBottom: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>15. Simplifica</Text>
          <View>
            <Image source={img1} />
          </View>
          <ExamenView />
        </View>
        
        
      
      </ScrollView>
    </View>
  );
};
export default ExamenScreen;
