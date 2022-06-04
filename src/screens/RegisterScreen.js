import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/Firebase";
import { styles } from "../styles/GlobalStyles";
import ButtonPrincipal from "../components/ButtonPrincipal";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      return false;
    } else if (visible.name === "eye-off") {
      return true;
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

  //Handles confirm password input
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  //Handles sign up
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("LoginScreen");
        console.log("User signed up!", user.email);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.textRegister}>Registrarte</Text>
          <View style={styles.contentInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Correo Electronico"
              placeholderTextColor="#7460F2"
              defaultValue={email}
              onChangeText={handleEmailChange}
              textContentType="emailAddress"
              keyboardType="email-address"
              returnKeyType="next"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Contraseña"
                placeholderTextColor="#7460F2"
                defaultValue={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={secureTextEntry()}
                returnKeyType="next"
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
            <TextInput
              style={styles.textInput}
              defaultValue={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#7460F2"
              returnKeyType="go"
              secureTextEntry={true}
              textContentType="password"
              keyboardType="default"
              autoCorrect={false}
            />
          </View>
          <ButtonPrincipal title="Crear Cuenta" onPress={handleSubmit} />
          <View style={styles.contentRegistrar}>
            <Text style={styles.TextRegistrarOne}>¿Ya tiene cuenta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.TextRegistrarTwo}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
