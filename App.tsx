import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './src/screens/home';
import ListScreen from './src/screens/list';
import ProfileScreen from './src/screens/profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
