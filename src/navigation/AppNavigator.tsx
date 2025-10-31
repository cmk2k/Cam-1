/**
 * Main app navigation with bottom tabs
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppStore } from '../store/useAppStore';
import { lightTheme, darkTheme } from '../utils/theme';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ConvertersScreen from '../screens/ConvertersScreen';
import HydraulicsScreen from '../screens/HydraulicsScreen';
import BearingsScreen from '../screens/BearingsScreen';
import GlossaryScreen from '../screens/GlossaryScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator: React.FC = () => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarStyle: {
            backgroundColor: theme.surface,
            borderTopColor: theme.border,
          },
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: '#FFFFFF',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Converters"
          component={ConvertersScreen}
          options={{
            title: 'Converters',
            tabBarLabel: 'Convert',
          }}
        />
        <Tab.Screen
          name="Hydraulics"
          component={HydraulicsScreen}
          options={{
            title: 'Hydraulics',
            tabBarLabel: 'Hydraulics',
          }}
        />
        <Tab.Screen
          name="Bearings"
          component={BearingsScreen}
          options={{
            title: 'Bearings',
            tabBarLabel: 'Bearings',
          }}
        />
        <Tab.Screen
          name="Glossary"
          component={GlossaryScreen}
          options={{
            title: 'Glossary',
            tabBarLabel: 'Glossary',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
