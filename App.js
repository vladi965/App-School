import React from "react";

import  { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from "./src/navigation/stack/AuthNavigation";


import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
])


export default function App() {
  return (
    <NavigationContainer>
       <AuthNavigation /> 
    </NavigationContainer> 
  );
}
