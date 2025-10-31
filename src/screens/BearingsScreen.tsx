/**
 * Bearings Screen - Failure mode wizard and diagnostic assistant
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useBearingFailureModes } from '../database/hooks';
import { useAppStore } from '../store/useAppStore';
import { lightTheme, darkTheme, spacing, fontSize, borderRadius } from '../utils/theme';
import { BearingFailureMode } from '../types';

const BearingsScreen: React.FC = () => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const { modes, loading } = useBearingFailureModes();
  const [selectedMode, setSelectedMode] = useState<BearingFailureMode | null>(null);

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.loadingText, { color: theme.text }]}>Loading bearing data...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {!selectedMode ? (
          <>
            <Text style={[styles.title, { color: theme.text }]}>Bearing Failure Assistant</Text>
            <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
              Select a failure mode to see likely causes and recommended actions
            </Text>

            <View style={styles.modeGrid}>
              {modes.map((mode) => (
                <TouchableOpacity
                  key={mode.id}
                  style={[
                    styles.modeCard,
                    { backgroundColor: theme.card, borderColor: theme.border },
                  ]}
                  onPress={() => {
                    setSelectedMode(mode);
                    useAppStore.getState().addRecent({
                      id: mode.id,
                      type: 'bearing',
                      title: mode.name,
                      timestamp: Date.now(),
                    });
                  }}
                >
                  <View
                    style={[
                      styles.imagePlaceholder,
                      { backgroundColor: theme.surface },
                    ]}
                  >
                    <Text style={[styles.imagePlaceholderText, { color: theme.textSecondary }]}>
                      📷 {mode.imagePlaceholder}
                    </Text>
                  </View>
                  <Text style={[styles.modeName, { color: theme.text }]}>{mode.name}</Text>
                  <Text
                    style={[styles.modeDescription, { color: theme.textSecondary }]}
                    numberOfLines={2}
                  >
                    {mode.description}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelectedMode(null)}
            >
              <Text style={[styles.backButtonText, { color: theme.primary }]}>
                ← Back to all modes
              </Text>
            </TouchableOpacity>

            <View style={[styles.detailCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <View
                style={[
                  styles.detailImagePlaceholder,
                  { backgroundColor: theme.surface },
                ]}
              >
                <Text style={[styles.imagePlaceholderText, { color: theme.textSecondary }]}>
                  📷 {selectedMode.imagePlaceholder}
                </Text>
              </View>

              <Text style={[styles.detailTitle, { color: theme.text }]}>
                {selectedMode.name}
              </Text>
              <Text style={[styles.detailDescription, { color: theme.textSecondary }]}>
                {selectedMode.description}
              </Text>

              <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                  Likely Causes
                </Text>
                {selectedMode.causes.map((cause, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={[styles.bullet, { color: theme.error }]}>•</Text>
                    <Text style={[styles.listItemText, { color: theme.text }]}>
                      {cause}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                  Recommended Actions
                </Text>
                {selectedMode.actions.map((action, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={[styles.bullet, { color: theme.success }]}>✓</Text>
                    <Text style={[styles.listItemText, { color: theme.text }]}>
                      {action}
                    </Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity
                style={[styles.bookmarkButton, { backgroundColor: theme.primary }]}
                onPress={() => {
                  const isBookmarked = useAppStore.getState().isBookmarked(selectedMode.id);
                  if (!isBookmarked) {
                    useAppStore.getState().addBookmark({
                      id: selectedMode.id,
                      type: 'bearing',
                      title: selectedMode.name,
                      timestamp: Date.now(),
                    });
                  }
                }}
              >
                <Text style={styles.bookmarkButtonText}>
                  {useAppStore.getState().isBookmarked(selectedMode.id)
                    ? '✓ Bookmarked'
                    : '+ Bookmark'}
                </Text>
              </TouchableOpacity>
            </View>
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
  loadingText: {
    fontSize: fontSize.md,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.md,
    marginBottom: spacing.lg,
  },
  modeGrid: {
    gap: spacing.md,
  },
  modeCard: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    marginBottom: spacing.md,
  },
  imagePlaceholder: {
    height: 120,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  imagePlaceholderText: {
    fontSize: fontSize.sm,
  },
  modeName: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  modeDescription: {
    fontSize: fontSize.sm,
  },
  backButton: {
    marginBottom: spacing.md,
  },
  backButtonText: {
    fontSize: fontSize.md,
    fontWeight: '600',
  },
  detailCard: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
  },
  detailImagePlaceholder: {
    height: 200,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  detailTitle: {
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  detailDescription: {
    fontSize: fontSize.md,
    marginBottom: spacing.lg,
    lineHeight: 22,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
    paddingRight: spacing.md,
  },
  bullet: {
    fontSize: fontSize.lg,
    marginRight: spacing.sm,
    fontWeight: 'bold',
  },
  listItemText: {
    flex: 1,
    fontSize: fontSize.md,
    lineHeight: 22,
  },
  bookmarkButton: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  bookmarkButtonText: {
    color: '#FFF',
    fontSize: fontSize.md,
    fontWeight: '600',
  },
});

export default BearingsScreen;
