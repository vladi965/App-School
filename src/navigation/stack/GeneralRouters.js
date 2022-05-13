import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import HomeScreen from '../../screens/HomeScreen';
import ExercisesPopularsScreen from '../../screens/ExercisesPopularsScreen';
import VideosPopularsScreen from '../../screens/VideosPopularsScreen';
import CursosScreen from '../../screens/CursosScreen';
import TemasScreen from '../../screens/Aritmetica/TemasScreen';



const Stack = createStackNavigator();

const GeneralRouters = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={'LoginScreen'}
            component={LoginScreen}
        />
        <Stack.Screen 
            name={'RegisterScreen'}
            component={RegisterScreen}
        />
        <Stack.Screen 
            name={'HomeScreen'}
            component={HomeScreen}
        />
        <Stack.Screen 
            name={'ExercisesPopularsScreen'}
            component={ExercisesPopularsScreen}
        />
        <Stack.Screen 
            name={'VideosPopularsScreen'}
            component={VideosPopularsScreen}
        />
        <Stack.Screen 
            name={'CursosScreen'}
            component={CursosScreen}
        />
        <Stack.Screen 
            name={'TemasScreen'}
            component={TemasScreen}
        />
    </Stack.Navigator>
  )
}

export default GeneralRouters