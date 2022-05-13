import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import ExercisesPopularsScreen from '../screens/ExercisesPopularsScreen';

const Stack = createStackNavigator();

export default function ExercisesPopularNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Ejercicios"
        component={ExercisesPopularsScreen}
        options={{
          title: 'Ejercicios Populares',
          headerTitleStyle:{
            textAlign: 'center',
          }
        }}
      />
    </Stack.Navigator>
  )
}