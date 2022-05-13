import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ExercisesPopularsScreen from "./src/screens/ExercisesPopularsScreen";
import VideosPopularsScreen from "./src/screens/VideosPopularsScreen";
import CursosScreen from "./src/screens/CursosScreen";

import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
])



export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
