/**
 * Zustand store for global app state
 * Manages theme, recents, bookmarks, and offline status
 */

import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecentItem, Bookmark } from '../types';
import { db } from '../database/db';

interface AppStore {
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // Offline status
  isOffline: boolean;
  setOfflineStatus: (status: boolean) => void;

  // Recents
  recents: RecentItem[];
  addRecent: (item: RecentItem) => Promise<void>;
  loadRecents: () => Promise<void>;

  // Bookmarks
  bookmarks: Bookmark[];
  addBookmark: (item: Bookmark) => Promise<void>;
  removeBookmark: (id: string) => Promise<void>;
  isBookmarked: (id: string) => boolean;
  loadBookmarks: () => Promise<void>;

  // Initialization
  isInitialized: boolean;
  setInitialized: (status: boolean) => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
  // Theme
  isDarkMode: false,
  toggleDarkMode: async () => {
    const newMode = !get().isDarkMode;
    set({ isDarkMode: newMode });
    await AsyncStorage.setItem('darkMode', JSON.stringify(newMode));
  },

  // Offline status
  isOffline: true, // Default to true (offline-first)
  setOfflineStatus: (status) => set({ isOffline: status }),

  // Recents
  recents: [],
  addRecent: async (item: RecentItem) => {
    try {
      // Add to database
      await db.runAsync(
        `INSERT OR REPLACE INTO recents (id, type, title, timestamp)
         VALUES (?, ?, ?, ?)`,
        [item.id, item.type, item.title, item.timestamp]
      );

      // Update state (keep last 20)
      const recents = [item, ...get().recents.filter((r) => r.id !== item.id)].slice(0, 20);
      set({ recents });
    } catch (error) {
      console.error('Error adding recent:', error);
    }
  },

  loadRecents: async () => {
    try {
      const results = await db.getAllAsync<RecentItem>(
        'SELECT * FROM recents ORDER BY timestamp DESC LIMIT 20'
      );
      set({ recents: results });
    } catch (error) {
      console.error('Error loading recents:', error);
    }
  },

  // Bookmarks
  bookmarks: [],
  addBookmark: async (item: Bookmark) => {
    try {
      // Add to database
      await db.runAsync(
        `INSERT INTO bookmarks (id, type, title, timestamp)
         VALUES (?, ?, ?, ?)`,
        [item.id, item.type, item.title, item.timestamp]
      );

      // Update state
      set({ bookmarks: [...get().bookmarks, item] });
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  },

  removeBookmark: async (id: string) => {
    try {
      // Remove from database
      await db.runAsync('DELETE FROM bookmarks WHERE id = ?', [id]);

      // Update state
      set({ bookmarks: get().bookmarks.filter((b) => b.id !== id) });
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  },

  isBookmarked: (id: string) => {
    return get().bookmarks.some((b) => b.id === id);
  },

  loadBookmarks: async () => {
    try {
      const results = await db.getAllAsync<Bookmark>(
        'SELECT * FROM bookmarks ORDER BY timestamp DESC'
      );
      set({ bookmarks: results });
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    }
  },

  // Initialization
  isInitialized: false,
  setInitialized: (status) => set({ isInitialized: status }),
}));

/**
 * Load persisted theme preference
 */
export const loadThemePreference = async () => {
  try {
    const darkMode = await AsyncStorage.getItem('darkMode');
    if (darkMode !== null) {
      useAppStore.setState({ isDarkMode: JSON.parse(darkMode) });
    }
  } catch (error) {
    console.error('Error loading theme preference:', error);
  }
};
