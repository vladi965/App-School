import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import HomeScreen from "../../screens/HomeScreen";
import ExercisesPopularsScreen from "../../screens/ExercisesPopularsScreen";
import VideosPopularsScreen from "../../screens/VideosPopularsScreen";
import CursosScreen from "../../screens/CursosScreen";
import TemasScreen from "../../screens/Aritmetica/TemasScreen";
import SelectionScreen from "../../screens/SelectionScreen";
import EstadisticaScreen from "../../screens/EstadisticaScreen";
import PerfilScreen from "../../screens/PerfilScreen";
import TemaContenidoScreen from "../../screens/TemaContenidoScreen";
import VideosYoutubeList from "../../screens/VideosYoutubeList";

//Contenido Aritmetica
import TeoriaStack from "../../screens/Aritmetica/TeoriadeConjunto/TeoriaStack";
import EjerciciosStack from "../../screens/Aritmetica/TeoriadeConjunto/EjerciciosStack";
import MaterialStack from "../../screens/Aritmetica/TeoriadeConjunto/MaterialStack";
import DesafiosStack from "../../screens/Aritmetica/TeoriadeConjunto/DesafiosStack";
import VideoStack from "../../screens/Aritmetica/TeoriadeConjunto/VideoStack";
import ExamenStack from "../../screens/Aritmetica/TeoriadeConjunto/ExamenStack";

import BottomTabNavigator from "../BottomTabNavigator";

const Stack = createStackNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CursoStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CursosScreen"
        component={CursosScreen}
        options={{
          title: "Cursos",
          headerTintColor: '#fff',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const EstadistStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EstadisticaScreen"
        component={EstadisticaScreen}
        options={{
          title: "Estadistica",
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const PerfilStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
    </Stack.Navigator>
  );
};


export default MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectionScreen"
        component={SelectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExercisesPopularsScreen"
        component={ExercisesPopularsScreen}
        options={{
          title: "Ejercicios Populares",
          headerTitleAlign: "center",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="VideosYoutubeList"
        component={VideosYoutubeList}
        options={{
          title: "Videos Populares",
          headerTitleAlign: "center",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="TemasScreen"
        component={TemasScreen}
        options={{
          title: "Aritmetica",
          headerTitleAlign: "center",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: "#7460F2",
          }
         }}
      />
      <Stack.Screen
        name="TemaContenidoScreen"
        component={TemaContenidoScreen}
        options={{
          title: "Teoría de Conjunto",
          headerTitleAlign: "center",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: "#7460F2",
          }
         }}
      />
      <Stack.Screen
        name="TeoriaStack"
        component={TeoriaStack}
        options={{ 
         title: "Teoría",
         headerTitleAlign: "center",
         headerTintColor: '#fff',
         headerStyle: {
           backgroundColor: "#7460F2",
         } 
        }}
      />
      <Stack.Screen
        name="EjerciciosStack"
        component={EjerciciosStack}
        options={{ 
         title: "Ejercicios" 
        }}
      />
      <Stack.Screen
        name="MaterialStack"
        component={MaterialStack}
        options={{ 
         title: "Material" 
        }}
      />
      <Stack.Screen
        name="DesafiosStack"
        component={DesafiosStack}
        options={{ 
         title: "Desafios" 
        }}
      />
      <Stack.Screen
        name="VideoStack"
        component={VideoStack}
        options={{ 
         title: "Videos" 
        }}
      />
      <Stack.Screen
        name="ExamenStack"
        component={ExamenStack}
        options={{ 
         title: "Examen" 
        }}
      />

    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  CursoStackNavigator,
  EstadistStackNavigator,
  PerfilStackNavigator,
};
