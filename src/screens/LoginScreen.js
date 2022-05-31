import React, { useState, useContext } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonPrincipal from "../components/ButtonPrincipal";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonFacebook from "../components/ButtonFacebook";
import { styles } from "../styles/GlobalStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { authentication } from "../../services/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

//Google
import * as Google from 'expo-google-app-auth';

//Facebook

const logo = require("../assets/general/atomo.png");

export default function LoginScreen() {
  const navigation = useNavigation();

  //Text input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisibility] = React.useState({ name: "eye-off" });


  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
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

  //Toggles the eye icon to show the password
  const ToggleVisibility = () => {
    if(visible.name === "eye"){
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye"});
     }
  };

  //Handles password visibility when the eye icon is pressed
  const secureTextEntry = () => {
    if(visible.name === "eye"){
      return false;
    } else if (visible.name === "eye-off"){
      return true;
    }
  };

  
  //Google SignIn

  //Facebook SignIn


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
              onChangeText={text => setEmail(text)}
              style={styles.textInput}
              textContentType= "emailAddress"
              placeholder="Correo Electronico"
              placeholderTextColor="#7460F2"
              returnKeyType="next"
            />
            <View style={styles.passwordContainer}>
            <TextInput
              defaultValue={password}
              style={styles.textInput}
              onChangeText={text => setPassword(text)}
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
          <ButtonPrincipal title="Ingresar" onPress={() => navigation.navigate('SelectionScreen')} />
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
