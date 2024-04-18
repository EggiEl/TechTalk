import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpoLoc from './pages/expolocation';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import BackgroundGeoLocation from './pages/reactloc';
import * as Location from "expo-location";



const Tab = createBottomTabNavigator();

export default function App() {











  return (
      <NavigationContainer>
        <StatusBar style='dark' />
        
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName   ;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } 
                
                if (route.name === 'reactlocation') {
                  iconName = focused
                    ? 'add-circle'
                    : 'add-circle-outline';
                }
                
               

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'rgba(44, 151, 185, 1)',
              tabBarInactiveTintColor: '#BFDABE',
              tabBarStyle: { backgroundColor: 'black' },
              tabBarShowLabel: false,
            })}
          >
          <Tab.Screen name="Home" component={ExpoLoc} />
          <Tab.Screen name ="reactlocation" component ={BackgroundGeoLocation} /> 
        </Tab.Navigator>
      </NavigationContainer>
  );
}