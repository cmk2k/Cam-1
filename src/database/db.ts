/**
 * SQLite database setup and initialization
 * Loads data from assets/data.json on first run
 */

import * as SQLite from 'expo-sqlite';
import { AppData, Calculator, GlossaryTerm, BearingFailureMode, Table } from '../types';

const DB_NAME = 'applied_tech_ref.db';

// Open database connection
export const db = SQLite.openDatabaseSync(DB_NAME);

/**
 * Initialize database tables
 */
export const initDatabase = async () => {
  try {
    // Create tables
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS calculators (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        inputs TEXT NOT NULL,
        outputs TEXT NOT NULL,
        equation TEXT NOT NULL,
        units TEXT NOT NULL,
        notes TEXT,
        sourcePage TEXT
      );

      CREATE TABLE IF NOT EXISTS bearing_failure_modes (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        causes TEXT NOT NULL,
        actions TEXT NOT NULL,
        imagePlaceholder TEXT
      );

      CREATE TABLE IF NOT EXISTS tables (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        headers TEXT NOT NULL,
        rows TEXT NOT NULL,
        sourcePage TEXT
      );

      CREATE TABLE IF NOT EXISTS glossary (
        term TEXT PRIMARY KEY,
        definition TEXT NOT NULL,
        sourcePage TEXT,
        relatedTerms TEXT
      );

      CREATE TABLE IF NOT EXISTS recents (
        id TEXT PRIMARY KEY,
        type TEXT NOT NULL,
        title TEXT NOT NULL,
        timestamp INTEGER NOT NULL
      );

      CREATE TABLE IF NOT EXISTS bookmarks (
        id TEXT PRIMARY KEY,
        type TEXT NOT NULL,
        title TEXT NOT NULL,
        timestamp INTEGER NOT NULL
      );

      CREATE TABLE IF NOT EXISTS app_metadata (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

/**
 * Check if data has been seeded
 */
export const isDataSeeded = async (): Promise<boolean> => {
  try {
    const result = await db.getFirstAsync<{ value: string }>(
      'SELECT value FROM app_metadata WHERE key = ?',
      ['data_seeded']
    );
    return result?.value === 'true';
  } catch (error) {
    return false;
  }
};

/**
 * Seed database with data from JSON file
 */
export const seedDatabase = async (data: AppData) => {
  try {
    console.log('Seeding database...');

    // Clear existing data
    await db.execAsync(`
      DELETE FROM calculators;
      DELETE FROM bearing_failure_modes;
      DELETE FROM tables;
      DELETE FROM glossary;
    `);

    // Insert calculators
    for (const calc of data.calculators) {
      await db.runAsync(
        `INSERT INTO calculators (id, title, inputs, outputs, equation, units, notes, sourcePage)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          calc.id,
          calc.title,
          JSON.stringify(calc.inputs),
          JSON.stringify(calc.outputs),
          calc.equation,
          calc.units,
          calc.notes,
          calc.sourcePage,
        ]
      );
    }

    // Insert bearing failure modes
    if (data.bearingFailureModes) {
      for (const mode of data.bearingFailureModes) {
        await db.runAsync(
          `INSERT INTO bearing_failure_modes (id, name, description, causes, actions, imagePlaceholder)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [
            mode.id,
            mode.name,
            mode.description,
            JSON.stringify(mode.causes),
            JSON.stringify(mode.actions),
            mode.imagePlaceholder,
          ]
        );
      }
    }

    // Insert tables
    if (data.tables) {
      for (const table of data.tables) {
        await db.runAsync(
          `INSERT INTO tables (id, title, headers, rows, sourcePage)
           VALUES (?, ?, ?, ?, ?)`,
          [
            table.id,
            table.title,
            JSON.stringify(table.headers),
            JSON.stringify(table.rows),
            table.sourcePage,
          ]
        );
      }
    }

    // Insert glossary terms
    for (const term of data.glossary) {
      await db.runAsync(
        `INSERT INTO glossary (term, definition, sourcePage, relatedTerms)
         VALUES (?, ?, ?, ?)`,
        [
          term.term,
          term.definition,
          term.sourcePage,
          term.relatedTerms ? JSON.stringify(term.relatedTerms) : null,
        ]
      );
    }

    // Mark as seeded
    await db.runAsync(
      `INSERT OR REPLACE INTO app_metadata (key, value) VALUES (?, ?)`,
      ['data_seeded', 'true']
    );

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};

/**
 * Get all calculators
 */
export const getCalculators = async (): Promise<Calculator[]> => {
  try {
    const results = await db.getAllAsync<any>('SELECT * FROM calculators');
    return results.map((row) => ({
      ...row,
      inputs: JSON.parse(row.inputs),
      outputs: JSON.parse(row.outputs),
    }));
  } catch (error) {
    console.error('Error fetching calculators:', error);
    return [];
  }
};

/**
 * Get calculator by ID
 */
export const getCalculatorById = async (id: string): Promise<Calculator | null> => {
  try {
    const result = await db.getFirstAsync<any>(
      'SELECT * FROM calculators WHERE id = ?',
      [id]
    );
    if (!result) return null;
    return {
      ...result,
      inputs: JSON.parse(result.inputs),
      outputs: JSON.parse(result.outputs),
    };
  } catch (error) {
    console.error('Error fetching calculator:', error);
    return null;
  }
};

/**
 * Get all bearing failure modes
 */
export const getBearingFailureModes = async (): Promise<BearingFailureMode[]> => {
  try {
    const results = await db.getAllAsync<any>('SELECT * FROM bearing_failure_modes');
    return results.map((row) => ({
      ...row,
      causes: JSON.parse(row.causes),
      actions: JSON.parse(row.actions),
    }));
  } catch (error) {
    console.error('Error fetching bearing failure modes:', error);
    return [];
  }
};

/**
 * Get all glossary terms
 */
export const getGlossaryTerms = async (): Promise<GlossaryTerm[]> => {
  try {
    const results = await db.getAllAsync<any>('SELECT * FROM glossary ORDER BY term ASC');
    return results.map((row) => ({
      ...row,
      relatedTerms: row.relatedTerms ? JSON.parse(row.relatedTerms) : undefined,
    }));
  } catch (error) {
    console.error('Error fetching glossary terms:', error);
    return [];
  }
};

/**
 * Search glossary terms (fuzzy search)
 */
export const searchGlossary = async (query: string): Promise<GlossaryTerm[]> => {
  try {
    const searchPattern = `%${query.toLowerCase()}%`;
    const results = await db.getAllAsync<any>(
      `SELECT * FROM glossary
       WHERE LOWER(term) LIKE ? OR LOWER(definition) LIKE ?
       ORDER BY term ASC`,
      [searchPattern, searchPattern]
    );
    return results.map((row) => ({
      ...row,
      relatedTerms: row.relatedTerms ? JSON.parse(row.relatedTerms) : undefined,
    }));
  } catch (error) {
    console.error('Error searching glossary:', error);
    return [];
  }
};

/**
 * Global search across all content
 */
export const globalSearch = async (query: string): Promise<any[]> => {
  try {
    const searchPattern = `%${query.toLowerCase()}%`;
    const results: any[] = [];

    // Search calculators
    const calcs = await db.getAllAsync<any>(
      `SELECT id, title, 'calculator' as type FROM calculators
       WHERE LOWER(title) LIKE ? OR LOWER(notes) LIKE ?`,
      [searchPattern, searchPattern]
    );
    results.push(...calcs);

    // Search glossary
    const glossary = await db.getAllAsync<any>(
      `SELECT term as id, term as title, 'glossary' as type FROM glossary
       WHERE LOWER(term) LIKE ? OR LOWER(definition) LIKE ?`,
      [searchPattern, searchPattern]
    );
    results.push(...glossary);

    // Search bearing modes
    const bearings = await db.getAllAsync<any>(
      `SELECT id, name as title, 'bearing' as type FROM bearing_failure_modes
       WHERE LOWER(name) LIKE ? OR LOWER(description) LIKE ?`,
      [searchPattern, searchPattern]
    );
    results.push(...bearings);

    return results;
  } catch (error) {
    console.error('Error in global search:', error);
    return [];
  }
};
