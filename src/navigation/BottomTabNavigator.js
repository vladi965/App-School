import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import { HomeStackNavigator, CursoStackNavigator, EstadistStackNavigator, PerfilStackNavigator } from './stack/StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size }) => (
            <Icon name="home" color='#B4E0FD' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Curso"
        component={CursoStackNavigator}
        options={{
          tabBarLabel: "Cursos",
          tabBarIcon: ({ size }) => (
            <Icon name="book" color='#AFE5DC' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Estadistica"
        component={EstadistStackNavigator}
        options={{
          tabBarLabel: "Estadistica",
          tabBarIcon: ({ size }) => (
            <Icon name="chart-bar" color='#EECFE7' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStackNavigator}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ size }) => (
            <Icon name="user" color='#FAE7A8'  size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
