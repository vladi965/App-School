import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "./src/navigation/stack/StackNavigator";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'",
  "Setting a timer",
  "AsyncStorage has been extracted from react-native",
]);

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
