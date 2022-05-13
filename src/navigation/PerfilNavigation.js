import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilScreen from "../screens/PerfilScreen";

const Stack = createStackNavigator();

export default function PerfilNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          title: "Perfil",
          headerTitleStyle: {
            textAlign: "center",
            color: "#fff"
          },
          headerStyle: {
            backgroundColor: "#7460F2"
          }
        }}
      />
    </Stack.Navigator>
  );
}
