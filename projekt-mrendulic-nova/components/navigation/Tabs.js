import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import PopisZaKupovinu from '../screens/PopisZaKupovinu';
import PrikazProizvoda from '../screens/PrikazProizvoda';
import EkranUnos from '../screens/EkranUnos';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ekran unos"
        component={EkranUnos}
        options={{
          tabBarLabel: 'Unesi proizvod',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Popis za kupovinu"
        component={PopisZaKupovinu}
        options={{
          tabBarLabel: 'Pretraga',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Prikaz proizvoda"
        component={PrikazProizvoda}
        options={{
          tabBarLabel: 'Popis proizvoda (baza)',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={24}
              color="black"
            />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
