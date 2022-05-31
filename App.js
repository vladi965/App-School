import React from "react";

import  { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from "./src/navigation/stack/StackNavigator";


import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
])



export default function App() {
  return (
    <NavigationContainer>
       <MainStackNavigator /> 
    </NavigationContainer> 
  );
}
