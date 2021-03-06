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
const img7 = require("../../../assets/algebra/ejercicios/basico/img4.png");
const img8 = require("../../../assets/algebra/ejercicios/basico/img5.png");
const img9 = require("../../../assets/algebra/ejercicios/basico/img6.png");
const img10 = require("../../../assets/algebra/ejercicios/intermedio/img4.jpeg");
const img11 = require("../../../assets/algebra/ejercicios/intermedio/img5.jpeg");
const img12 = require("../../../assets/algebra/ejercicios/intermedio/img6.jpeg");
const img13 = require("../../../assets/algebra/ejercicios/basico/img2.png");
const img14 = require("../../../assets/algebra/ejercicios/basico/img5.png");
const img15 = require("../../../assets/algebra/ejercicios/basico/img4.png");


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
          <View style={{ marginTop: 15 }}> 
            <Image source={img2} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>3. Simplifica</Text>
          <View>
            <Image source={img3} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>4. Calcula el valor de la operación</Text>
          <View>
            <Image source={img4} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>5. Determinar el resultado</Text>
          <View>
            <Image source={img5} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>6. Hallar el valor</Text>
          <View>
            <Image source={img6} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>7. Simplifica</Text>
          <View>
            <Image source={img7} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>8. Simplifica</Text>
          <View>
            <Image source={img8} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>9. Simplifica</Text>
          <View>
            <Image source={img9} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>10. Simplifica</Text>
          <View>
            <Image source={img10} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>11. Simplifica</Text>
          <View>
            <Image source={img11} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>12. Determinar el area del rectangulo</Text>
          <View>
            <Image source={img12} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>13. Simplifica</Text>
          <View>
            <Image source={img13} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>14. Simplifica</Text>
          <View>
            <Image source={img14} />
          </View>
          <ExamenView />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 25, marginBottom: 25}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>15. Simplifica</Text>
          <View>
            <Image source={img15} />
          </View>
          <ExamenView />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
            <ButtonPrincipal title="Enviar" onPress={createTwoButtonAlert} />
        </View>
      </ScrollView>
    </View>
  );
};
export default ExamenScreen;
