import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CursosScreen from "../screens/CursosScreen";

const Stack = createStackNavigator();

export default function CursoNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Curso"
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
}
