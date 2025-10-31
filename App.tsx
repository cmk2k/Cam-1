/**
 * Applied Technical Reference - Main App Entry Point
 * Offline-first industrial engineering reference app
 */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/navigation/AppNavigator';
import { initDatabase, isDataSeeded, seedDatabase } from './src/database/db';
import { useAppStore, loadThemePreference } from './src/store/useAppStore';
import { AppData } from './src/types';

// Import seed data
const seedData: AppData = require('./assets/data.json');

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isDarkMode = useAppStore((state) => state.isDarkMode);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      console.log('Initializing app...');

      // Load theme preference
      await loadThemePreference();

      // Initialize database
      await initDatabase();
      console.log('Database initialized');

      // Check if data needs to be seeded
      const seeded = await isDataSeeded();
      console.log('Data seeded:', seeded);

      if (!seeded) {
        console.log('Seeding database with initial data...');
        await seedDatabase(seedData);
        console.log('Database seeded successfully');
      }

      // Load recents and bookmarks
      await useAppStore.getState().loadRecents();
      await useAppStore.getState().loadBookmarks();

      // Mark app as initialized
      useAppStore.getState().setInitialized(true);

      setIsLoading(false);
    } catch (err) {
      console.error('Error initializing app:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize app');
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Text style={styles.errorSubtext}>Please restart the app</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#1a73e8" />
        <Text style={styles.loadingText}>Loading Applied Technical Reference...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#5f6368',
  },
  errorText: {
    fontSize: 18,
    color: '#D93025',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  errorSubtext: {
    fontSize: 14,
    color: '#5f6368',
    textAlign: 'center',
  },
});
