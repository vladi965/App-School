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
import { styles } from "../styles/GlobalStyles";
import ButtonPrincipal from "../components/ButtonPrincipal";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Formik from "formik";
import * as Yup from "yup";
import { authentication } from "../../services/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*   const [confirmPassword, setConfirmPassword] = useState(''); */
  const [visible, setVisibility] = React.useState({ name: "eye-off" });

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        console.log("Cuenta Creada");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error.message);
      });
  };

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

  //Handles sign up
  const handleSubmit = async () => {
    if (
      email === "" &&
      password !== confirmPassword &&
      password === "" &&
      confirmPassword === ""
    ) {
      console.log("Invalid Credentials");
    } else {
      try {
        await handleSignUp(email, password);
      } catch (error) {
        console.error(error);
      }
    }
  };

 /*  const LoginFormSchema; */

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.textRegister}>Registrarte</Text>
          <View style={styles.contentInput}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={LoginFormSchema}
              validationOnMount={true}
            >
              {{ handleChange, handleBlur, handleSubmit, values, isValid }} =>(
              <>
                <TextInput
                  style={styles.textInput}
                  placeholder="Correo Electronico"
                  placeholderTextColor="#7460F2"
                  defaultValue={email}
                  onChangeText={(text) => formik.setFieldValue("email", text)}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  returnKeyType="next"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Usuario"
                  placeholderTextColor="#7460F2"
                  autoCapitalize="none"
                  defaultValue={username}
                  onChangeText={(text) =>
                    formik.setFieldValue("username", text)
                  }
                  returnKeyType="next"
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Contraseña"
                    placeholderTextColor="#7460F2"
                    defaultValue={password}
                    onChangeText={(text) => setPassword(text)}
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
              </>
              )
            </Formik>
            {/* <TextInput
              style={styles.textInput}
              defaultValue={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#7460F2"
              returnKeyType="go"
              secureTextEntry= {true}
              textContentType="password"
              keyboardType="default"
              autoCorrect={false}
            /> */}
          </View>
          <ButtonPrincipal title="Crear Cuenta" onPress={RegisterUser} />
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
