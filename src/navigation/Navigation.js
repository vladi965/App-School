import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome5";

import HomeNavigation from "./HomeNavigation";
import CursoNavigation from "./CursoNavigation";
import EstadisticaNavigation from "./EstadisticaNavigation";
import PerfilNavigation from "./PerfilNavigation";


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color='#B4E0FD' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Curso"
        component={CursoNavigation}
        options={{
          tabBarLabel: "Cursos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" color='#AFE5DC' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Estadistica"
        component={EstadisticaNavigation}
        options={{
          tabBarLabel: "Estadistica",
          tabBarIcon: ({ color, size }) => (
            <Icon name="chart-bar" color='#EECFE7' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilNavigation}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color='#FAE7A8'  size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default Navigation;
