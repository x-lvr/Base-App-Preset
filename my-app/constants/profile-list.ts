import { StyleSheet } from 'react-native';

import {
  Spacing,
  ROW_MIN_HEIGHT,
  RADIUS_GROUP,
  PAGE_HORIZONTAL,
  SECTION_VERTICAL,
} from './design-system';

/**
 * Shared list styles for profile / settings pages.
 * Standardized: 8-pt grid, row height 48–56, group radius 14.
 */
export const profileListStyles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xxl,
  },
  section: {
    marginBottom: Spacing.xl,
    marginHorizontal: PAGE_HORIZONTAL,
  },
  sectionHeader: {
    marginBottom: Spacing.xs,
    paddingHorizontal: Spacing.xxs,
    paddingVertical: Spacing.xxs,
  },
  group: {
    borderRadius: RADIUS_GROUP,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: ROW_MIN_HEIGHT,
    paddingVertical: SECTION_VERTICAL,
    paddingHorizontal: PAGE_HORIZONTAL,
  },
  rowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowLabel: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  rowValue: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: Spacing.xs,
  },
  rowValueSecondary: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: Spacing.xs,
  },
  dangerRow: {
    minHeight: ROW_MIN_HEIGHT,
    paddingVertical: SECTION_VERTICAL,
    paddingHorizontal: PAGE_HORIZONTAL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dangerZone: {
    marginTop: Spacing.xxl,
    marginHorizontal: PAGE_HORIZONTAL,
    borderRadius: RADIUS_GROUP,
    overflow: 'hidden',
  },
});

export const LIST_HORIZONTAL = PAGE_HORIZONTAL;
export const ROW_PADDING_H = PAGE_HORIZONTAL;
export const ROW_PADDING_V = SECTION_VERTICAL;
