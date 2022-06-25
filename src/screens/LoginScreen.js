import React, { useState, useContext } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// -- Button Principal -- //
import ButtonPrincipal from "../components/ButtonPrincipal";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonFacebook from "../components/ButtonFacebook";
// -- Styles -- //
import { styles } from "../styles/GlobalStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 
import { useNavigation } from '@react-navigation/native';
//Icono
import { Ionicons } from '@expo/vector-icons';
import { authentication } from "../../services/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../src/utils/UserDB";
import useAuth from "../../src/hooks/useAuth";

//Logo
const logo = require("../assets/general/atomo.png");

export default function LoginScreen() {
  const [ error, setError ] = useState("");
  const { login } = useAuth();

  const navigation = useNavigation();

  //Text input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisibility] = React.useState({ name: "eye-off" });

  const formik = useFormik({ 
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('')
      const { username, password } = formValue;

      if(username !== user.username || password !== user.password){
        setError('El usuario o la contraseña no son correcto');
      } else {
        login(userDetails)
      }
    },
  });



  const SignInUser = () => {
    signInWithEmailAndPassword(authentication,email, password)
     .then((userCredential) => {
        console.log("Welcome a AppSchool!")
        Alert.alert('Welcome a AppSchool!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('SelectionScreen');
     })
     .catch((error) => {
        console.log(error);
     })
  } 

  //Icono de eyes para activar
  const ToggleVisibility = () => {
    if(visible.name === "eye"){
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye"});
     }
  };

  //Visibility Icon eye password
  const secureTextEntry = () => {
    if(visible.name === "eye"){
      return false;
    } else if (visible.name === "eye-off"){
      return true;
    }
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
              defaultValue={email}
              onChangeText={(text) => formik.setFieldValue("username", text)}
              style={styles.textInput}
              autocapitalize="none"
              textContentType= "emailAddress"
              placeholder="Nombre de usuario"
              value={formik.values.username}
              placeholderTextColor="#7460F2"
              returnKeyType="next"
            />
            <View style={styles.passwordContainer}>
            <TextInput
              defaultValue={password}
              style={styles.textInput}
              autocapitalize="none"
              onChangeText={(text) => formik.setFieldValue("password", text)}
              placeholder="Contraseña"
              placeholderTextColor="#7460F2"
              returnKeyType="go"
              value={formik.values.password}
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
          <ButtonPrincipal title="Ingresar" onPress={() => navigation.navigate('SelectionScreen')} />
          <Text style={styles.error}>{formik.errors.username}</Text>
          <Text style={styles.error}>{formik.errors.password}</Text>
          <Text style={styles.error}>{error}</Text>
          <View style={styles.contentPrincipal}>
            <ButtonGoogle title="Google"/>
            <ButtonFacebook title="Facebook"/>
          </View>
          <View style={styles.contentRegistrar}>
            <Text style={styles.TextRegistrarOne}>¿No tiene cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} >
              <Text style={styles.TextRegistrarTwo}>Registrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
   </KeyboardAwareScrollView> 
    </SafeAreaView>
  );
}

function initialValues(){
  return{
    username: "",
    password: "",
  };
}

function validationSchema(){
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatorio"),
  }
}
