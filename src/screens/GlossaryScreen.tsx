/**
 * Glossary Screen - Searchable technical terms with definitions and cross-links
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useGlossary, useGlossarySearch } from '../database/hooks';
import { useAppStore } from '../store/useAppStore';
import { lightTheme, darkTheme, spacing, fontSize, borderRadius } from '../utils/theme';
import { GlossaryTerm } from '../types';

const GlossaryScreen: React.FC = () => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [searchQuery, setSearchQuery] = useState('');
  const { terms: allTerms, loading: loadingAll } = useGlossary();
  const { terms: searchResults, loading: loadingSearch } = useGlossarySearch(searchQuery);

  const displayTerms = searchQuery.trim() !== '' ? searchResults : allTerms;
  const loading = searchQuery.trim() !== '' ? loadingSearch : loadingAll;

  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const toggleTerm = (term: string) => {
    if (expandedTerm === term) {
      setExpandedTerm(null);
    } else {
      setExpandedTerm(term);
      useAppStore.getState().addRecent({
        id: term,
        type: 'glossary',
        title: term,
        timestamp: Date.now(),
      });
    }
  };

  const handleRelatedTermClick = (relatedTerm: string) => {
    setSearchQuery(relatedTerm);
    setExpandedTerm(relatedTerm);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>Technical Glossary</Text>

        {/* Search Input */}
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
            placeholder="Search terms or definitions..."
            placeholderTextColor={theme.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {loading && (
          <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
            Searching...
          </Text>
        )}

        {!loading && displayTerms.length === 0 && (
          <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
            {searchQuery.trim() !== '' ? 'No matching terms found' : 'No terms available'}
          </Text>
        )}

        {/* Terms List */}
        <View style={styles.termsList}>
          {displayTerms.map((term, index) => (
            <View key={index}>
              <TouchableOpacity
                style={[
                  styles.termCard,
                  { backgroundColor: theme.card, borderColor: theme.border },
                  expandedTerm === term.term && styles.termCardExpanded,
                ]}
                onPress={() => toggleTerm(term.term)}
              >
                <View style={styles.termHeader}>
                  <Text style={[styles.termName, { color: theme.text }]}>
                    {term.term}
                  </Text>
                  <Text style={[styles.expandIcon, { color: theme.primary }]}>
                    {expandedTerm === term.term ? '▼' : '▶'}
                  </Text>
                </View>

                {expandedTerm === term.term && (
                  <View style={styles.termContent}>
                    <Text style={[styles.definition, { color: theme.text }]}>
                      {term.definition}
                    </Text>

                    <Text style={[styles.sourcePage, { color: theme.textSecondary }]}>
                      Source: Page {term.sourcePage}
                    </Text>

                    {term.relatedTerms && term.relatedTerms.length > 0 && (
                      <View style={styles.relatedTerms}>
                        <Text style={[styles.relatedLabel, { color: theme.textSecondary }]}>
                          Related terms:
                        </Text>
                        <View style={styles.relatedTags}>
                          {term.relatedTerms.map((related, idx) => (
                            <TouchableOpacity
                              key={idx}
                              style={[
                                styles.relatedTag,
                                { backgroundColor: theme.surface, borderColor: theme.border },
                              ]}
                              onPress={() => handleRelatedTermClick(related)}
                            >
                              <Text style={[styles.relatedTagText, { color: theme.primary }]}>
                                {related}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    )}

                    <TouchableOpacity
                      style={[styles.bookmarkButton, { backgroundColor: theme.primary }]}
                      onPress={() => {
                        const isBookmarked = useAppStore.getState().isBookmarked(term.term);
                        if (!isBookmarked) {
                          useAppStore.getState().addBookmark({
                            id: term.term,
                            type: 'glossary',
                            title: term.term,
                            timestamp: Date.now(),
                          });
                        }
                      }}
                    >
                      <Text style={styles.bookmarkButtonText}>
                        {useAppStore.getState().isBookmarked(term.term)
                          ? '✓ Bookmarked'
                          : '+ Bookmark'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
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
  title: {
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.lg,
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
  loadingText: {
    fontSize: fontSize.md,
    textAlign: 'center',
    padding: spacing.lg,
  },
  emptyText: {
    fontSize: fontSize.md,
    textAlign: 'center',
    padding: spacing.lg,
  },
  termsList: {
    gap: spacing.sm,
  },
  termCard: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    marginBottom: spacing.sm,
  },
  termCardExpanded: {
    marginBottom: spacing.md,
  },
  termHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  termName: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    flex: 1,
  },
  expandIcon: {
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
  termContent: {
    marginTop: spacing.md,
  },
  definition: {
    fontSize: fontSize.md,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  sourcePage: {
    fontSize: fontSize.sm,
    fontStyle: 'italic',
    marginBottom: spacing.md,
  },
  relatedTerms: {
    marginBottom: spacing.md,
  },
  relatedLabel: {
    fontSize: fontSize.sm,
    marginBottom: spacing.sm,
  },
  relatedTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  relatedTag: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    borderWidth: 1,
  },
  relatedTagText: {
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  bookmarkButton: {
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  bookmarkButtonText: {
    color: '#FFF',
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
});

export default GlossaryScreen;
