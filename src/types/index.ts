/**
 * Type definitions for Applied Technical Reference app
 */

export interface Calculator {
  id: string;
  title: string;
  inputs: string[];
  outputs: string[];
  equation: string;
  units: string;
  notes: string;
  sourcePage: string;
}

export interface BearingFailureMode {
  id: string;
  name: string;
  description: string;
  causes: string[];
  actions: string[];
  imagePlaceholder: string;
}

export interface Table {
  id: string;
  title: string;
  headers: string[];
  rows: string[][];
  sourcePage: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  sourcePage: string;
  relatedTerms?: string[];
}

export interface AppData {
  calculators: Calculator[];
  bearingFailureModes: BearingFailureMode[];
  tables: Table[];
  glossary: GlossaryTerm[];
}

export interface RecentItem {
  id: string;
  type: 'calculator' | 'glossary' | 'bearing';
  title: string;
  timestamp: number;
}

export interface Bookmark {
  id: string;
  type: 'calculator' | 'glossary' | 'bearing';
  title: string;
  timestamp: number;
}
