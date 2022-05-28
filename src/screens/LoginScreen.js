import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import ButtonPrincipal from "../components/ButtonPrincipal";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonFacebook from "../components/ButtonFacebook";
import { styles } from "../styles/GlobalStyles";


const logo = require("../assets/general/atomo.png");

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisibility] = React.useState({ name: "eye-off" });

  //Toggles the eye icon to show the password
  const ToggleVisibility = () => {
    if (visible.name === "eye") {
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye" });
    }
  };

  //Handles password visibility when the eye icon is pressed
  const secureTextEntry = () => {
    if (visible.name === "eye") {
      return true;
    } else if (visible.name === "eye-off") {
      return false;
    }
  };

  //Handles email input
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  //Handles password input
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignInClick = async () => {
    await handleSignIn(email, password);
    console.log("Login succesful");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.content}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.title}>Iniciar Sesion</Text>
            <View style={styles.contentInput}>
              <TextInput
                value={email}
                onChangeText={handleEmailChange}
                style={styles.textInput}
                placeholder="Correo Electronico"
                placeholderTextColor="#7460F2"
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  value={password}
                  style={styles.textInput}
                  defaultValue={password}
                  onChangeText={handlePasswordChange}
                  placeholder="Contraseña"
                  placeholderTextColor="#7460F2"
                  returnKeyType="go"
                  secureTextEntry={secureTextEntry()}
                  textContentType="password"
                  keyboardType="default"
                  autoCorrect={false}
                />
                <Ionicons
                  name={visible.name}
                  size={24}
                  color="#7460F2"
                  style={styles.eyeContainer}
                  onPress={ToggleVisibility}
                />
              </View>
            </View>
            <ButtonPrincipal
              title="Ingresar"
              onPress={() => navigation.navigate("SelectionScreen")}
            />
            <View style={styles.contentPrincipal}>
              <ButtonGoogle title="Google" />
              <ButtonFacebook title="Facebook" />
            </View>
            <View style={styles.contentRegistrar}>
              <Text style={styles.TextRegistrarOne}>¿No tiene cuenta?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                <Text style={styles.TextRegistrarTwo}>Registrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
