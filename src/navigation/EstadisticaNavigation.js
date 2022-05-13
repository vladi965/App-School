import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EstadisticaScreen from "../screens/EstadisticaScreen";

const Stack = createStackNavigator();

export default function EstadisticaNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Estadistica"
        component={EstadisticaScreen}
        options={{
          title: "Estadistica",
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
