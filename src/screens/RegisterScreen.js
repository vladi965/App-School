import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import ButtonPrincipal from "../components/ButtonPrincipal";


export default function RegisterScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textRegister}>Registrarte</Text>
        <View style={styles.contentInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Nombres"
              placeholderTextColor="#7460F2"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Apellidos"
              placeholderTextColor="#7460F2"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Correo Electronico"
              placeholderTextColor="#7460F2"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Contraseña"
              placeholderTextColor="#7460F2"
            />
          </View>
          <ButtonPrincipal title="Ingresar" />
          <View style={styles.contentRegistrar}>
            <Text style={styles.TextRegistrarOne}>¿Ya tiene cuenta?</Text>
            <TouchableOpacity>
              <Text style={styles.TextRegistrarTwo}>Ingresar</Text>
            </TouchableOpacity>
          </View>
      </View>
      
    </SafeAreaView>
  );
}
