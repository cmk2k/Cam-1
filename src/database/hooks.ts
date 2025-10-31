/**
 * React hooks for database queries
 */

import { useState, useEffect } from 'react';
import {
  getCalculators,
  getCalculatorById,
  getBearingFailureModes,
  getGlossaryTerms,
  searchGlossary,
  globalSearch,
} from './db';
import { Calculator, BearingFailureMode, GlossaryTerm } from '../types';

/**
 * Hook to fetch all calculators
 */
export const useCalculators = () => {
  const [calculators, setCalculators] = useState<Calculator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCalculators();
        setCalculators(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { calculators, loading, error };
};

/**
 * Hook to fetch a single calculator by ID
 */
export const useCalculator = (id: string) => {
  const [calculator, setCalculator] = useState<Calculator | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCalculatorById(id);
        setCalculator(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchData();
  }, [id]);

  return { calculator, loading, error };
};

/**
 * Hook to fetch all bearing failure modes
 */
export const useBearingFailureModes = () => {
  const [modes, setModes] = useState<BearingFailureMode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getBearingFailureModes();
        setModes(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { modes, loading, error };
};

/**
 * Hook to fetch all glossary terms
 */
export const useGlossary = () => {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getGlossaryTerms();
        setTerms(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { terms, loading, error };
};

/**
 * Hook to search glossary
 */
export const useGlossarySearch = (query: string) => {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setTerms([]);
        return;
      }

      try {
        setLoading(true);
        const data = await searchGlossary(query);
        setTerms(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { terms, loading, error };
};

/**
 * Hook for global search
 */
export const useGlobalSearch = (query: string) => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        const data = await globalSearch(query);
        setResults(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return { results, loading, error };
};
