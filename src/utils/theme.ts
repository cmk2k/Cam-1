/**
 * Theme configuration for light and dark modes
 */

export const lightTheme = {
  background: '#FFFFFF',
  surface: '#F5F5F5',
  card: '#FFFFFF',
  primary: '#1a73e8',
  primaryDark: '#1557b0',
  secondary: '#34A853',
  text: '#202124',
  textSecondary: '#5f6368',
  border: '#DADCE0',
  error: '#D93025',
  warning: '#F9AB00',
  success: '#34A853',
  shadow: '#000000',
  disabled: '#9AA0A6',
  placeholder: '#9AA0A6',
};

export const darkTheme = {
  background: '#202124',
  surface: '#292A2D',
  card: '#35363A',
  primary: '#8AB4F8',
  primaryDark: '#669DF6',
  secondary: '#81C995',
  text: '#E8EAED',
  textSecondary: '#9AA0A6',
  border: '#5F6368',
  error: '#F28B82',
  warning: '#FDD663',
  success: '#81C995',
  shadow: '#000000',
  disabled: '#5F6368',
  placeholder: '#9AA0A6',
};

export type Theme = typeof lightTheme;

/**
 * Common spacing values
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

/**
 * Common font sizes
 */
export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
};

/**
 * Common border radius values
 */
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999,
};

/**
 * Large tap target minimum size (for accessibility)
 */
export const minTapTarget = 44;
