/**
 * Design system: typography, spacing, radius, touch targets.
 * 8-pt grid. System fonts only (SF / Roboto).
 * Strict alignment with iOS HIG / Material 3.
 */

import { Platform, StyleSheet } from 'react-native';

/** 8-pt grid: 4, 8, 12, 16, 20, 24 (+ 32 for scroll/large gaps) */
export const Spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

/** Horizontal page padding (16–20) */
export const PAGE_HORIZONTAL = 16;

/** Section vertical padding (12–16) */
export const SECTION_VERTICAL = 12;

/** List row min height: 48–56 (platform-appropriate) */
export const ROW_MIN_HEIGHT = Platform.OS === 'ios' ? 52 : 48;

/** Min touch target: ≥44 (iOS HIG / Material) */
export const TOUCH_TARGET_MIN = Platform.OS === 'ios' ? 44 : 48;

/** Small elements (buttons, inputs) */
export const RADIUS_SMALL = 10;

/** List groups / cards */
export const RADIUS_GROUP = 14;

/** Typography — spec: Title/Large 28, Screen Title 22, Section Header 15, Body Primary 16, Body Secondary 14, Caption 12. Weights 400, 500, 600. */
export const Typography = StyleSheet.create({
  titleLarge: { fontSize: 28, fontWeight: '700', lineHeight: 34 },
  screenTitle: { fontSize: 22, fontWeight: '600', lineHeight: 28 },
  sectionHeader: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  bodyPrimary: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  bodySecondary: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
  caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
  /** Legacy aliases for compatibility */
  title1: { fontSize: 28, fontWeight: '700', lineHeight: 34 },
  title2: { fontSize: 22, fontWeight: '600', lineHeight: 28 },
  title3: { fontSize: 20, fontWeight: '600', lineHeight: 25 },
  headline: { fontSize: 16, fontWeight: '600', lineHeight: 22 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  callout: { fontSize: 16, fontWeight: '400', lineHeight: 21 },
  subhead: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
  footnote: { fontSize: 13, fontWeight: '400', lineHeight: 18 },
  caption1: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
});
