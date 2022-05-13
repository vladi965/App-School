import React from "react";
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonPrincipal from "../components/ButtonPrincipal";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonFacebook from "../components/ButtonFacebook";
import { styles } from "../styles/GlobalStyles";

const logo = require("../assets/general/atomo.png");

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.title}>Iniciar Sesion</Text>
          <View style={styles.contentInput}>
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
          <View style={styles.contentPrincipal}>
            <ButtonGoogle title="Google" />
            <ButtonFacebook title="Facebook"/>
          </View>
          <View style={styles.contentRegistrar}>
            <Text style={styles.TextRegistrarOne}>¿No tiene cuenta?</Text>
            <TouchableOpacity>
              <Text style={styles.TextRegistrarTwo}>Registrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
