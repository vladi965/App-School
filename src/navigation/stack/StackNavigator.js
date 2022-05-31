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

export {
  HomeStackNavigator,
  CursoStackNavigator,
  EstadistStackNavigator,
  PerfilStackNavigator,
};
