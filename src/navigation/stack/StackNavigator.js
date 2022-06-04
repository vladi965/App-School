import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { auth } from "../../../services/Firebase";
import { onAuthStateChanged } from "firebase/auth";
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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const CursoStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CursosScreen"
        component={CursosScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const EstadistStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EstadisticaScreen" component={EstadisticaScreen} />
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
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setCurrentUser(user);
        console.log(user);
      }
    });
    return () => unsubscribe();
  }, []);

  return !currentUser ? (
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
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
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
      {/*  />    
        <Stack.Screen name="ExercisesPopularsScreen" component={ExercisesPopularsScreen} />
        <Stack.Screen name="VideosPopularsScreen" component={VideosPopularsScreen} />
        <Stack.Screen name= "TemasScreen" component={TemasScreen} /> */}
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  CursoStackNavigator,
  EstadistStackNavigator,
  PerfilStackNavigator,
};
