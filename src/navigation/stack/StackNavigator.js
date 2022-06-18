import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import HomeScreen from "../../screens/HomeScreen";
import ExercisesPopularsScreen from "../../screens/ExercisesPopularsScreen";
import VideosPopularsScreen from "../../screens/VideosPopularsScreen";
import CursosScreen from "../../screens/CursosScreen";
import TemasScreen from "../../screens/Algebra/TemasScreen";
import SelectionScreen from "../../screens/SelectionScreen";
import EstadisticaScreen from "../../screens/EstadisticaScreen";
import PerfilScreen from "../../screens/PerfilScreen";
import TemaContenidoScreen from "../../screens/TemaContenidoScreen";
import VideosYoutubeList from "../../screens/VideosYoutubeList";

//Contenido Aritmetica
import TeoriaStack from "../../screens/Algebra/LeyesdeTeoriaExponente/TeoriaStack";
import EjerciciosStack from "../../screens/Algebra/LeyesdeTeoriaExponente/EjerciciosStack";
import MaterialStack from "../../screens/Algebra/LeyesdeTeoriaExponente/MaterialStack";
import DesafiosStack from "../../screens/Algebra/LeyesdeTeoriaExponente/DesafiosStack";
import VideoStack from "../../screens/Algebra/LeyesdeTeoriaExponente/VideoStack";
import ExamenStack from "../../screens/Algebra/LeyesdeTeoriaExponente/ExamenStack";

//Ejercicios Básicos
import basico1 from "../../screens/Algebra/LeyesdeTeoriaExponente/basico/basico1";
import basico2 from "../../screens/Algebra/LeyesdeTeoriaExponente/basico/basico2";
import basico3 from "../../screens/Algebra/LeyesdeTeoriaExponente/basico/basico3";
import basico4 from "../../screens/Algebra/LeyesdeTeoriaExponente/basico/basico4";
import basico5 from "../../screens/Algebra/LeyesdeTeoriaExponente/basico/basico5";
import basico6 from "../../screens/Algebra/LeyesdeTeoriaExponente/basico/basico6";


//Botton Tab Navigator
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
          headerTintColor: "#fff",
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
          headerTintColor: "#fff",
          headerTitleAlign: "center",
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
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} 
        options={{
          title: "Perfil",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
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
          headerTintColor: "#fff",
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
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="TemasScreen"
        component={TemasScreen}
        options={{
          title: "Algebra",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="TemaContenidoScreen"
        component={TemaContenidoScreen}
        options={{
          title: "Teoría de exponentes I",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7460F2"
          },
        }}
      />
      <Stack.Screen
        name="TeoriaStack"
        component={TeoriaStack}
        options={{
          title: "Teoría",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="EjerciciosStack"
        component={EjerciciosStack}
        options={{
          title: "Ejercicios",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="MaterialStack"
        component={MaterialStack}
        options={{
          title: "Material",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="DesafiosStack"
        component={DesafiosStack}
        options={{
          title: "Desafios",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="VideoStack"
        component={VideoStack}
        options={{
          title: "Videos",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="ExamenStack"
        component={ExamenStack}
        options={{
          title: "Examen",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="basico1"
        component={basico1}
        options={{
          title: "Básico 1",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="basico2"
        component={basico2}
        options={{
          title: "Básico 2",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="basico3"
        component={basico3}
        options={{
          title: "Básico 3",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="basico4"
        component={basico4}
        options={{
          title: "Básico 4",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="basico5"
        component={basico5}
        options={{
          title: "Básico 5",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
        }}
      />
      <Stack.Screen
        name="basico6"
        component={basico6}
        options={{
          title: "Básico 6",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7460F2",
          },
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
