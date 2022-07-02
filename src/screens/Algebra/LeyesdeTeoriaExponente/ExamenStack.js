import React, { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { styles } from "../../../styles/GlobalStyles";
import Countdown from "../../../components/Countdown";
import { Checkbox } from "react-native-paper";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import { useNavigation } from '@react-navigation/native';

//-----Images-----//
const img1 = require("../../../assets/algebra/ejercicios/basico/img1.png");
const img2 = require("../../../assets/algebra/ejercicios/basico/img2.png");
const img3 = require("../../../assets/algebra/ejercicios/basico/img3.png");
const img4 = require("../../../assets/algebra/ejercicios/basico/img4.png");
const img5 = require("../../../assets/algebra/ejercicios/basico/img5.png");
const img6 = require("../../../assets/algebra/ejercicios/basico/img6.png");



const ExamenScreen = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = React.useState(false);

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
        <View style={styles.tomp1}>
          <View>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "bold" }}>
              1. Simplifica
            </Text>
            <View>
              <Image style={styles.imgBasic} source={img1} />
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox 
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>25</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>12</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>10</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>8</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>40</Text>
            </View>
          </View>

          <View style={{ marginTop: 20}}>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "bold" }}>
              1. Simplifica
            </Text>
            <View>
              <Image source={img2} />
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox 
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>25</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>12</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>10</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>8</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>40</Text>
            </View>
          </View>

          <View style={{ marginTop: 20}}>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "bold" }}>
              1. Simplifica
            </Text>
            <View>
              <Image source={img3} />
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox 
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>25</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>12</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>10</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>8</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>40</Text>
            </View>
          </View>

          <View style={{ marginTop: 20}}>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "bold" }}>
              1. Simplifica
            </Text>
            <View>
              <Image source={img4} />
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox 
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>25</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>12</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>10</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>8</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>40</Text>
            </View>
          </View>

          <View style={{ marginTop: 20}}>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "bold" }}>
              1. Simplifica
            </Text>
            <View>
              <Image source={img5} />
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox 
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>25</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>12</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>10</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>8</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>40</Text>
            </View>
          </View>

          <View style={{ marginTop: 20}}>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "bold" }}>
              1. Simplifica
            </Text>
            <View>
              <Image source={img6} />
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox 
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>25</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>12</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>10</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>8</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>40</Text>
            </View>
          </View>

          <View style={{ marginTop: 20}}>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "bold" }}>
              1. Simplifica
            </Text>
            <View>
              <Image style={styles.imgBasic} source={img1} />
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox 
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>25</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>12</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>10</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>8</Text>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.label}>40</Text>
            </View>
          </View>
          
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <ButtonPrincipal title="Enviar" onPress={createTwoButtonAlert} />
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};
export default ExamenScreen;
