/**
 * Home Screen - Main landing page with search, module cards, recents, and bookmarks
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppStore } from '../store/useAppStore';
import { useGlobalSearch } from '../database/hooks';
import { Card } from '../components/Card';
import { lightTheme, darkTheme, spacing, fontSize, borderRadius } from '../utils/theme';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const { results, loading } = useGlobalSearch(searchQuery);

  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);
  const isOffline = useAppStore((state) => state.isOffline);
  const recents = useAppStore((state) => state.recents);
  const bookmarks = useAppStore((state) => state.bookmarks);
  const loadRecents = useAppStore((state) => state.loadRecents);
  const loadBookmarks = useAppStore((state) => state.loadBookmarks);

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    loadRecents();
    loadBookmarks();
  }, []);

  const modules = [
    { title: 'Converters', subtitle: 'Temperature, HP ↔ Torque', screen: 'Converters' },
    { title: 'Hydraulics', subtitle: 'Pump HP, Valve Cv', screen: 'Hydraulics' },
    { title: 'Bearings', subtitle: 'Failure modes & diagnostics', screen: 'Bearings' },
    { title: 'Glossary', subtitle: 'Technical terms & definitions', screen: 'Glossary' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Offline Badge */}
        {isOffline && (
          <View style={[styles.offlineBadge, { backgroundColor: theme.warning }]}>
            <Text style={styles.offlineText}>📶 Offline Mode</Text>
          </View>
        )}

        {/* Header with Dark Mode Toggle */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, { color: theme.text }]}>
              Applied Technical Reference
            </Text>
            <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
              Industrial engineering tools & reference
            </Text>
          </View>
          <View style={styles.darkModeToggle}>
            <Text style={[styles.darkModeLabel, { color: theme.textSecondary }]}>
              {isDarkMode ? '🌙' : '☀️'}
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              trackColor={{ false: theme.disabled, true: theme.primary }}
              thumbColor={isDarkMode ? theme.primaryDark : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Global Search */}
        <View style={styles.searchContainer}>
          <TextInput
            style={[
              styles.searchInput,
              {
                backgroundColor: theme.surface,
                color: theme.text,
                borderColor: theme.border,
              },
            ]}
            placeholder="Search calculators, terms, bearing modes..."
            placeholderTextColor={theme.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Search Results */}
        {searchQuery.trim() !== '' && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Search Results {loading && '(searching...)'}
            </Text>
            {results.length === 0 && !loading && (
              <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
                No results found
              </Text>
            )}
            {results.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                subtitle={item.type}
                onPress={() => {
                  // Navigate to appropriate screen based on type
                  if (item.type === 'calculator') {
                    navigation.navigate(
                      item.id.includes('temp') || item.id.includes('hp-torque')
                        ? 'Converters'
                        : 'Hydraulics'
                    );
                  } else if (item.type === 'bearing') {
                    navigation.navigate('Bearings');
                  } else if (item.type === 'glossary') {
                    navigation.navigate('Glossary');
                  }
                }}
              />
            ))}
          </View>
        )}

        {/* Module Cards */}
        {searchQuery.trim() === '' && (
          <>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>Modules</Text>
              {modules.map((module, index) => (
                <Card
                  key={index}
                  title={module.title}
                  subtitle={module.subtitle}
                  onPress={() => navigation.navigate(module.screen as never)}
                />
              ))}
            </View>

            {/* Recent Items */}
            {recents.length > 0 && (
              <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Recent</Text>
                {recents.slice(0, 5).map((item, index) => (
                  <Card key={index} title={item.title} subtitle={item.type} />
                ))}
              </View>
            )}

            {/* Bookmarks */}
            {bookmarks.length > 0 && (
              <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Bookmarks</Text>
                {bookmarks.slice(0, 5).map((item, index) => (
                  <Card key={index} title={item.title} subtitle={item.type} />
                ))}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
  },
  offlineBadge: {
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  offlineText: {
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.md,
  },
  darkModeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  darkModeLabel: {
    fontSize: fontSize.lg,
  },
  searchContainer: {
    marginBottom: spacing.lg,
  },
  searchInput: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    fontSize: fontSize.md,
    borderWidth: 1,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  emptyText: {
    fontSize: fontSize.md,
    textAlign: 'center',
    padding: spacing.lg,
  },
});

export default HomeScreen;
